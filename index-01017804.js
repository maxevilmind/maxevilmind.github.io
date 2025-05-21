import{i as e,x as t}from"./chunks/vendor-6907c12a.js";import"./chunks/pages-d8982caa.js";const a={HOME:"home",PROJECTS:"projects",ABOUT:"about",CONTACT:"contact"},r=a.HOME;customElements.define("portfolio-app",class PortfolioApp extends e{static properties={currentPage:{type:String}};constructor(){super(),this.currentPage=r,this._setupRouting()}_setupRouting(){this._handleHashChange(),window.addEventListener("hashchange",(()=>this._handleHashChange()))}_handleHashChange(){const e=window.location.hash.substring(1);e&&Object.values(a).includes(e)?this.currentPage=e:e||""!==window.location.hash||(this.currentPage=r)}_navigateTo(e){window.location.hash=e}createRenderRoot(){return this}render(){return t`
      <div class="min-h-screen bg-gray-900 text-white flex flex-col">
        ${this._renderHeader()}
        <main class="flex-1 p-6 max-w-7xl mx-auto w-full">
          ${this._renderPage()}
        </main>
      </div>
    `}_renderHeader(){return t`
      <header class="bg-gray-800 shadow-md p-4">
        <nav class="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 class="text-2xl font-bold tracking-tight text-white">Max Larionov</h1>
          <div class="flex gap-2">
            ${this._renderNavButton(a.HOME,"Home")}
            ${this._renderNavButton(a.PROJECTS,"Projects")}
            ${this._renderNavButton(a.ABOUT,"About")}
            ${this._renderNavButton(a.CONTACT,"Contact")}
          </div>
        </nav>
      </header>
    `}_renderNavButton(e,a){const r=this.currentPage===e;return t`
      <lion-button 
        class="${"px-4 py-2 text-white rounded transition-colors"} ${r?"bg-blue-600 hover:bg-blue-500":"bg-gray-700 hover:bg-gray-600"}" 
        @click=${()=>this._navigateTo(e)}>
        ${a}
      </lion-button>
    `}_renderPage(){switch(this.currentPage){case a.HOME:return t`<home-page></home-page>`;case a.PROJECTS:return t`<projects-page></projects-page>`;case a.ABOUT:return t`<about-page></about-page>`;case a.CONTACT:return t`<contact-page></contact-page>`;default:return t`<home-page></home-page>`}}});
//# sourceMappingURL=index-01017804.js.map
