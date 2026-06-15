import { LitElement, html } from 'lit';
import { getBlogPostIndex } from '../../utils/blog.js';
import '../ui/BlogPostCard.js';

const PAGE_SIZE = 5;

export class BlogPage extends LitElement {
  static properties = {
    posts: { type: Array },
    visibleCount: { type: Number },
    isLoading: { type: Boolean },
    errorMessage: { type: String }
  };

  constructor() {
    super();
    this.posts = [];
    this.visibleCount = PAGE_SIZE;
    this.isLoading = true;
    this.errorMessage = '';
    this._observer = null;
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadPosts();
  }

  disconnectedCallback() {
    this._destroyObserver();
    super.disconnectedCallback();
  }

  updated() {
    this._setupObserver();
  }

  async _loadPosts() {
    this.isLoading = true;
    this.errorMessage = '';

    try {
      this.posts = await getBlogPostIndex();
    } catch (error) {
      this.errorMessage = 'Could not load blog posts. Please try again later.';
    } finally {
      this.isLoading = false;
    }
  }

  _setupObserver() {
    const sentinel = this.querySelector('[data-infinite-sentinel]');

    if (!sentinel || this.visibleCount >= this.posts.length) {
      this._destroyObserver();
      return;
    }

    if (this._observer) {
      return;
    }

    this._observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        return;
      }

      this.visibleCount = Math.min(this.visibleCount + PAGE_SIZE, this.posts.length);
    });

    this._observer.observe(sentinel);
  }

  _destroyObserver() {
    if (!this._observer) {
      return;
    }

    this._observer.disconnect();
    this._observer = null;
  }

  render() {
    if (this.isLoading) {
      return html`
        <div class="page-stack">
          <section class="panel panel-compact">
            <div class="panel-content section-stack">
              <p class="eyebrow">signal archive</p>
              <h1 class="section-title">Loading <span class="accent">Posts</span></h1>
              <p>Indexing transmissions...</p>
            </div>
          </section>
        </div>
      `;
    }

    if (this.errorMessage) {
      return html`
        <div class="page-stack">
          <section class="panel panel-compact">
            <div class="panel-content section-stack">
              <p class="eyebrow">signal archive</p>
              <h1 class="section-title">Archive <span class="accent">Offline</span></h1>
              <p>${this.errorMessage}</p>
            </div>
          </section>
        </div>
      `;
    }

    const visiblePosts = this.posts.slice(0, this.visibleCount);

    return html`
      <div class="page-stack">
        <section class="panel">
          <div class="panel-content section-stack">
            <p class="eyebrow">signal archive</p>
            <h1 class="section-title">Developer <span class="accent">Blog</span></h1>
            <p class="hero-text">Ideas, engineering notes, hardware experiments, and practical lessons from building products.</p>
          </div>
        </section>

        <section class="page-stack">
          ${visiblePosts.map(post => html`<blog-post-card .post=${post}></blog-post-card>`) }
        </section>

        ${this.visibleCount < this.posts.length ? html`<div data-infinite-sentinel class="blog-sentinel">Loading more posts...</div>` : ''}
      </div>
    `;
  }
}

customElements.define('blog-page', BlogPage);
