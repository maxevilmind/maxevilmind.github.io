import { LitElement, css, html } from 'lit';

export class AppButton extends LitElement {
  static properties = {
    href: { type: String },
    variant: { type: String },
    fullWidth: { type: Boolean, attribute: 'full-width' },
    target: { type: String }
  };

  static styles = css`
    :host {
      display: inline-flex;
    }

    :host([hidden]) {
      display: none;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border-radius: var(--radius-sm, 8px);
      border: 1px solid var(--color-border, #2b3f60);
      padding: 0.65rem 1rem;
      text-decoration: none;
      color: var(--color-text, #eff5ff);
      cursor: pointer;
      background: var(--button-bg, var(--color-surface, #152238));
      transition: background-color 120ms ease;
      font: inherit;
      line-height: 1.2;
    }

    .button:hover {
      background: var(--button-bg-hover, var(--color-surface-strong, #223552));
    }

    .button.primary {
      --button-bg: var(--color-primary, #2d7ff9);
      --button-bg-hover: var(--color-primary-hover, #1f70e7);
      border-color: transparent;
    }

    .button.full {
      width: 100%;
    }
  `;

  constructor() {
    super();
    this.href = '';
    this.variant = 'default';
    this.fullWidth = false;
    this.target = '_self';
  }

  render() {
    const className = `button ${this.variant} ${this.fullWidth ? 'full' : ''}`;

    if (this.href) {
      const rel = this.target === '_blank' ? 'noopener noreferrer' : '';
      return html`<a class="${className}" href="${this.href}" target="${this.target}" rel="${rel}"><slot></slot></a>`;
    }

    return html`<button class="${className}" type="button"><slot></slot></button>`;
  }
}

customElements.define('app-button', AppButton);
