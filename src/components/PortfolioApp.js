import { LitElement, html } from 'lit';
import { LionButton } from '@lion/ui/button.js';
import { ROUTES, DEFAULT_ROUTE } from '../utils/routes.js';

/**
 * Main application component that handles routing and layout
 * 
 * @property {String} currentPage - The currently active page/route
 */
export class PortfolioApp extends LitElement {
  static properties = {
    currentPage: { type: String }
  };

  constructor() {
    super();
    this.currentPage = DEFAULT_ROUTE;
    this._setupRouting();
  }

  /**
   * Setup hash-based routing
   * Enables bookmarkable URLs and browser navigation
   */
  _setupRouting() {
    // Handle initial route from URL hash
    this._handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => this._handleHashChange());
  }

  /**
   * Process URL hash and update current page
   */
  _handleHashChange() {
    // Get current hash without the # symbol
    const hash = window.location.hash.substring(1);
    
    // Check if hash corresponds to a valid route
    if (hash && Object.values(ROUTES).includes(hash)) {
      this.currentPage = hash;
    } else if (!hash && window.location.hash === '') {
      // If no hash, set to default route
      this.currentPage = DEFAULT_ROUTE;
    }
  }

  /**
   * Navigate to a specific route
   * @param {String} route - The route to navigate to
   */
  _navigateTo(route) {
    window.location.hash = route;
  }

  // Remove shadow DOM to allow Tailwind styles to apply
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="min-h-screen bg-gray-900 text-white flex flex-col">
        ${this._renderHeader()}
        <main class="flex-1 p-6 max-w-7xl mx-auto w-full">
          ${this._renderPage()}
        </main>
      </div>
    `;
  }

  _renderHeader() {
    return html`
      <header class="bg-gray-800 shadow-md p-4">
        <nav class="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold tracking-tight text-white">Max Larionov</h1>
          <div class="flex gap-2">
            ${this._renderNavButton(ROUTES.HOME, 'Home')}
            ${this._renderNavButton(ROUTES.PROJECTS, 'Projects')}
            ${this._renderNavButton(ROUTES.ABOUT, 'About')}
            ${this._renderNavButton(ROUTES.CONTACT, 'Contact')}
          </div>
        </nav>
      </header>
    `;
  }

  /**
   * Render a navigation button with active state handling
   * @param {String} route - The route this button navigates to
   * @param {String} label - The button label
   * @returns {TemplateResult}
   */
  _renderNavButton(route, label) {
    const isActive = this.currentPage === route;
    const baseClasses = 'px-4 py-2 text-white rounded transition-colors';
    const bgClasses = isActive 
      ? 'bg-blue-600 hover:bg-blue-500' 
      : 'bg-gray-700 hover:bg-gray-600';
    
    return html`
      <lion-button 
        class="${baseClasses} ${bgClasses}" 
        @click=${() => this._navigateTo(route)}>
        ${label}
      </lion-button>
    `;
  }

  _renderPage() {
    switch (this.currentPage) {
      case ROUTES.HOME:
        return html`<home-page></home-page>`;
      case ROUTES.PROJECTS:
        return html`<projects-page></projects-page>`;
      case ROUTES.ABOUT:
        return html`<about-page></about-page>`;
      case ROUTES.CONTACT:
        return html`<contact-page></contact-page>`;
      default:
        return html`<home-page></home-page>`;
    }
  }
}

customElements.define('portfolio-app', PortfolioApp); 