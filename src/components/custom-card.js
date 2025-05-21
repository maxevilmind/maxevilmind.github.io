import { LitElement, html, css } from 'lit';

class CustomCard extends LitElement {
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
      background-color: rgb(31, 41, 55); /* bg-gray-800 */
      border-radius: 0.5rem;
      padding: 1.5rem;
      transition: all 0.2s ease-in-out;
    }

    .card.hoverable:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .card.clickable {
      cursor: pointer;
    }

    .card.primary {
      background-color: rgb(37, 99, 235); /* bg-blue-600 */
    }

    .card.secondary {
      background-color: rgb(79, 70, 229); /* bg-indigo-600 */
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
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      margin: 0;
    }

    .card-subtitle {
      font-size: 1rem;
      color: rgb(209, 213, 219); /* text-gray-300 */
      margin-top: 0.25rem;
    }

    .card-content {
      color: rgb(209, 213, 219); /* text-gray-300 */
    }

    ::slotted(*) {
      color: rgb(209, 213, 219); /* text-gray-300 */
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