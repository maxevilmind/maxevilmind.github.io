import{i as e,x as t}from"./chunks/vendor-6907c12a.js";import"./chunks/pages-22c3a66f.js";const n={HOME:"home",PROJECTS:"projects",ABOUT:"about",CONTACT:"contact"},i=n.HOME;class PortfolioApp extends e{static properties={currentPage:{type:String},isMenuOpen:{type:Boolean}};constructor(){super(),this.currentPage=i,this.isMenuOpen=!1,this._setupRouting()}_setupRouting(){this._handleHashChange(),window.addEventListener("hashchange",(()=>this._handleHashChange()))}_handleHashChange(){const e=window.location.hash.substring(1);e&&Object.values(n).includes(e)?this.currentPage=e:e||""!==window.location.hash||(this.currentPage=i)}_navigateTo(e){window.location.hash=e}createRenderRoot(){return this}_toggleMenu(){this.isMenuOpen=!this.isMenuOpen}_closeMenu(){this.isMenuOpen=!1}render(){return t`
      <div class="app-shell">
        ${this._renderHeader()}
        <main class="page-main container">
          ${this._renderPage()}
        </main>
        ${this._renderMobileMenu()}
      </div>
    `}_renderHeader(){return t`
      <header class="site-header">
        <nav class="site-nav container">
          <h1 class="brand">Max Larionov</h1>
          
          <!-- Desktop Navigation -->
          <div class="desktop-nav">
            ${this._renderNavButton(n.HOME,"Home")}
            ${this._renderNavButton(n.PROJECTS,"Projects")}
            ${this._renderNavButton(n.ABOUT,"About")}
            ${this._renderNavButton(n.CONTACT,"Contact")}
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
    `}_renderMobileMenu(){return t`
      <!-- Mobile Menu Overlay -->
      <div
        class="mobile-menu-overlay ${this.isMenuOpen?"":"is-hidden"}"
        @click=${this._closeMenu}>
      </div>

      <!-- Mobile Menu Sidebar -->
      <div class="mobile-menu-panel ${this.isMenuOpen?"is-open":""}">
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
            ${this._renderMobileNavButton(n.HOME,"Home")}
            ${this._renderMobileNavButton(n.PROJECTS,"Projects")}
            ${this._renderMobileNavButton(n.ABOUT,"About")}
            ${this._renderMobileNavButton(n.CONTACT,"Contact")}
          </div>
        </div>
      </div>
    `}_renderNavButton(e,n){const i=this.currentPage===e;return t`
      <app-button variant="${i?"primary":"default"}" @click=${()=>this._navigateTo(e)}>
        ${n}
      </app-button>
    `}_renderMobileNavButton(e,n){const i=this.currentPage===e;return t`
      <app-button
        variant="${i?"primary":"default"}"
        full-width
        @click=${()=>{this._navigateTo(e),this._closeMenu()}}>
        ${n}
      </app-button>
    `}_renderPage(){switch(this.currentPage){case n.HOME:return t`<home-page></home-page>`;case n.PROJECTS:return t`<projects-page></projects-page>`;case n.ABOUT:return t`<about-page></about-page>`;case n.CONTACT:return t`<contact-page></contact-page>`;default:return t`<home-page></home-page>`}}}customElements.define("portfolio-app",PortfolioApp);
//# sourceMappingURL=index-73df86a5.js.map
