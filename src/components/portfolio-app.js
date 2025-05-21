import { LitElement, html } from 'lit';
import { LionButton } from '@lion/ui/button.js';

class PortfolioApp extends LitElement {
  static properties = {
    currentPage: { type: String }
  };

  constructor() {
    super();
    this.currentPage = 'home';
  }

  // Remove shadow DOM to allow Tailwind styles to apply
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="min-h-screen bg-gray-900 text-white flex flex-col">
        <header class="bg-gray-800 shadow-md p-4">
          <nav class="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <h1 class="text-2xl font-bold tracking-tight text-white">Max Larionov</h1>
            <div class="flex gap-2">
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${() => this.currentPage = 'home'}>Home</lion-button>
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${() => this.currentPage = 'projects'}>Projects</lion-button>
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${() => this.currentPage = 'about'}>About</lion-button>
              <lion-button class="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded" @click=${() => this.currentPage = 'contact'}>Contact</lion-button>
            </div>
          </nav>
        </header>
        <main class="flex-1 p-6 max-w-7xl mx-auto w-full">
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