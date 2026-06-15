import{i as s,a as e,x as t}from"./vendor-7603fedf.js";import{t as a,g as r}from"./blog-6615a199.js";import"../index-0d82a843.js";class i extends s{static properties={post:{type:Object}};static styles=e`
    :host {
      display: block;
    }

    .card {
      position: relative;
      overflow: hidden;
      display: grid;
      gap: var(--space-5, 20px);
      border: 1px solid var(--color-border, rgba(160, 133, 255, 0.26));
      border-radius: var(--radius-lg, 24px);
      padding: var(--space-5, 20px);
      background:
        linear-gradient(145deg, rgba(19, 16, 41, 0.94), rgba(8, 5, 18, 0.88)),
        radial-gradient(circle at 0% 0%, rgba(94, 252, 255, 0.16), transparent 34%);
      box-shadow: var(--shadow-md, 0 18px 42px rgba(0, 0, 0, 0.34));
      transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
    }

    .card::before {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      background:
        linear-gradient(90deg, rgba(94, 252, 255, 0.24), transparent 30%, transparent 72%, rgba(255, 77, 243, 0.18)),
        repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0, rgba(255, 255, 255, 0.05) 1px, transparent 1px, transparent 6px);
      opacity: 0.30;
      mask-image: linear-gradient(#000, transparent 74%);
    }

    .card:hover {
      transform: translateY(-4px);
      border-color: var(--color-border-strong, rgba(94, 252, 255, 0.48));
      box-shadow: var(--shadow-md, 0 18px 42px rgba(0, 0, 0, 0.34)), var(--shadow-glow, 0 0 34px rgba(255, 77, 243, 0.22));
    }

    .image {
      width: 100%;
      aspect-ratio: 16 / 9;
      border: 1px solid var(--color-border, rgba(160, 133, 255, 0.26));
      border-radius: var(--radius-md, 16px);
      object-fit: cover;
      background: var(--color-bg-muted, #17102d);
    }

    .content {
      position: relative;
      z-index: 1;
      display: grid;
      gap: var(--space-4, 16px);
    }

    .title {
      margin: 0;
      color: var(--color-text, #f8f6ff);
      font-family: var(--font-family-heading, sans-serif);
      font-size: clamp(1.55rem, 3vw, 2.45rem);
      line-height: 0.98;
      letter-spacing: -0.05em;
      text-transform: uppercase;
    }

    .meta {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2, 8px);
      align-items: center;
    }

    .date,
    .chip {
      margin: 0;
      display: inline-flex;
      align-items: center;
      min-height: 28px;
      border: 1px solid var(--color-border, rgba(160, 133, 255, 0.26));
      border-radius: var(--radius-pill, 999px);
      padding: 0.28rem 0.68rem;
      color: var(--color-text-muted, #a9a4ca);
      background: rgba(255, 255, 255, 0.04);
      font-family: var(--font-family-mono, monospace);
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .chip {
      color: var(--color-primary, #5efcff);
    }

    .preview {
      margin: 0;
      max-width: 76ch;
      color: var(--color-text-muted, #a9a4ca);
      line-height: 1.75;
    }

    @media (min-width: 760px) {
      .card.has-image {
        grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
        align-items: stretch;
      }

      .image {
        height: 100%;
        aspect-ratio: auto;
      }
    }
  `;constructor(){super(),this.post=null}render(){if(!this.post)return"";const s=`#blog/${this.post.slug}`,e=a(this.post),r="card "+(this.post.image?"has-image":"");return t`
      <article class=${r}>
        ${this.post.image?t`<img class="image" src=${this.post.image} alt=${this.post.title} loading="lazy" />`:""}
        <div class="content">
          <div class="meta">
            <p class="date">${this.post.date}</p>
            <span class="chip">field notes</span>
          </div>
          <h2 class="title">${this.post.title}</h2>
          <p class="preview">${e}</p>
          <div>
            <app-button href=${s} variant="primary">Open transmission</app-button>
          </div>
        </div>
      </article>
    `}}customElements.define("blog-post-card",i);class o extends s{static properties={posts:{type:Array},visibleCount:{type:Number},isLoading:{type:Boolean},errorMessage:{type:String}};constructor(){super(),this.posts=[],this.visibleCount=5,this.isLoading=!0,this.errorMessage="",this._observer=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._loadPosts()}disconnectedCallback(){this._destroyObserver(),super.disconnectedCallback()}updated(){this._setupObserver()}async _loadPosts(){this.isLoading=!0,this.errorMessage="";try{this.posts=await r()}catch(s){this.errorMessage="Could not load blog posts. Please try again later."}finally{this.isLoading=!1}}_setupObserver(){const s=this.querySelector("[data-infinite-sentinel]");!s||this.visibleCount>=this.posts.length?this._destroyObserver():this._observer||(this._observer=new IntersectionObserver((s=>{const[e]=s;e.isIntersecting&&(this.visibleCount=Math.min(this.visibleCount+5,this.posts.length))})),this._observer.observe(s))}_destroyObserver(){this._observer&&(this._observer.disconnect(),this._observer=null)}render(){if(this.isLoading)return t`
        <div class="page-stack">
          <section class="panel panel-compact">
            <div class="panel-content section-stack">
              <p class="eyebrow">signal archive</p>
              <h1 class="section-title">Loading <span class="accent">Posts</span></h1>
              <p>Indexing transmissions...</p>
            </div>
          </section>
        </div>
      `;if(this.errorMessage)return t`
        <div class="page-stack">
          <section class="panel panel-compact">
            <div class="panel-content section-stack">
              <p class="eyebrow">signal archive</p>
              <h1 class="section-title">Archive <span class="accent">Offline</span></h1>
              <p>${this.errorMessage}</p>
            </div>
          </section>
        </div>
      `;const s=this.posts.slice(0,this.visibleCount);return t`
      <div class="page-stack">
        <section class="panel">
          <div class="panel-content section-stack">
            <p class="eyebrow">signal archive</p>
            <h1 class="section-title">Developer <span class="accent">Blog</span></h1>
            <p class="hero-text">Ideas, engineering notes, hardware experiments, and practical lessons from building products.</p>
          </div>
        </section>

        <section class="page-stack">
          ${s.map((s=>t`<blog-post-card .post=${s}></blog-post-card>`))}
        </section>

        ${this.visibleCount<this.posts.length?t`<div data-infinite-sentinel class="blog-sentinel">Loading more posts...</div>`:""}
      </div>
    `}}customElements.define("blog-page",o);export{o as BlogPage};
