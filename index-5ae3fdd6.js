import{i as t,x as e,a as s}from"./chunks/vendor-6907c12a.js";import"./chunks/pages-24fc057c.js";const o={HOME:"home",PROJECTS:"projects",ABOUT:"about",CONTACT:"contact",BLOG:"blog"},i=o.HOME;class PortfolioApp extends t{static properties={currentPage:{type:String},isMenuOpen:{type:Boolean}};constructor(){super(),this.currentPage=i,this.isMenuOpen=!1,this._setupRouting()}_setupRouting(){this._handleHashChange(),window.addEventListener("hashchange",(()=>this._handleHashChange()))}_handleHashChange(){const t=window.location.hash.substring(1);t&&Object.values(o).includes(t)||t.startsWith(`${o.BLOG}/`)?this.currentPage=t:t||""!==window.location.hash||(this.currentPage=i)}_navigateTo(t){window.location.hash=t}createRenderRoot(){return this}_toggleMenu(){this.isMenuOpen=!this.isMenuOpen}_closeMenu(){this.isMenuOpen=!1}render(){return e`
      <div class="app-shell">
        ${this._renderHeader()}
        <main class="page-main container">
          ${this._renderPage()}
        </main>
        ${this._renderMobileMenu()}
      </div>
    `}_renderHeader(){return e`
      <header class="site-header">
        <nav class="site-nav container">
          <h1 class="brand">Max Larionov</h1>
          
          <!-- Desktop Navigation -->
          <div class="desktop-nav">
            ${this._renderNavButton(o.HOME,"Home")}
            ${this._renderNavButton(o.PROJECTS,"Projects")}
            ${this._renderNavButton(o.BLOG,"Blog")}
            ${this._renderNavButton(o.ABOUT,"About")}
            ${this._renderNavButton(o.CONTACT,"Contact")}
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
    `}_renderMobileMenu(){return e`
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
            ${this._renderMobileNavButton(o.HOME,"Home")}
            ${this._renderMobileNavButton(o.PROJECTS,"Projects")}
            ${this._renderMobileNavButton(o.BLOG,"Blog")}
            ${this._renderMobileNavButton(o.ABOUT,"About")}
            ${this._renderMobileNavButton(o.CONTACT,"Contact")}
          </div>
        </div>
      </div>
    `}_renderNavButton(t,s){const o=this.currentPage===t||this.currentPage.startsWith(`${t}/`);return e`
      <app-button variant="${o?"primary":"secondary"}" @click=${()=>this._navigateTo(t)}>
        ${s}
      </app-button>
    `}_renderMobileNavButton(t,s){const o=this.currentPage===t||this.currentPage.startsWith(`${t}/`);return e`
      <app-button
        variant="${o?"primary":"secondary"}"
        full-width
        @click=${()=>{this._navigateTo(t),this._closeMenu()}}>
        ${s}
      </app-button>
    `}_renderPage(){switch(this.currentPage){case o.HOME:return e`<home-page></home-page>`;case o.PROJECTS:return e`<projects-page></projects-page>`;case o.BLOG:return e`<blog-page></blog-page>`;case o.ABOUT:return e`<about-page></about-page>`;case o.CONTACT:return e`<contact-page></contact-page>`;default:if(this.currentPage.startsWith(`${o.BLOG}/`)){const t=this.currentPage.substring(`${o.BLOG}/`.length);return e`<blog-post-page slug="${t}"></blog-post-page>`}return e`<home-page></home-page>`}}}customElements.define("portfolio-app",PortfolioApp);class BlogPostCard extends t{static properties={post:{type:Object}};static styles=s`
    :host {
      display: block;
    }

    .card {
      display: grid;
      gap: var(--space-6, 24px);
      background: var(--color-surface, #152238);
      border: 1px solid var(--color-border, #2b3f60);
      border-radius: var(--radius-lg, 16px);
      padding: calc(var(--space-6, 24px) + 4px);
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.04) inset;
    }

    .image {
      width: 100%;
      aspect-ratio: 16 / 9;
      border-radius: var(--radius-sm, 8px);
      object-fit: cover;
      border: 1px solid var(--color-border, #2b3f60);
    }

    .title {
      font-size: clamp(1.25rem, 2vw, 1.55rem);
      margin: 0;
      color: var(--color-text, #eff5ff);
      line-height: 1.25;
    }

    .date {
      margin: 0;
      font-size: 0.88rem;
      color: var(--color-text-muted, #b9c7dd);
    }

    .preview {
      margin: 0;
      color: var(--color-text-muted, #b9c7dd);
      line-height: 1.75;
      max-width: 72ch;
    }

    .content {
      display: grid;
      gap: var(--space-4, 16px);
    }

    .meta {
      display: inline-flex;
      width: fit-content;
      border: 1px solid var(--color-border, #2b3f60);
      background: color-mix(in srgb, var(--color-surface-strong, #223552) 45%, transparent);
      border-radius: var(--radius-pill, 999px);
      padding: 0.25rem 0.65rem;
    }
  `;constructor(){super(),this.post=null}render(){if(!this.post)return"";const t=`#blog/${this.post.slug}`,s=function toPreviewText(t,e=180){const s=t.excerpt||(t.content?.join(" ")??"");return s.length<=e?s:`${s.slice(0,e).trimEnd()}...`}(this.post);return e`
      <article class="card">
        ${this.post.image?e`<img class="image" src="${this.post.image}" alt="${this.post.title}" loading="lazy" />`:""}
        <div class="content">
          <div class="meta"><p class="date">${this.post.date}</p></div>
          <h2 class="title">${this.post.title}</h2>
          <p class="preview">${s}</p>
          <div>
            <app-button href="${t}" variant="primary">Read full article</app-button>
          </div>
        </div>
      </article>
    `}}customElements.define("blog-post-card",BlogPostCard);class BlogPage extends t{static properties={posts:{type:Array},visibleCount:{type:Number},isLoading:{type:Boolean},errorMessage:{type:String}};constructor(){super(),this.posts=[],this.visibleCount=5,this.isLoading=!0,this.errorMessage="",this._observer=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._loadPosts()}disconnectedCallback(){this._destroyObserver(),super.disconnectedCallback()}updated(){this._setupObserver()}async _loadPosts(){this.isLoading=!0,this.errorMessage="";try{this.posts=await async function getBlogPostIndex(){const t=await fetch("content/blog/index.json");if(!t.ok)throw new Error("Failed to load blog index");return(await t.json()).posts??[]}()}catch(t){this.errorMessage="Could not load blog posts. Please try again later."}finally{this.isLoading=!1}}_setupObserver(){const t=this.querySelector("[data-infinite-sentinel]");!t||this.visibleCount>=this.posts.length?this._destroyObserver():this._observer||(this._observer=new IntersectionObserver((t=>{const[e]=t;e.isIntersecting&&(this.visibleCount=Math.min(this.visibleCount+5,this.posts.length))})),this._observer.observe(t))}_destroyObserver(){this._observer&&(this._observer.disconnect(),this._observer=null)}render(){if(this.isLoading)return e`<div class="page-stack"><h1 class="hero-title">Blog</h1><p>Loading posts...</p></div>`;if(this.errorMessage)return e`<div class="page-stack"><h1 class="hero-title">Blog</h1><p>${this.errorMessage}</p></div>`;const t=this.posts.slice(0,this.visibleCount);return e`
      <div class="page-stack">
        <header class="page-stack" style="gap: var(--space-3);">
          <h1 class="hero-title">Developer Blog</h1>
          <p>Ideas, engineering notes, and practical lessons from building products.</p>
        </header>

        <section class="page-stack">
          ${t.map((t=>e`<blog-post-card .post=${t}></blog-post-card>`))}
        </section>

        ${this.visibleCount<this.posts.length?e`<div data-infinite-sentinel class="blog-sentinel">Loading more posts...</div>`:""}
      </div>
    `}}customElements.define("blog-page",BlogPage);class BlogPostPage extends t{static properties={slug:{type:String},post:{type:Object},isLoading:{type:Boolean},errorMessage:{type:String}};constructor(){super(),this.slug="",this.post=null,this.isLoading=!0,this.errorMessage="",this._lastLoadedSlug=""}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._loadPost()}updated(t){t.has("slug")&&this._loadPost()}async _loadPost(){if(this.slug&&this.slug!==this._lastLoadedSlug){this.isLoading=!0,this.errorMessage="";try{this.post=await async function getBlogPost(t){const e=await fetch(`content/blog/${t}.json`);if(!e.ok)throw new Error("Failed to load blog post");return e.json()}(this.slug),this._lastLoadedSlug=this.slug}catch(t){this.post=null,this.errorMessage="Could not load this blog post."}finally{this.isLoading=!1}}}render(){return this.isLoading?e`<div class="page-stack"><p>Loading article...</p></div>`:this.errorMessage||!this.post?e`
        <div class="page-stack">
          <app-button href="#blog">Back to blog</app-button>
          <p>${this.errorMessage||"Article not found."}</p>
        </div>
      `:e`
      <article class="article page-stack">
        <div>
          <app-button href="#blog">Back to blog</app-button>
        </div>
        <header class="page-stack" style="gap: var(--space-3);">
          <p class="article-meta">${this.post.date}</p>
          <h1 class="hero-title">${this.post.title}</h1>
        </header>
        ${this.post.image?e`<img class="article-image" src="${this.post.image}" alt="${this.post.title}" />`:""}
        <div class="article-content page-stack" style="gap: var(--space-4);">
          ${this.post.content.map((t=>e`<p>${t}</p>`))}
        </div>
      </article>
    `}}customElements.define("blog-post-page",BlogPostPage);
//# sourceMappingURL=index-5ae3fdd6.js.map
