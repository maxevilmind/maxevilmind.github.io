import { LitElement, css, html } from 'lit';
import './AppButton.js';
import { toPreviewText } from '../../utils/blog.js';

export class BlogPostCard extends LitElement {
  static properties = {
    post: { type: Object }
  };

  static styles = css`
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
  `;

  constructor() {
    super();
    this.post = null;
  }

  render() {
    if (!this.post) {
      return '';
    }

    const postUrl = `#blog/${this.post.slug}`;
    const previewText = toPreviewText(this.post);

    return html`
      <article class="card">
        <div class="content">
          <h2 class="title">${this.post.title}</h2>
          <div class="meta"><p class="date">${this.post.date}</p></div>
          ${this.post.image ? html`<img class="image" src="${this.post.image}" alt="${this.post.title}" loading="lazy" />` : ''}
          <p class="preview">${previewText}</p>
          <div>
            <app-button href="${postUrl}" variant="primary">Read full article</app-button>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('blog-post-card', BlogPostCard);
