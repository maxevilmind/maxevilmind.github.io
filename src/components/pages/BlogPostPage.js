import { LitElement, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { getBlogPost } from '../../utils/blog.js';
import '../ui/AppButton.js';

export class BlogPostPage extends LitElement {
  static properties = {
    slug: { type: String },
    post: { type: Object },
    isLoading: { type: Boolean },
    errorMessage: { type: String }
  };

  constructor() {
    super();
    this.slug = '';
    this.post = null;
    this.isLoading = true;
    this.errorMessage = '';
    this._lastLoadedSlug = '';
    this._renderedMarkdown = '';
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadPost();
  }

  updated(changedProperties) {
    if (changedProperties.has('slug')) {
      this._loadPost();
    }
  }

  async _loadPost() {
    if (!this.slug || this.slug === this._lastLoadedSlug) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    try {
      this.post = await getBlogPost(this.slug);
      const renderedHtml = marked.parse(this.post.markdown || '');
      this._renderedMarkdown = DOMPurify.sanitize(renderedHtml);
      this._lastLoadedSlug = this.slug;
    } catch (error) {
      this.post = null;
      this._renderedMarkdown = '';
      this.errorMessage = 'Could not load this blog post.';
    } finally {
      this.isLoading = false;
    }
  }

  render() {
    if (this.isLoading) {
      return html`
        <div class="page-stack">
          <section class="panel panel-compact">
            <div class="panel-content section-stack">
              <p class="eyebrow">article uplink</p>
              <p>Loading article...</p>
            </div>
          </section>
        </div>
      `;
    }

    if (this.errorMessage || !this.post) {
      return html`
        <div class="page-stack">
          <app-button href="#blog">Back to blog</app-button>
          <section class="panel panel-compact">
            <div class="panel-content section-stack">
              <p class="eyebrow">article uplink</p>
              <p>${this.errorMessage || 'Article not found.'}</p>
            </div>
          </section>
        </div>
      `;
    }

    return html`
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
        ${this.post.image ? html`<img class="article-image" src="${this.post.image}" alt="${this.post.title}" />` : ''}
        <section class="panel panel-compact">
          <div class="panel-content article-content">${unsafeHTML(this._renderedMarkdown)}</div>
        </section>
      </article>
    `;
  }
}

customElements.define('blog-post-page', BlogPostPage);
