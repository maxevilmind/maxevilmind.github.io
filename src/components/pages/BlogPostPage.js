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
      return html`<div class="page-stack"><p>Loading article...</p></div>`;
    }

    if (this.errorMessage || !this.post) {
      return html`
        <div class="page-stack">
          <app-button href="#blog">Back to blog</app-button>
          <p>${this.errorMessage || 'Article not found.'}</p>
        </div>
      `;
    }

    return html`
      <article class="article page-stack">
        <div>
          <app-button href="#blog">Back to blog</app-button>
        </div>
        <header class="page-stack" style="gap: var(--space-3);">
          <p class="article-meta">${this.post.date}</p>
          <h1 class="hero-title">${this.post.title}</h1>
        </header>
        ${this.post.image ? html`<img class="article-image" src="${this.post.image}" alt="${this.post.title}" />` : ''}
        <div class="article-content">${unsafeHTML(this._renderedMarkdown)}</div>
      </article>
    `;
  }
}

customElements.define('blog-post-page', BlogPostPage);
