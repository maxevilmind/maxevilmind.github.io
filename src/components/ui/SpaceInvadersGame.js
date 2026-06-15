import { LitElement, html, css } from 'lit';

/**
 * Minimal canvas-only Space Invaders widget for the home hero card.
 */
export class SpaceInvadersGame extends LitElement {
  static properties = {
    score: { type: Number },
    status: { type: String },
    highScore: { type: Number }
  };

  static styles = css`
    :host {
      display: block;
      min-width: 0;
    }

    .game-shell {
      position: relative;
      overflow: hidden;
      border: 1px solid var(--color-border, rgba(160, 133, 255, 0.26));
      border-radius: var(--radius-md, 18px);
      padding: var(--space-3, 12px);
      background:
        linear-gradient(145deg, rgba(8, 5, 18, 0.94), rgba(19, 16, 41, 0.74)),
        radial-gradient(circle at 50% 0%, rgba(94, 252, 255, 0.16), transparent 42%);
      box-shadow: inset 0 0 24px rgba(94, 252, 255, 0.08);
      outline: none;
      user-select: none;
    }

    .game-shell:focus-visible {
      border-color: var(--color-primary, #5efcff);
      box-shadow:
        0 0 0 2px rgba(94, 252, 255, 0.15),
        inset 0 0 24px rgba(94, 252, 255, 0.12);
    }

    canvas {
      display: block;
      width: 100%;
      height: clamp(220px, 34vw, 280px);
      border-radius: calc(var(--radius-md, 18px) - 6px);
      background: #080512;
      image-rendering: pixelated;
      touch-action: none;
    }

    .hud {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      gap: var(--space-2, 8px);
      margin-top: var(--space-3, 12px);
      color: var(--color-text-muted, #a9a4ca);
      font-family: var(--font-family-mono, monospace);
      font-size: 0.64rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .hud span {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .hud strong {
      color: var(--color-primary, #5efcff);
      font-weight: 900;
    }
  `;

  constructor() {
    super();
    this.score = 0;
    this.status = 'ready';
    this.highScore = 0;
    this._width = 320;
    this._height = 240;
    this._playerX = 160;
    this._cooldown = 0;
    this._wave = 1;
    this._canDrop = false;
    this._isGameOver = false;
    this._direction = 1;
    this._bullets = [];
    this._invaders = [];
    this._stars = [];
    this._keys = new Set();
    this._colors = {
      primary: '#5efcff',
      accent: '#ff4df3',
      green: '#78ff8a',
      muted: '#a9a4ca',
      text: '#f8f6ff'
    };

    this._tick = this._tick.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
    this._handlePointerDown = this._handlePointerDown.bind(this);
    this._handlePointerMove = this._handlePointerMove.bind(this);
  }

  render() {
    return html`
      <div
        class="game-shell"
        tabindex="0"
        @pointerenter=${this._handlePointerEnter}
        @pointerleave=${this._handlePointerLeave}
        @keydown=${this._handleKeyDown}
        @keyup=${this._handleKeyUp}
        @pointerdown=${this._handlePointerDown}
        @pointermove=${this._handlePointerMove}
      >
        <canvas role="img" aria-label="Minimal neon Space Invaders mini game"></canvas>
        <div class="hud" aria-live="polite">
          <span>score <strong>${this.score}</strong></span>
          <span>${this.status}</span>
          <span>${this._isGameOver ? 'tap to restart' : 'a d / space'}</span>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this._canvas = this.renderRoot.querySelector('canvas');
    this._ctx = this._canvas.getContext('2d');
    this._syncThemeColors();
    this._resize();

    this._resizeObserver = new ResizeObserver(() => this._resize());
    this._resizeObserver.observe(this._canvas);

    this.highScore = this._getHighScore();
    this.status = 'hover to start';
    this._startNewRun();
    this._lastTime = performance.now();
    this._frame = requestAnimationFrame(this._tick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._frame) {
      cancelAnimationFrame(this._frame);
      this._frame = 0;
    }
    this._resizeObserver?.disconnect();
  }

  _syncThemeColors() {
    const styles = getComputedStyle(this);
    this._colors = {
      primary: styles.getPropertyValue('--color-primary').trim() || this._colors.primary,
      accent: styles.getPropertyValue('--color-accent').trim() || this._colors.accent,
      green: styles.getPropertyValue('--color-green').trim() || this._colors.green,
      muted: styles.getPropertyValue('--color-text-muted').trim() || this._colors.muted,
      text: styles.getPropertyValue('--color-text').trim() || this._colors.text
    };
  }

  _resize() {
    const rect = this._canvas.getBoundingClientRect();
    const width = Math.max(260, Math.round(rect.width));
    const height = Math.max(210, Math.round(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    this._width = width;
    this._height = height;
    this._canvas.width = Math.round(width * dpr);
    this._canvas.height = Math.round(height * dpr);
    this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this._playerX = this._clamp(this._playerX || width / 2, 22, width - 22);
    this._seedStars();
    this._spawnWave();
  }

  _getHighScore() {
    try {
      const stored = window.localStorage.getItem('spaceInvadersHighScore');
      const parsed = Number(stored);
      return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
    } catch (_error) {
      return 0;
    }
  }

  _saveHighScore(value) {
    try {
      window.localStorage.setItem('spaceInvadersHighScore', String(value));
    } catch (_error) {
      // localStorage may be disabled in restricted contexts
    }
  }

  _startNewRun() {
    this._isGameOver = false;
    this._canDrop = false;
    this._cooldown = 0;
    this._wave = 1;
    this._direction = 1;
    this._bullets = [];
    this.score = 0;
    this.status = 'hover to start';
    this._playerX = this._clamp(this._width / 2, 22, this._width - 22);
    this._spawnWave();
  }

  _endGame() {
    this._isGameOver = true;
    this._canDrop = false;
    this._bullets = [];
    this._keys.clear();

    if (this.score > this.highScore) {
      this.highScore = this.score;
      this._saveHighScore(this.highScore);
      this.status = 'game over | new high score';
      return;
    }

    this.status = 'game over';
  }

  _seedStars() {
    this._stars = Array.from({ length: 28 }, (_, index) => ({
      x: (index * 47) % this._width,
      y: (index * 29) % this._height,
      size: index % 3 === 0 ? 1.8 : 1
    }));
  }

  _spawnWave() {
    const cols = this._width < 320 ? 5 : 6;
    const rows = 3;
    const gapX = (this._width - 64) / (cols - 1);
    const gapY = 26;

    this._direction = 1;
    this._invaders = [];

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        this._invaders.push({
          x: 32 + col * gapX,
          y: 42 + row * gapY,
          row,
          alive: true
        });
      }
    }
  }

  _tick(now) {
    const delta = Math.min((now - this._lastTime) / 1000, 0.033);
    this._lastTime = now;

    this._update(delta);
    this._draw();
    this._frame = requestAnimationFrame(this._tick);
  }

  _update(delta) {
    if (this._isGameOver) {
      return;
    }

    const playerSpeed = 210;
    const playerY = this._height - 32;

    if (this._keys.has('left')) {
      this._playerX -= playerSpeed * delta;
    }

    if (this._keys.has('right')) {
      this._playerX += playerSpeed * delta;
    }

    if (this._keys.has('shoot')) {
      this._shoot();
    }

    this._playerX = this._clamp(this._playerX, 22, this._width - 22);
    this._cooldown = Math.max(0, this._cooldown - delta);

    this._bullets.forEach((bullet) => {
      bullet.y -= 260 * delta;
    });
    this._bullets = this._bullets.filter((bullet) => bullet.y > 0 && !bullet.dead);

    const alive = this._invaders.filter((invader) => invader.alive);
    if (!alive.length) {
      this.score += 50;
      this._wave += 1;
      this.status = `wave ${this._wave}`;
      this._spawnWave();
      return;
    }

    const speed = 28 + this._wave * 3;
    let shouldDrop = false;
    for (const invader of alive) {
      const nextX = invader.x + this._direction * speed * delta;
      if (nextX < 18 || nextX > this._width - 18) {
        shouldDrop = true;
        break;
      }
    }

    if (shouldDrop) {
      this._direction *= -1;
    }

    for (const invader of alive) {
      invader.x += this._direction * speed * delta;
      if (shouldDrop && this._canDrop) {
        invader.y += 11;
      }
    }

    for (const bullet of this._bullets) {
      for (const invader of alive) {
        if (invader.alive && Math.abs(bullet.x - invader.x) < 12 && Math.abs(bullet.y - invader.y) < 12) {
          bullet.dead = true;
          invader.alive = false;
          this.score += 10;
          this.status = 'hit';
          break;
        }
      }
    }

    if (alive.some((invader) => invader.y > playerY - 30)) {
      this._endGame();
      return;
    }
  }

  _draw() {
    const ctx = this._ctx;
    ctx.clearRect(0, 0, this._width, this._height);
    this._drawBackdrop(ctx);
    this._drawInvaders(ctx);
    this._drawBullets(ctx);
    this._drawPlayer(ctx);
    if (this._isGameOver) {
      this._drawGameOver(ctx);
    }
  }

  _drawGameOver(ctx) {
    const isNewHighScore = this.score === this.highScore && this.score > 0;

    ctx.save();
    ctx.fillStyle = 'rgba(12, 4, 25, 0.86)';
    ctx.fillRect(this._width * 0.05, this._height * 0.24, this._width * 0.9, this._height * 0.46);

    ctx.textAlign = 'center';
    ctx.fillStyle = this._colors.accent;
    ctx.font = '700 34px monospace';
    ctx.fillText('GAME OVER', this._width / 2, this._height * 0.43);

    ctx.fillStyle = this._colors.text;
    ctx.font = '600 15px monospace';
    ctx.fillText(`Score: ${this.score}`, this._width / 2, this._height * 0.55);
    ctx.fillText(`High Score: ${this.highScore}`, this._width / 2, this._height * 0.64);

    if (isNewHighScore) {
      ctx.fillStyle = this._colors.green;
      ctx.font = '600 14px monospace';
      ctx.fillText('NEW HIGH SCORE', this._width / 2, this._height * 0.72);
    }

    ctx.restore();
  }

  _drawBackdrop(ctx) {
    ctx.fillStyle = 'rgba(8, 5, 18, 0.96)';
    ctx.fillRect(0, 0, this._width, this._height);

    ctx.save();
    ctx.globalAlpha = 0.24;
    ctx.strokeStyle = this._colors.primary;
    ctx.lineWidth = 1;
    for (let y = 18; y < this._height; y += 18) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(this._width, y);
      ctx.stroke();
    }
    ctx.restore();

    ctx.fillStyle = this._colors.green;
    for (const star of this._stars) {
      star.y += 0.12 * star.size;
      if (star.y > this._height) {
        star.y = 0;
      }
      ctx.globalAlpha = 0.35 + star.size * 0.16;
      ctx.fillRect(star.x, star.y, star.size, star.size);
    }
    ctx.globalAlpha = 1;
  }

  _drawInvaders(ctx) {
    for (const invader of this._invaders) {
      if (!invader.alive) {
        continue;
      }

      const color = invader.row === 0 ? this._colors.accent : this._colors.primary;
      ctx.save();
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.fillStyle = color;
      ctx.fillRect(invader.x - 7, invader.y - 7, 14, 4);
      ctx.fillRect(invader.x - 11, invader.y - 2, 22, 7);
      ctx.fillRect(invader.x - 6, invader.y + 6, 4, 4);
      ctx.fillRect(invader.x + 2, invader.y + 6, 4, 4);
      ctx.restore();
    }
  }

  _drawBullets(ctx) {
    ctx.save();
    ctx.shadowColor = this._colors.green;
    ctx.shadowBlur = 10;
    ctx.fillStyle = this._colors.green;
    for (const bullet of this._bullets) {
      ctx.fillRect(bullet.x - 1.5, bullet.y - 9, 3, 10);
    }
    ctx.restore();
  }

  _drawPlayer(ctx) {
    const y = this._height - 32;
    ctx.save();
    ctx.shadowColor = this._colors.primary;
    ctx.shadowBlur = 14;
    ctx.fillStyle = this._colors.primary;
    ctx.beginPath();
    ctx.moveTo(this._playerX, y - 16);
    ctx.lineTo(this._playerX - 16, y + 12);
    ctx.lineTo(this._playerX + 16, y + 12);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = this._colors.text;
    ctx.fillRect(this._playerX - 3, y - 2, 6, 10);
    ctx.restore();
  }

  _shoot() {
    if (this._cooldown > 0) {
      return;
    }

    this._bullets.push({ x: this._playerX, y: this._height - 48 });
    this._cooldown = 0.24;
    this.status = 'fire';
  }

  _handleKeyDown(event) {
    if (this._isGameOver && (event.key === ' ' || event.key === 'Spacebar')) {
      this._startNewRun();
      return;
    }

    const control = this._keyToControl(event.key);
    if (!control) {
      return;
    }

    if (this._isGameOver) {
      return;
    }

    event.preventDefault();
    this._keys.add(control);
  }

  _handleKeyUp(event) {
    const control = this._keyToControl(event.key);
    if (!control) {
      return;
    }

    event.preventDefault();

    if (this._isGameOver) {
      return;
    }

    this._keys.delete(control);
  }

  _handlePointerDown(event) {
    if (this._isGameOver) {
      this._startNewRun();
    }

    this._canDrop = true;
    event.currentTarget.focus({ preventScroll: true });
    event.currentTarget.setPointerCapture(event.pointerId);
    this._movePlayerToPointer(event);

    if (!this._isGameOver) {
      this._shoot();
    }
  }

  _handlePointerEnter() {
    if (!this._isGameOver) {
      this._canDrop = true;
      this.status = `wave ${this._wave}`;
      return;
    }

    this.status = 'game over';
  }

  _handlePointerLeave() {
    if (this._isGameOver) {
      return;
    }

    this._canDrop = false;
    this.status = 'hover to start';
  }

  _handlePointerMove(event) {
    this._movePlayerToPointer(event);

    if (event.buttons === 1) {
      this._shoot();
    }
  }

  _movePlayerToPointer(event) {
    const rect = this._canvas.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * this._width;
    this._playerX = this._clamp(x, 22, this._width - 22);
  }

  _keyToControl(key) {
    if (key === 'ArrowLeft' || key.toLowerCase() === 'a') {
      return 'left';
    }

    if (key === 'ArrowRight' || key.toLowerCase() === 'd') {
      return 'right';
    }

    if (key === ' ' || key === 'Spacebar') {
      return 'shoot';
    }

    return '';
  }

  _clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
}

customElements.define('space-invaders-game', SpaceInvadersGame);
