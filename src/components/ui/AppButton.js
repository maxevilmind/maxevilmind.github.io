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
      border-radius: 10px;
      border: 1px solid color-mix(in srgb, var(--color-border, #2b3f60) 70%, #0b1220);
      padding: 0.48rem 0.88rem;
      text-decoration: none;
      color: var(--button-fg, var(--color-secondary-foreground, #d9e7ff));
      cursor: pointer;
      background: var(--button-bg, var(--color-secondary, #1b2a44));
      transition: background-color 120ms ease, color 120ms ease, border-color 120ms ease, box-shadow 120ms ease, transform 120ms ease;
      font-family: inherit;
      font-size: 0.9rem;
      font-weight: 500;
      line-height: 1.2;
      white-space: nowrap;
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04) inset;
    }

    .button:hover {
      background: var(--button-bg-hover, var(--color-secondary-hover, #223552));
    }

    .button.primary {
      --button-bg: var(--color-primary, #2d7ff9);
      --button-bg-hover: var(--color-primary-hover, #1f70e7);
      --button-fg: var(--color-primary-foreground, #f8fbff);
      border-color: color-mix(in srgb, var(--color-border, #2b3f60) 65%, #0b1220);
    }

    .button.secondary {
      --button-bg: var(--color-secondary, #1b2a44);
      --button-bg-hover: var(--color-secondary-hover, #223552);
      --button-fg: var(--color-secondary-foreground, #d9e7ff);
      border-color: color-mix(in srgb, var(--color-border, #2b3f60) 70%, #0b1220);
    }

    .button.ghost {
      --button-bg: transparent;
      --button-bg-hover: color-mix(in srgb, var(--color-surface-strong, #223552) 60%, transparent);
      --button-fg: var(--color-text, #eff5ff);
      border-color: transparent;
    }

    .button:focus-visible {
      outline: none;
      box-shadow:
        0 0 0 2px color-mix(in srgb, var(--color-primary-foreground, #f8fbff) 14%, transparent),
        0 1px 0 rgba(255, 255, 255, 0.04) inset;
    }

    .button.full {
      width: 100%;
    }
  `;

  constructor() {
    super();
    this.href = '';
    this.variant = 'secondary';
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
