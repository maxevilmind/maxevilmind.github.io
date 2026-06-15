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
      return html`<a class=${className} href=${this.href} target=${this.target} rel=${rel}><slot></slot></a>`;
    }

    return html`<button class=${className} type="button"><slot></slot></button>`;
  }
}

customElements.define('app-button', AppButton);
