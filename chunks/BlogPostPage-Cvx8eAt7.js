import{i as t,b as s,o as e}from"./vendor-DbZKYTSE.js";import{a}from"./blog-75tRZMTn.js";import"../index-DD_5n2Ai.js";let i;class o extends t{static properties={slug:{type:String},post:{type:Object},isLoading:{type:Boolean},errorMessage:{type:String}};constructor(){super(),this.slug="",this.post=null,this.isLoading=!0,this.errorMessage="",this._lastLoadedSlug="",this._renderedMarkdown="",this._loadToken=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._loadPost()}updated(t){t.has("slug")&&this._loadPost()}async _loadPost(){if(!this.slug||this.slug===this._lastLoadedSlug)return;this.isLoading=!0,this.errorMessage="";const t=++this._loadToken;try{const[s,{marked:e,DOMPurify:o}]=await Promise.all([a(this.slug),(i||(i=Promise.all([import("./markdown-D8O9IvPi.js").then((function(t){return t.m})),import("./markdown-D8O9IvPi.js").then((function(t){return t.p}))]).then((([{marked:t},{default:s}])=>({marked:t,DOMPurify:s})))),i)]);if(t!==this._loadToken)return;this.post=s;const n=e.parse(s.markdown||"");this._renderedMarkdown=o.sanitize(n),this._lastLoadedSlug=this.slug}catch(s){if(t!==this._loadToken)return;this.post=null,this._renderedMarkdown="",this.errorMessage="Could not load this blog post."}finally{t===this._loadToken&&(this.isLoading=!1)}}render(){return this.isLoading?s`
        <div class="page-stack">
          <section class="panel panel-compact">
            <div class="panel-content section-stack">
              <p class="eyebrow">article uplink</p>
              <p>Loading article...</p>
            </div>
          </section>
        </div>
      `:this.errorMessage||!this.post?s`
        <div class="page-stack">
          <app-button href="#blog">Back to blog</app-button>
          <section class="panel panel-compact">
            <div class="panel-content section-stack">
              <p class="eyebrow">article uplink</p>
              <p>${this.errorMessage||"Article not found."}</p>
            </div>
          </section>
        </div>
      `:s`
      <article class="article page-stack">
        <div>
          <app-button href="#blog">Back to blog</app-button>
        </div>
        <section class="panel article-header">
          <div class="panel-content section-stack">
            <p class="eyebrow">field transmission</p>
            <p class="article-meta">${this.post.date}</p>
            <h1 class="article-title">${this.post.title}</h1>
          </div>
        </section>
        ${this.post.image?s`<img class="article-image" src="${this.post.image}" alt="${this.post.title}" loading="eager" fetchpriority="high" />`:""}
        <section class="panel panel-compact">
          <div class="panel-content article-content">${e(this._renderedMarkdown)}</div>
        </section>
      </article>
    `}}customElements.define("blog-post-page",o);export{o as BlogPostPage};
