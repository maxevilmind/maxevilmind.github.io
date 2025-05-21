import{i as e,x as t}from"./chunks/vendor-6907c12a.js";import"./chunks/pages-b64acac1.js";const n={HOME:"home",PROJECTS:"projects",ABOUT:"about",CONTACT:"contact"},o=n.HOME;class PortfolioApp extends e{static properties={currentPage:{type:String},isMenuOpen:{type:Boolean}};constructor(){super(),this.currentPage=o,this.isMenuOpen=!1,this._setupRouting()}_setupRouting(){this._handleHashChange(),window.addEventListener("hashchange",(()=>this._handleHashChange()))}_handleHashChange(){const e=window.location.hash.substring(1);e&&Object.values(n).includes(e)?this.currentPage=e:e||""!==window.location.hash||(this.currentPage=o)}_navigateTo(e){window.location.hash=e}createRenderRoot(){return this}_toggleMenu(){this.isMenuOpen=!this.isMenuOpen}_closeMenu(){this.isMenuOpen=!1}render(){return t`
      <div class="min-h-screen bg-gray-900 text-white flex flex-col">
        ${this._renderHeader()}
        <main class="flex-1 p-6 max-w-7xl mx-auto w-full">
          ${this._renderPage()}
        </main>
        ${this._renderMobileMenu()}
      </div>
    `}_renderHeader(){return t`
      <header class="bg-gray-800 shadow-md p-4">
        <nav class="max-w-7xl mx-auto flex justify-between items-center">
          <h1 class="text-2xl font-bold tracking-tight text-white">Max Larionov</h1>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex gap-2">
            ${this._renderNavButton(n.HOME,"Home")}
            ${this._renderNavButton(n.PROJECTS,"Projects")}
            ${this._renderNavButton(n.ABOUT,"About")}
            ${this._renderNavButton(n.CONTACT,"Contact")}
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
    `}_renderMobileMenu(){return t`
      <!-- Mobile Menu Overlay -->
      <div 
        class="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 md:hidden
               ${this.isMenuOpen?"opacity-100 z-40":"opacity-0 pointer-events-none"}"
        @click=${this._closeMenu}>
      </div>

      <!-- Mobile Menu Sidebar -->
      <div 
        class="fixed top-0 right-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out md:hidden
               ${this.isMenuOpen?"translate-x-0":"translate-x-full"} z-50">
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
            ${this._renderMobileNavButton(n.HOME,"Home")}
            ${this._renderMobileNavButton(n.PROJECTS,"Projects")}
            ${this._renderMobileNavButton(n.ABOUT,"About")}
            ${this._renderMobileNavButton(n.CONTACT,"Contact")}
          </div>
        </div>
      </div>
    `}_renderNavButton(e,n){const o=this.currentPage===e;return t`
      <lion-button 
        class="${"px-4 py-2 text-white rounded transition-colors"} ${o?"bg-blue-600 hover:bg-blue-500":"bg-gray-700 hover:bg-gray-600"}" 
        @click=${()=>this._navigateTo(e)}>
        ${n}
      </lion-button>
    `}_renderMobileNavButton(e,n){const o=this.currentPage===e;return t`
      <button 
        class="${"w-full px-4 py-3 text-white rounded transition-colors text-left"} ${o?"bg-blue-600 hover:bg-blue-500":"bg-gray-700 hover:bg-gray-600"}" 
        @click=${()=>{this._navigateTo(e),this._closeMenu()}}>
        ${n}
      </button>
    `}_renderPage(){switch(this.currentPage){case n.HOME:return t`<home-page></home-page>`;case n.PROJECTS:return t`<projects-page></projects-page>`;case n.ABOUT:return t`<about-page></about-page>`;case n.CONTACT:return t`<contact-page></contact-page>`;default:return t`<home-page></home-page>`}}}customElements.define("portfolio-app",PortfolioApp);
//# sourceMappingURL=index-0f10c753.js.map
