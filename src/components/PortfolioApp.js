import { LitElement, html } from 'lit';
import { ROUTES, DEFAULT_ROUTE } from '../utils/routes.js';
import './ui/AppButton.js';

const PAGE_LOADERS = {
  [ROUTES.HOME]: () => import('./pages/HomePage.js'),
  [ROUTES.PROJECTS]: () => import('./pages/ProjectsPage.js'),
  [ROUTES.BLOG]: () => import('./pages/BlogPage.js'),
  [ROUTES.ABOUT]: () => import('./pages/AboutPage.js'),
  [ROUTES.CONTACT]: () => import('./pages/ContactPage.js'),
  blogPost: () => import('./pages/BlogPostPage.js')
};

/**
 * Main application component that handles routing and layout
 * 
 * @property {String} currentPage - The currently active page/route
 * @property {Boolean} isMenuOpen - Whether the mobile menu is open
 */
export class PortfolioApp extends LitElement {
  static properties = {
    currentPage: { type: String },
    isMenuOpen: { type: Boolean },
    isPageLoading: { type: Boolean },
    pageLoadError: { type: String }
  };

  constructor() {
    super();
    this.currentPage = DEFAULT_ROUTE;
    this.isMenuOpen = false;
    this.isPageLoading = false;
    this.pageLoadError = '';
    this._loadedPages = new Set([ROUTES.HOME]);
    this._routeLoadToken = 0;
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
    } else if (hash.startsWith(`${ROUTES.BLOG}/`)) {
      this.currentPage = hash;
    } else if (!hash && window.location.hash === '') {
      // If no hash, set to default route
      this.currentPage = DEFAULT_ROUTE;
    }

    this._loadCurrentPage();
  }

  _getPageKey(page = this.currentPage) {
    return page.startsWith(`${ROUTES.BLOG}/`) ? 'blogPost' : page;
  }

  async _loadCurrentPage() {
    const pageKey = this._getPageKey();
    const loadPage = PAGE_LOADERS[pageKey] || PAGE_LOADERS[DEFAULT_ROUTE];

    if (this._loadedPages.has(pageKey)) {
      this.isPageLoading = false;
      this.pageLoadError = '';
      return;
    }

    const routeLoadToken = ++this._routeLoadToken;
    this.isPageLoading = true;
    this.pageLoadError = '';

    try {
      await loadPage();
      this._loadedPages.add(pageKey);
    } catch (error) {
      this.pageLoadError = 'Could not load this page.';
    } finally {
      if (routeLoadToken === this._routeLoadToken) {
        this.isPageLoading = false;
      }
    }
  }

  _prefetchRoute(route) {
    const pageKey = this._getPageKey(route);

    if (!this._loadedPages.has(pageKey)) {
      PAGE_LOADERS[pageKey]?.()
        .then(() => this._loadedPages.add(pageKey))
        .catch(() => {});
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
          <h1 class="brand">
            <span class="brand-mark">ML</span>
            <span class="brand-copy">
              <span class="brand-name">Maksim Larionov</span>
              <span class="brand-status">portfolio os / online</span>
            </span>
          </h1>

          <div class="desktop-nav">
            <span class="nav-status">signal stable</span>
            ${this._renderNavButton(ROUTES.HOME, 'Home')}
            ${this._renderNavButton(ROUTES.PROJECTS, 'Projects')}
            ${this._renderNavButton(ROUTES.BLOG, 'Blog')}
            ${this._renderNavButton(ROUTES.ABOUT, 'About')}
            ${this._renderNavButton(ROUTES.CONTACT, 'Contact')}
          </div>

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
      <div
        class="mobile-menu-overlay ${this.isMenuOpen ? '' : 'is-hidden'}"
        @click=${this._closeMenu}>
      </div>

      <div class="mobile-menu-panel ${this.isMenuOpen ? 'is-open' : ''}">
        <div>
          <div class="panel-header">
            <div>
              <p class="eyebrow">navigation</p>
              <p class="panel-code">mobile uplink</p>
            </div>
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
          <div class="terminal-lines">
            <span class="terminal-line">select route</span>
            <span class="terminal-line">session is encrypted-ish</span>
          </div>
          <div class="mobile-menu-list">
            ${this._renderMobileNavButton(ROUTES.HOME, 'Home')}
            ${this._renderMobileNavButton(ROUTES.PROJECTS, 'Projects')}
            ${this._renderMobileNavButton(ROUTES.BLOG, 'Blog')}
            ${this._renderMobileNavButton(ROUTES.ABOUT, 'About')}
            ${this._renderMobileNavButton(ROUTES.CONTACT, 'Contact')}
          </div>
        </div>
      </div>
    `;
  }

  _renderNavButton(route, label) {
    const isActive = this.currentPage === route || this.currentPage.startsWith(`${route}/`);
    const variant = isActive ? 'primary' : 'secondary';
    
    return html`
      <app-button
        variant="${variant}"
        @pointerenter=${() => this._prefetchRoute(route)}
        @focusin=${() => this._prefetchRoute(route)}
        @click=${() => this._navigateTo(route)}>
        ${label}
      </app-button>
    `;
  }

  _renderMobileNavButton(route, label) {
    const isActive = this.currentPage === route || this.currentPage.startsWith(`${route}/`);
    const variant = isActive ? 'primary' : 'secondary';
    
    return html`
      <app-button
        variant="${variant}"
        full-width
        @pointerenter=${() => this._prefetchRoute(route)}
        @focusin=${() => this._prefetchRoute(route)}
        @click=${() => {
          this._navigateTo(route);
          this._closeMenu();
        }}>
        ${label}
      </app-button>
    `;
  }

  _renderPage() {
    if (this.isPageLoading) {
      return html`
        <section class="panel panel-compact">
          <div class="panel-content section-stack">
            <p class="eyebrow">loading route</p>
            <p>Opening transmission...</p>
          </div>
        </section>
      `;
    }

    if (this.pageLoadError) {
      return html`
        <section class="panel panel-compact">
          <div class="panel-content section-stack">
            <p class="eyebrow">route unavailable</p>
            <p>${this.pageLoadError}</p>
          </div>
        </section>
      `;
    }

    switch (this.currentPage) {
      case ROUTES.HOME:
        return html`<home-page></home-page>`;
      case ROUTES.PROJECTS:
        return html`<projects-page></projects-page>`;
      case ROUTES.BLOG:
        return html`<blog-page></blog-page>`;
      case ROUTES.ABOUT:
        return html`<about-page></about-page>`;
      case ROUTES.CONTACT:
        return html`<contact-page></contact-page>`;
      default:
        if (this.currentPage.startsWith(`${ROUTES.BLOG}/`)) {
          const slug = this.currentPage.substring(`${ROUTES.BLOG}/`.length);
          return html`<blog-post-page slug="${slug}"></blog-post-page>`;
        }
        return html`<home-page></home-page>`;
    }
  }
}

customElements.define('portfolio-app', PortfolioApp); 
