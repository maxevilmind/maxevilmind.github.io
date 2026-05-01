import { LitElement, html, css } from 'lit';

/**
 * A reusable card component with various display options
 * 
 * @property {String} title - The card title
 * @property {String} subtitle - The card subtitle
 * @property {String} icon - Icon to display (currently as string)
 * @property {String} variant - Card style variant ('default', 'primary', 'secondary')
 * @property {Boolean} hoverable - Whether the card has a hover effect
 * @property {Boolean} clickable - Whether the card appears clickable
 */
export class CustomCard extends LitElement {
  static properties = {
    title: { type: String },
    subtitle: { type: String },
    icon: { type: String },
    variant: { type: String }, // 'default', 'primary', 'secondary'
    hoverable: { type: Boolean },
    clickable: { type: Boolean }
  };

  static styles = css`
    :host {
      display: block;
    }

    .card {
      background: var(--color-surface, #152238);
      border: 1px solid var(--color-border, #2b3f60);
      border-radius: var(--radius-md, 12px);
      padding: var(--space-6, 24px);
      transition: all 0.2s ease-in-out;
    }

    .card.hoverable:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md, 0 8px 24px rgba(7, 10, 18, 0.25));
    }

    .card.clickable {
      cursor: pointer;
    }

    .card.primary {
      background: var(--color-primary, #2d7ff9);
      border-color: transparent;
    }

    .card.secondary {
      background: var(--color-bg-muted, #1b2940);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 1rem;
    }

    .card-icon {
      width: 1.5rem;
      height: 1.5rem;
      color: currentColor;
    }

    .card-title {
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--color-text, #eff5ff);
      margin: 0;
    }

    .card-subtitle {
      font-size: 1rem;
      color: var(--color-text-muted, #b9c7dd);
      margin-top: 0.25rem;
    }

    .card-content {
      color: var(--color-text-muted, #b9c7dd);
    }

    ::slotted(*) {
      color: var(--color-text-muted, #b9c7dd);
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
      <div class="${classes}">
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
