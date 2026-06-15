import{i as e,a as t,b as a}from"./chunks/vendor-DbZKYTSE.js";const s={HOME:"home",PROJECTS:"projects",ABOUT:"about",CONTACT:"contact",BLOG:"blog"},r=s.HOME;class i extends e{static properties={href:{type:String},variant:{type:String},fullWidth:{type:Boolean,attribute:"full-width"},target:{type:String}};static styles=t`
    :host {
      display: inline-flex;
    }

    :host([hidden]) {
      display: none;
    }

    .button {
      position: relative;
      isolation: isolate;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.55rem;
      min-height: 42px;
      overflow: hidden;
      border-radius: var(--radius-pill, 999px);
      border: 1px solid var(--button-border, var(--color-border, rgba(160, 133, 255, 0.26)));
      padding: 0.66rem 1rem;
      text-decoration: none;
      color: var(--button-fg, var(--color-secondary-foreground, #efeaff));
      cursor: pointer;
      background:
        linear-gradient(135deg, var(--button-bg-start, rgba(255, 255, 255, 0.08)), var(--button-bg-end, rgba(255, 255, 255, 0.03))),
        var(--color-secondary, #1a1432);
      transition:
        transform 160ms ease,
        border-color 160ms ease,
        box-shadow 160ms ease,
        color 160ms ease,
        background-color 160ms ease;
      font-family: var(--font-family-mono, monospace);
      font-size: 0.74rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      line-height: 1.2;
      text-transform: uppercase;
      white-space: nowrap;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
    }

    .button::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background: repeating-linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.12) 0,
        rgba(255, 255, 255, 0.12) 1px,
        transparent 1px,
        transparent 5px
      );
      opacity: 0.16;
    }

    .button:hover {
      transform: translateY(-1px);
      border-color: var(--button-border-hover, var(--color-border-strong, rgba(94, 252, 255, 0.48)));
      box-shadow: var(--button-shadow, 0 0 24px rgba(94, 252, 255, 0.18));
    }

    .button:active {
      transform: translateY(0);
    }

    .button.primary {
      --button-bg-start: rgba(94, 252, 255, 0.92);
      --button-bg-end: rgba(255, 77, 243, 0.76);
      --button-border: rgba(94, 252, 255, 0.78);
      --button-border-hover: rgba(255, 255, 255, 0.78);
      --button-fg: var(--color-primary-foreground, #021014);
      --button-shadow: 0 0 28px rgba(94, 252, 255, 0.32), 0 0 34px rgba(255, 77, 243, 0.22);
    }

    .button.secondary {
      --button-bg-start: rgba(255, 255, 255, 0.075);
      --button-bg-end: rgba(94, 252, 255, 0.08);
      --button-fg: var(--color-secondary-foreground, #efeaff);
      --button-border: var(--color-border, rgba(160, 133, 255, 0.26));
    }

    .button.ghost {
      --button-bg-start: transparent;
      --button-bg-end: transparent;
      --button-border: transparent;
      --button-fg: var(--color-primary, #5efcff);
      --button-shadow: none;
    }

    .button:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 3px color-mix(in srgb, var(--color-primary, #5efcff) 28%, transparent),
        var(--button-shadow, 0 0 24px rgba(94, 252, 255, 0.18));
    }

    .button.full {
      width: 100%;
    }
  `;constructor(){super(),this.href="",this.variant="secondary",this.fullWidth=!1,this.target="_self"}render(){const e=`button ${this.variant} ${this.fullWidth?"full":""}`;if(this.href){const t="_blank"===this.target?"noopener noreferrer":"";return a`<a class=${e} href=${this.href} target=${this.target} rel=${t}><slot></slot></a>`}return a`<button class=${e} type="button"><slot></slot></button>`}}customElements.define("app-button",i);const o={[s.HOME]:()=>Promise.resolve().then((function(){return d})),[s.PROJECTS]:()=>import("./chunks/ProjectsPage-BYR8Wgfr.js"),[s.BLOG]:()=>import("./chunks/BlogPage-DUGbW2n-.js"),[s.ABOUT]:()=>import("./chunks/AboutPage-D9iDyBNq.js"),[s.CONTACT]:()=>import("./chunks/ContactPage-KcfH_z0Z.js"),blogPost:()=>import("./chunks/BlogPostPage-BpEwFyqM.js")};class n extends e{static properties={currentPage:{type:String},isMenuOpen:{type:Boolean},isPageLoading:{type:Boolean},pageLoadError:{type:String}};constructor(){super(),this.currentPage=r,this.isMenuOpen=!1,this.isPageLoading=!1,this.pageLoadError="",this._loadedPages=new Set([s.HOME]),this._routeLoadToken=0,this._setupRouting()}_setupRouting(){this._handleHashChange(),window.addEventListener("hashchange",(()=>this._handleHashChange()))}_handleHashChange(){const e=window.location.hash.substring(1);e&&Object.values(s).includes(e)||e.startsWith(`${s.BLOG}/`)?this.currentPage=e:e||""!==window.location.hash||(this.currentPage=r),this._loadCurrentPage()}_getPageKey(e=this.currentPage){return e.startsWith(`${s.BLOG}/`)?"blogPost":e}async _loadCurrentPage(){const e=this._getPageKey(),t=o[e]||o[r];if(this._loadedPages.has(e))return this.isPageLoading=!1,void(this.pageLoadError="");const a=++this._routeLoadToken;this.isPageLoading=!0,this.pageLoadError="";try{await t(),this._loadedPages.add(e)}catch(e){this.pageLoadError="Could not load this page."}finally{a===this._routeLoadToken&&(this.isPageLoading=!1)}}_prefetchRoute(e){const t=this._getPageKey(e);this._loadedPages.has(t)||o[t]?.().then((()=>this._loadedPages.add(t))).catch((()=>{}))}_navigateTo(e){window.location.hash=e}createRenderRoot(){return this}_toggleMenu(){this.isMenuOpen=!this.isMenuOpen}_closeMenu(){this.isMenuOpen=!1}render(){return a`
      <div class="app-shell">
        ${this._renderHeader()}
        <main class="page-main container">
          ${this._renderPage()}
        </main>
        ${this._renderMobileMenu()}
      </div>
    `}_renderHeader(){return a`
      <header class="site-header">
        <nav class="site-nav container">
          <h1 class="brand">
            <span class="brand-mark">ML</span>
            <span class="brand-copy">
              <span class="brand-name">Maksim Larionov</span>
              <span class="brand-status">portfolio os / online</span>
            </span>
          </h1>

          <div class="desktop-nav">
            <span class="nav-status">signal stable</span>
            ${this._renderNavButton(s.HOME,"Home")}
            ${this._renderNavButton(s.PROJECTS,"Projects")}
            ${this._renderNavButton(s.BLOG,"Blog")}
            ${this._renderNavButton(s.ABOUT,"About")}
            ${this._renderNavButton(s.CONTACT,"Contact")}
          </div>

          <button 
            @click=${this._toggleMenu}
            class="icon-button mobile-toggle"
            aria-label="Toggle menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16">
              </path>
            </svg>
          </button>
        </nav>
      </header>
    `}_renderMobileMenu(){return a`
      <div
        class="mobile-menu-overlay ${this.isMenuOpen?"":"is-hidden"}"
        @click=${this._closeMenu}>
      </div>

      <div class="mobile-menu-panel ${this.isMenuOpen?"is-open":""}">
        <div>
          <div class="panel-header">
            <div>
              <p class="eyebrow">navigation</p>
              <p class="panel-code">mobile uplink</p>
            </div>
            <button 
              @click=${this._closeMenu}
              class="icon-button"
              aria-label="Close menu">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12">
                </path>
              </svg>
            </button>
          </div>
          <div class="terminal-lines">
            <span class="terminal-line">select route</span>
            <span class="terminal-line">session is encrypted-ish</span>
          </div>
          <div class="mobile-menu-list">
            ${this._renderMobileNavButton(s.HOME,"Home")}
            ${this._renderMobileNavButton(s.PROJECTS,"Projects")}
            ${this._renderMobileNavButton(s.BLOG,"Blog")}
            ${this._renderMobileNavButton(s.ABOUT,"About")}
            ${this._renderMobileNavButton(s.CONTACT,"Contact")}
          </div>
        </div>
      </div>
    `}_renderNavButton(e,t){const s=this.currentPage===e||this.currentPage.startsWith(`${e}/`);return a`
      <app-button
        variant="${s?"primary":"secondary"}"
        @pointerenter=${()=>this._prefetchRoute(e)}
        @focusin=${()=>this._prefetchRoute(e)}
        @click=${()=>this._navigateTo(e)}>
        ${t}
      </app-button>
    `}_renderMobileNavButton(e,t){const s=this.currentPage===e||this.currentPage.startsWith(`${e}/`);return a`
      <app-button
        variant="${s?"primary":"secondary"}"
        full-width
        @pointerenter=${()=>this._prefetchRoute(e)}
        @focusin=${()=>this._prefetchRoute(e)}
        @click=${()=>{this._navigateTo(e),this._closeMenu()}}>
        ${t}
      </app-button>
    `}_renderPage(){if(this.isPageLoading)return a`
        <section class="panel panel-compact">
          <div class="panel-content section-stack">
            <p class="eyebrow">loading route</p>
            <p>Opening transmission...</p>
          </div>
        </section>
      `;if(this.pageLoadError)return a`
        <section class="panel panel-compact">
          <div class="panel-content section-stack">
            <p class="eyebrow">route unavailable</p>
            <p>${this.pageLoadError}</p>
          </div>
        </section>
      `;switch(this.currentPage){case s.HOME:return a`<home-page></home-page>`;case s.PROJECTS:return a`<projects-page></projects-page>`;case s.BLOG:return a`<blog-page></blog-page>`;case s.ABOUT:return a`<about-page></about-page>`;case s.CONTACT:return a`<contact-page></contact-page>`;default:if(this.currentPage.startsWith(`${s.BLOG}/`)){const e=this.currentPage.substring(`${s.BLOG}/`.length);return a`<blog-post-page slug="${e}"></blog-post-page>`}return a`<home-page></home-page>`}}}customElements.define("portfolio-app",n);class l extends e{static properties={title:{type:String},subtitle:{type:String},icon:{type:String},variant:{type:String},hoverable:{type:Boolean},clickable:{type:Boolean}};static styles=t`
    :host {
      display: block;
      min-width: 0;
    }

    .card {
      position: relative;
      isolation: isolate;
      overflow: hidden;
      min-width: 0;
      border: 1px solid var(--card-border, var(--color-border, rgba(160, 133, 255, 0.26)));
      border-radius: var(--radius-lg, 24px);
      padding: var(--space-6, 24px);
      color: var(--color-text, #f8f6ff);
      background:
        linear-gradient(145deg, rgba(19, 16, 41, 0.94), rgba(8, 5, 18, 0.88)),
        radial-gradient(circle at 14% 0%, var(--card-glow, rgba(94, 252, 255, 0.12)), transparent 34%);
      box-shadow: var(--shadow-md, 0 18px 42px rgba(0, 0, 0, 0.34)), inset 0 1px 0 rgba(255, 255, 255, 0.07);
      transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
    }

    .card::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background:
        linear-gradient(90deg, var(--card-line, rgba(94, 252, 255, 0.28)), transparent 34%, transparent 68%, rgba(255, 77, 243, 0.18)),
        repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 0, rgba(255, 255, 255, 0.045) 1px, transparent 1px, transparent 6px);
      opacity: 0.35;
      mask-image: linear-gradient(#000, transparent 78%);
    }

    .card::after {
      content: "";
      position: absolute;
      left: var(--space-6, 24px);
      right: var(--space-6, 24px);
      bottom: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--card-line, var(--color-primary, #5efcff)), transparent);
      opacity: 0.8;
    }

    .card.hoverable:hover {
      transform: translateY(-4px);
      border-color: var(--card-line, var(--color-border-strong, rgba(94, 252, 255, 0.48)));
      box-shadow: var(--shadow-md, 0 18px 42px rgba(0, 0, 0, 0.34)), var(--shadow-glow, 0 0 34px rgba(255, 77, 243, 0.22));
    }

    .card.clickable {
      cursor: pointer;
    }

    .card.primary {
      --card-line: var(--color-primary, #5efcff);
      --card-border: rgba(94, 252, 255, 0.42);
      --card-glow: rgba(94, 252, 255, 0.18);
    }

    .card.secondary {
      --card-line: rgba(184, 146, 255, 0.72);
      --card-border: rgba(184, 146, 255, 0.30);
      --card-glow: rgba(184, 146, 255, 0.14);
    }

    .card.accent {
      --card-line: var(--color-accent, #ff4df3);
      --card-border: rgba(255, 77, 243, 0.38);
      --card-glow: rgba(255, 77, 243, 0.18);
    }

    .card-header {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3, 12px);
      margin-bottom: var(--space-5, 20px);
    }

    .card-header > div {
      min-width: 0;
    }

    .card-icon {
      display: grid;
      place-items: center;
      width: 42px;
      height: 42px;
      flex: 0 0 auto;
      border: 1px solid var(--card-border, var(--color-border, rgba(160, 133, 255, 0.26)));
      border-radius: 15px;
      color: var(--card-line, var(--color-primary, #5efcff));
      background: rgba(255, 255, 255, 0.05);
      font-family: var(--font-family-mono, monospace);
      font-size: 0.8rem;
      font-weight: 900;
      box-shadow: 0 0 18px color-mix(in srgb, var(--card-line, #5efcff) 22%, transparent);
    }

    .card-title {
      margin: 0;
      color: var(--color-text, #f8f6ff);
      font-family: var(--font-family-heading, sans-serif);
      font-size: clamp(1.2rem, 2vw, 1.65rem);
      font-weight: 900;
      line-height: 0.98;
      letter-spacing: -0.045em;
      text-transform: uppercase;
      overflow-wrap: anywhere;
    }

    .card-subtitle {
      margin: 0.42rem 0 0;
      color: var(--color-text-muted, #a9a4ca);
      font-family: var(--font-family-mono, monospace);
      font-size: 0.74rem;
      letter-spacing: 0.08em;
      line-height: 1.4;
      text-transform: uppercase;
    }

    .card-content {
      color: var(--color-text-muted, #a9a4ca);
    }

    ::slotted(*) {
      color: inherit;
    }
  `;constructor(){super(),this.title="",this.subtitle="",this.icon="",this.variant="default",this.hoverable=!1,this.clickable=!1}render(){const e=["card","default"!==this.variant?this.variant:"",this.hoverable?"hoverable":"",this.clickable?"clickable":""].filter(Boolean).join(" ");return a`
      <div class=${e}>
        ${this.title||this.icon?a`
          <div class="card-header">
            ${this.icon?a`<span class="card-icon">${this.icon}</span>`:""}
            <div>
              ${this.title?a`<h2 class="card-title">${this.title}</h2>`:""}
              ${this.subtitle?a`<p class="card-subtitle">${this.subtitle}</p>`:""}
            </div>
          </div>
        `:""}
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    `}}customElements.define("custom-card",l);class c extends e{static properties={score:{type:Number},status:{type:String},highScore:{type:Number}};static styles=t`
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
  `;constructor(){super(),this.score=0,this.status="ready",this.highScore=0,this._width=320,this._height=240,this._playerX=160,this._cooldown=0,this._wave=1,this._canDrop=!1,this._isGameOver=!1,this._direction=1,this._bullets=[],this._invaders=[],this._stars=[],this._keys=new Set,this._colors={primary:"#5efcff",accent:"#ff4df3",green:"#78ff8a",muted:"#a9a4ca",text:"#f8f6ff"},this._tick=this._tick.bind(this),this._handleKeyDown=this._handleKeyDown.bind(this),this._handleKeyUp=this._handleKeyUp.bind(this),this._handlePointerDown=this._handlePointerDown.bind(this),this._handlePointerMove=this._handlePointerMove.bind(this)}render(){return a`
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
          <span>${this._isGameOver?"tap to restart":"a d / space"}</span>
        </div>
      </div>
    `}firstUpdated(){this._canvas=this.renderRoot.querySelector("canvas"),this._ctx=this._canvas.getContext("2d"),this._syncThemeColors(),this._resize(),this._resizeObserver=new ResizeObserver((()=>this._resize())),this._resizeObserver.observe(this._canvas),this.highScore=this._getHighScore(),this.status="hover to start",this._startNewRun(),this._lastTime=performance.now(),this._frame=requestAnimationFrame(this._tick)}disconnectedCallback(){super.disconnectedCallback(),this._frame&&(cancelAnimationFrame(this._frame),this._frame=0),this._resizeObserver?.disconnect()}_syncThemeColors(){const e=getComputedStyle(this);this._colors={primary:e.getPropertyValue("--color-primary").trim()||this._colors.primary,accent:e.getPropertyValue("--color-accent").trim()||this._colors.accent,green:e.getPropertyValue("--color-green").trim()||this._colors.green,muted:e.getPropertyValue("--color-text-muted").trim()||this._colors.muted,text:e.getPropertyValue("--color-text").trim()||this._colors.text}}_resize(){const e=this._canvas.getBoundingClientRect(),t=Math.max(260,Math.round(e.width)),a=Math.max(210,Math.round(e.height)),s=Math.min(window.devicePixelRatio||1,2);this._width=t,this._height=a,this._canvas.width=Math.round(t*s),this._canvas.height=Math.round(a*s),this._ctx.setTransform(s,0,0,s,0,0),this._playerX=this._clamp(this._playerX||t/2,22,t-22),this._seedStars(),this._spawnWave()}_getHighScore(){try{const e=window.localStorage.getItem("spaceInvadersHighScore"),t=Number(e);return Number.isFinite(t)&&t>=0?t:0}catch(e){return 0}}_saveHighScore(e){try{window.localStorage.setItem("spaceInvadersHighScore",String(e))}catch(e){}}_startNewRun(){this._isGameOver=!1,this._canDrop=!1,this._cooldown=0,this._wave=1,this._direction=1,this._bullets=[],this.score=0,this.status="hover to start",this._playerX=this._clamp(this._width/2,22,this._width-22),this._spawnWave()}_endGame(){if(this._isGameOver=!0,this._canDrop=!1,this._bullets=[],this._keys.clear(),this.score>this.highScore)return this.highScore=this.score,this._saveHighScore(this.highScore),void(this.status="game over | new high score");this.status="game over"}_seedStars(){this._stars=Array.from({length:28},((e,t)=>({x:47*t%this._width,y:29*t%this._height,size:t%3==0?1.8:1})))}_spawnWave(){const e=this._width<320?5:6,t=(this._width-64)/(e-1);this._direction=1,this._invaders=[];for(let a=0;a<3;a+=1)for(let s=0;s<e;s+=1)this._invaders.push({x:32+s*t,y:42+26*a,row:a,alive:!0})}_tick(e){const t=Math.min((e-this._lastTime)/1e3,.033);this._lastTime=e,this._update(t),this._draw(),this._frame=requestAnimationFrame(this._tick)}_update(e){if(this._isGameOver)return;const t=this._height-32;this._keys.has("left")&&(this._playerX-=210*e),this._keys.has("right")&&(this._playerX+=210*e),this._keys.has("shoot")&&this._shoot(),this._playerX=this._clamp(this._playerX,22,this._width-22),this._cooldown=Math.max(0,this._cooldown-e),this._bullets.forEach((t=>{t.y-=260*e})),this._bullets=this._bullets.filter((e=>e.y>0&&!e.dead));const a=this._invaders.filter((e=>e.alive));if(!a.length)return this.score+=50,this._wave+=1,this.status=`wave ${this._wave}`,void this._spawnWave();const s=28+3*this._wave;let r=!1;for(const t of a){const a=t.x+this._direction*s*e;if(a<18||a>this._width-18){r=!0;break}}r&&(this._direction*=-1);for(const t of a)t.x+=this._direction*s*e,r&&this._canDrop&&(t.y+=11);for(const e of this._bullets)for(const t of a)if(t.alive&&Math.abs(e.x-t.x)<12&&Math.abs(e.y-t.y)<12){e.dead=!0,t.alive=!1,this.score+=10,this.status="hit";break}a.some((e=>e.y>t-30))&&this._endGame()}_draw(){const e=this._ctx;e.clearRect(0,0,this._width,this._height),this._drawBackdrop(e),this._drawInvaders(e),this._drawBullets(e),this._drawPlayer(e),this._isGameOver&&this._drawGameOver(e)}_drawGameOver(e){const t=this.score===this.highScore&&this.score>0;e.save(),e.fillStyle="rgba(12, 4, 25, 0.86)",e.fillRect(.05*this._width,.24*this._height,.9*this._width,.46*this._height),e.textAlign="center",e.fillStyle=this._colors.accent,e.font="700 34px monospace",e.fillText("GAME OVER",this._width/2,.43*this._height),e.fillStyle=this._colors.text,e.font="600 15px monospace",e.fillText(`Score: ${this.score}`,this._width/2,.55*this._height),e.fillText(`High Score: ${this.highScore}`,this._width/2,.64*this._height),t&&(e.fillStyle=this._colors.green,e.font="600 14px monospace",e.fillText("NEW HIGH SCORE",this._width/2,.72*this._height)),e.restore()}_drawBackdrop(e){e.fillStyle="rgba(8, 5, 18, 0.96)",e.fillRect(0,0,this._width,this._height),e.save(),e.globalAlpha=.24,e.strokeStyle=this._colors.primary,e.lineWidth=1;for(let t=18;t<this._height;t+=18)e.beginPath(),e.moveTo(0,t),e.lineTo(this._width,t),e.stroke();e.restore(),e.fillStyle=this._colors.green;for(const t of this._stars)t.y+=.12*t.size,t.y>this._height&&(t.y=0),e.globalAlpha=.35+.16*t.size,e.fillRect(t.x,t.y,t.size,t.size);e.globalAlpha=1}_drawInvaders(e){for(const t of this._invaders){if(!t.alive)continue;const a=0===t.row?this._colors.accent:this._colors.primary;e.save(),e.shadowColor=a,e.shadowBlur=10,e.fillStyle=a,e.fillRect(t.x-7,t.y-7,14,4),e.fillRect(t.x-11,t.y-2,22,7),e.fillRect(t.x-6,t.y+6,4,4),e.fillRect(t.x+2,t.y+6,4,4),e.restore()}}_drawBullets(e){e.save(),e.shadowColor=this._colors.green,e.shadowBlur=10,e.fillStyle=this._colors.green;for(const t of this._bullets)e.fillRect(t.x-1.5,t.y-9,3,10);e.restore()}_drawPlayer(e){const t=this._height-32;e.save(),e.shadowColor=this._colors.primary,e.shadowBlur=14,e.fillStyle=this._colors.primary,e.beginPath(),e.moveTo(this._playerX,t-16),e.lineTo(this._playerX-16,t+12),e.lineTo(this._playerX+16,t+12),e.closePath(),e.fill(),e.fillStyle=this._colors.text,e.fillRect(this._playerX-3,t-2,6,10),e.restore()}_shoot(){this._cooldown>0||(this._bullets.push({x:this._playerX,y:this._height-48}),this._cooldown=.24,this.status="fire")}_handleKeyDown(e){if(this._isGameOver&&(" "===e.key||"Spacebar"===e.key))return void this._startNewRun();const t=this._keyToControl(e.key);t&&(this._isGameOver||(e.preventDefault(),this._keys.add(t)))}_handleKeyUp(e){const t=this._keyToControl(e.key);t&&(e.preventDefault(),this._isGameOver||this._keys.delete(t))}_handlePointerDown(e){this._isGameOver&&this._startNewRun(),this._canDrop=!0,e.currentTarget.focus({preventScroll:!0}),e.currentTarget.setPointerCapture(e.pointerId),this._movePlayerToPointer(e),this._isGameOver||this._shoot()}_handlePointerEnter(){if(!this._isGameOver)return this._canDrop=!0,void(this.status=`wave ${this._wave}`);this.status="game over"}_handlePointerLeave(){this._isGameOver||(this._canDrop=!1,this.status="hover to start")}_handlePointerMove(e){this._movePlayerToPointer(e),1===e.buttons&&this._shoot()}_movePlayerToPointer(e){const t=this._canvas.getBoundingClientRect(),a=(e.clientX-t.left)/t.width*this._width;this._playerX=this._clamp(a,22,this._width-22)}_keyToControl(e){return"ArrowLeft"===e||"a"===e.toLowerCase()?"left":"ArrowRight"===e||"d"===e.toLowerCase()?"right":" "===e||"Spacebar"===e?"shoot":""}_clamp(e,t,a){return Math.min(Math.max(e,t),a)}}customElements.define("space-invaders-game",c);class h extends e{createRenderRoot(){return this}render(){return a`
      <div class="page-stack">
        ${this._renderHero()}
        ${this._renderMetrics()}
        ${this._renderSkillDashboard()}
      </div>
    `}_renderHero(){return a`
      <section class="grid hero-layout">
        <div class="panel hero-console">
          <div class="panel-content">
            <div class="terminal-lines">
              <span class="terminal-line">booting maksim-larionov.portfolio</span>
              <span class="terminal-line">interface craft mode enabled</span>
            </div>

            <div class="hero-copy">
              <p class="eyebrow">senior frontend engineer</p>
              <h1 class="hero-title">Clean <span class="accent">Future</span> UI</h1>
              <p class="hero-text">
                I build and evolve large-scale web architectures - microfrontends, design systems, internal tooling, and cross-team platform standards.
                Facilitated migrations of dozens of applications, improved developer experience across teams by providing a fontend platform for microfrontends, driving adoption of improved monitoring,
                best practices for testing and AI workflows adoption.
              </p>
              <p class="hero-text">
                I enjoy operating at the intersection of architecture, scalability, and developer productivity, turning fragmented frontend into maintainable, scalable systems.
                Strong JavaScript foundation. Experience across Web Components, and Node.js, native browser stack and latest JavaScript standards. I care less about frameworks and more about building durable systems.
              </p>
              <p class="hero-text">
                Outside of work, I enjoy experimenting with embedded systems like ESP32, Arduino, Raspberry Pi, IOTs, Smart Home, music production, AI, running and many other things.
              </p>
              <div class="button-row">
                ${this._renderSocialButton("https://github.com/maxevilmind","View GitHub","secondary")}
                ${this._renderSocialButton("https://www.linkedin.com/in/larionov-m/","Connect on LinkedIn","primary")}
              </div>
            </div>

            <div>
              <div class="status-strip">
                <span class="status-pill green">web components</span>
                <span class="status-pill hot">design systems</span>
                <span class="status-pill">frontend platforms</span>
              </div>
              <div style="margin-top: var(--space-5);">
                <div class="progress-track"><span class="progress-fill" style="--value: 84%;"></span></div>
                <div class="progress-meta">
                  <span>portfolio redesign</span>
                  <span>84% done</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside class="panel panel-compact profile-card">
          <div class="panel-content profile-panel-content">
            <div class="panel-header">
              <div>
                <p class="eyebrow">operator</p>
                <h2 class="panel-title">Maksim Larionov</h2>
              </div>
              <span class="panel-code">v8+</span>
            </div>
            <div class="mt-20 mb-20 terminal-lines">
              <span class="terminal-line">location: Amsterdam area</span>
              <span class="terminal-line">role: staff engineer at ABN AMRO</span>
              <span class="terminal-line">focus: UI platforms, components, IoT</span>
            </div>
            <space-invaders-game class="profile-game"></space-invaders-game>
          </div>
        </aside>
      </section>
    `}_renderSocialButton(e,t,s){return a`
      <app-button href=${e} variant=${s} target="_blank">
        ${t}
      </app-button>
    `}_renderMetrics(){return a`
      <section class="metric-grid">
        ${this._renderMetric("8+","years building interfaces")}
        ${this._renderMetric("100%","web component native")}
        ${this._renderMetric("24/7","curiosity runtime")}
        ${this._renderMetric("1ms","performance mindset")}
      </section>
    `}_renderMetric(e,t){return a`
      <div class="metric-card">
        <div class="metric-value">${e}</div>
        <div class="metric-label">${t}</div>
      </div>
    `}_renderSkillDashboard(){return a`
      <section class="grid dashboard-grid">
        <custom-card title="Skill Tracker" subtitle="production calibrated" icon="01" variant="accent" hoverable>
          <div class="skill-list">
            ${this._renderSkill("JavaScript / TypeScript","96%")}
            ${this._renderSkill("Web Components","92%")}
            ${this._renderSkill("Design Systems","88%")}
            ${this._renderSkill("Mentoring","90%")}
            ${this._renderSkill("Microfrontends","91%")}
          </div>
        </custom-card>

        <custom-card title="Interface Telemetry" subtitle="clean data surface" icon="02" variant="primary" hoverable>
          <div class="chart-card">
            <p>
              I like interfaces that make status visible without visual noise: clear contrast, rhythm, alignment, and just enough glow to make the UI feel alive.
            </p>
            <div class="bar-chart" role="img" aria-label="Interface telemetry chart">
              <span class="chart-bar" style="--value: 38%;" data-label="speed"></span>
              <span class="chart-bar" style="--value: 52%;" data-label="clarity"></span>
              <span class="chart-bar" style="--value: 46%;" data-label="motion"></span>
              <span class="chart-bar" style="--value: 78%;" data-label="system"></span>
              <span class="chart-bar" style="--value: 58%;" data-label="craft"></span>
              <span class="chart-bar" style="--value: 86%;" data-label="polish"></span>
            </div>
          </div>
        </custom-card>
      </section>
    `}_renderSkill(e,t){return a`
      <div class="skill-row">
        <div class="skill-label">
          <span>${e}</span>
          <span>${t}</span>
        </div>
        <div class="progress-track"><span class="progress-fill" style="--value: ${t};"></span></div>
      </div>
    `}}customElements.define("home-page",h);var d=Object.freeze({__proto__:null,HomePage:h});
