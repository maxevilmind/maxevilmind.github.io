import { LitElement, html, css } from 'lit';

/**
 * A reusable dashboard panel card.
 *
 * @property {String} title - The card title
 * @property {String} subtitle - The card subtitle
 * @property {String} icon - Icon to display as text
 * @property {String} variant - Card style variant ('default', 'primary', 'secondary', 'accent')
 * @property {Boolean} hoverable - Whether the card has a hover effect
 * @property {Boolean} clickable - Whether the card appears clickable
 */
export class CustomCard extends LitElement {
  static properties = {
    title: { type: String },
    subtitle: { type: String },
    icon: { type: String },
    variant: { type: String },
    hoverable: { type: Boolean },
    clickable: { type: Boolean }
  };

  static styles = css`
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
  `;

  constructor() {
    super();
    this.title = '';
    this.subtitle = '';
    this.icon = '';
    this.variant = 'default';
    this.hoverable = false;
    this.clickable = false;
  }

  render() {
    const classes = [
      'card',
      this.variant !== 'default' ? this.variant : '',
      this.hoverable ? 'hoverable' : '',
      this.clickable ? 'clickable' : ''
    ].filter(Boolean).join(' ');

    return html`
      <div class=${classes}>
        ${this.title || this.icon ? html`
          <div class="card-header">
            ${this.icon ? html`<span class="card-icon">${this.icon}</span>` : ''}
            <div>
              ${this.title ? html`<h2 class="card-title">${this.title}</h2>` : ''}
              ${this.subtitle ? html`<p class="card-subtitle">${this.subtitle}</p>` : ''}
            </div>
          </div>
        ` : ''}
        <div class="card-content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('custom-card', CustomCard);
