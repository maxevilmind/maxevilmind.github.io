import { LitElement, html } from 'lit';
import { ROUTES, DEFAULT_ROUTE } from '../utils/routes.js';
import './ui/AppButton.js';

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

  // Remove shadow DOM to consume global design tokens and layout classes.
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
      <div class="app-shell">
        ${this._renderHeader()}
        <main class="page-main container">
          ${this._renderPage()}
        </main>
        ${this._renderMobileMenu()}
      </div>
    `;
  }

  _renderHeader() {
    return html`
      <header class="site-header">
        <nav class="site-nav container">
          <h1 class="brand">Max Larionov</h1>
          
          <!-- Desktop Navigation -->
          <div class="desktop-nav">
            ${this._renderNavButton(ROUTES.HOME, 'Home')}
            ${this._renderNavButton(ROUTES.PROJECTS, 'Projects')}
            ${this._renderNavButton(ROUTES.ABOUT, 'About')}
            ${this._renderNavButton(ROUTES.CONTACT, 'Contact')}
          </div>

          <!-- Mobile Menu Button -->
          <button 
            @click=${this._toggleMenu}
            class="icon-button mobile-toggle"
            aria-label="Toggle menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        class="mobile-menu-overlay ${this.isMenuOpen ? '' : 'is-hidden'}"
        @click=${this._closeMenu}>
      </div>

      <!-- Mobile Menu Sidebar -->
      <div class="mobile-menu-panel ${this.isMenuOpen ? 'is-open' : ''}">
        <div>
          <div style="display:flex;justify-content:flex-end;">
            <button 
              @click=${this._closeMenu}
              class="icon-button"
              aria-label="Close menu">
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12">
                </path>
              </svg>
            </button>
          </div>
          <div class="mobile-menu-list">
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
    const variant = isActive ? 'primary' : 'default';
    
    return html`
      <app-button variant="${variant}" @click=${() => this._navigateTo(route)}>
        ${label}
      </app-button>
    `;
  }

  _renderMobileNavButton(route, label) {
    const isActive = this.currentPage === route;
    const variant = isActive ? 'primary' : 'default';
    
    return html`
      <app-button
        variant="${variant}"
        full-width
        @click=${() => {
          this._navigateTo(route);
          this._closeMenu();
        }}>
        ${label}
      </app-button>
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
