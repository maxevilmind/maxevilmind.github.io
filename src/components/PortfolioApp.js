import { LitElement, html } from 'lit';
import { LionButton } from '@lion/ui/button.js';
import { ROUTES, DEFAULT_ROUTE } from '../utils/routes.js';

/**
 * Main application component that handles routing and layout
 * 
 * @property {String} currentPage - The currently active page/route
 * @property {Boolean} isMenuOpen - Whether the mobile menu is open
 */
export class PortfolioApp extends LitElement {
  static properties = {
    currentPage: { type: String },
    isMenuOpen: { type: Boolean }
  };

  constructor() {
    super();
    this.currentPage = DEFAULT_ROUTE;
    this.isMenuOpen = false;
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

  _toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  _closeMenu() {
    this.isMenuOpen = false;
  }

  render() {
    return html`
      <div class="min-h-screen bg-gray-900 text-white flex flex-col">
        ${this._renderHeader()}
        <main class="flex-1 p-6 max-w-7xl mx-auto w-full">
          ${this._renderPage()}
        </main>
        ${this._renderMobileMenu()}
      </div>
    `;
  }

  _renderHeader() {
    return html`
      <header class="bg-gray-800 shadow-md p-4">
        <nav class="max-w-7xl mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold tracking-tight text-white">Max Larionov</h1>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex gap-2">
            ${this._renderNavButton(ROUTES.HOME, 'Home')}
            ${this._renderNavButton(ROUTES.PROJECTS, 'Projects')}
            ${this._renderNavButton(ROUTES.ABOUT, 'About')}
            ${this._renderNavButton(ROUTES.CONTACT, 'Contact')}
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click=${this._toggleMenu}
            class="md:hidden p-2 rounded-lg hover:bg-gray-700 focus:outline-none"
            aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    `;
  }

  _renderMobileMenu() {
    return html`
      <!-- Mobile Menu Overlay -->
      <div 
        class="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden
               ${this.isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}"
        @click=${this._closeMenu}>
      </div>

      <!-- Mobile Menu Sidebar -->
      <div 
        class="fixed top-0 right-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out md:hidden
               ${this.isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50">
        <div class="p-4">
          <div class="flex justify-end">
            <button 
              @click=${this._closeMenu}
              class="p-2 rounded-lg hover:bg-gray-700 focus:outline-none"
              aria-label="Close menu">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12">
                </path>
              </svg>
            </button>
          </div>
          <div class="flex flex-col gap-2 mt-4">
            ${this._renderMobileNavButton(ROUTES.HOME, 'Home')}
            ${this._renderMobileNavButton(ROUTES.PROJECTS, 'Projects')}
            ${this._renderMobileNavButton(ROUTES.ABOUT, 'About')}
            ${this._renderMobileNavButton(ROUTES.CONTACT, 'Contact')}
          </div>
        </div>
      </div>
    `;
  }

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

  _renderMobileNavButton(route, label) {
    const isActive = this.currentPage === route;
    const baseClasses = 'w-full px-4 py-3 text-white rounded transition-colors text-left';
    const bgClasses = isActive 
      ? 'bg-blue-600 hover:bg-blue-500' 
      : 'bg-gray-700 hover:bg-gray-600';
    
    return html`
      <button 
        class="${baseClasses} ${bgClasses}" 
        @click=${() => {
          this._navigateTo(route);
          this._closeMenu();
        }}>
        ${label}
      </button>
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