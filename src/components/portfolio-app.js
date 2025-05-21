import { LitElement, html, css } from 'lit';
import { LionButton } from '@lion/ui/button.js';

class PortfolioApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    header {
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 0;
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .nav-links {
      display: flex;
      gap: 1rem;
    }

    main {
      padding: 2rem 0;
    }
  `;

  static properties = {
    currentPage: { type: String }
  };

  constructor() {
    super();
    this.currentPage = 'home';
  }

  render() {
    return html`
      <div class="container">
        <header>
          <nav>
            <h1>My Portfolio</h1>
            <div class="nav-links">
              <lion-button @click=${() => this.currentPage = 'home'}>Home</lion-button>
              <lion-button @click=${() => this.currentPage = 'projects'}>Projects</lion-button>
              <lion-button @click=${() => this.currentPage = 'about'}>About</lion-button>
              <lion-button @click=${() => this.currentPage = 'contact'}>Contact</lion-button>
            </div>
          </nav>
        </header>

        <main>
          ${this._renderPage()}
        </main>
      </div>
    `;
  }

  _renderPage() {
    switch (this.currentPage) {
      case 'home':
        return html`<home-page></home-page>`;
      case 'projects':
        return html`<projects-page></projects-page>`;
      case 'about':
        return html`<about-page></about-page>`;
      case 'contact':
        return html`<contact-page></contact-page>`;
      default:
        return html`<home-page></home-page>`;
    }
  }
}

customElements.define('portfolio-app', PortfolioApp); 