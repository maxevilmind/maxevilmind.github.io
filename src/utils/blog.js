const BLOG_INDEX_PATH = 'content/blog/index.json';

export async function getBlogPostIndex() {
  const response = await fetch(BLOG_INDEX_PATH);
  if (!response.ok) {
    throw new Error('Failed to load blog index');
  }

  const data = await response.json();
  return data.posts ?? [];
}

export async function getBlogPost(slug) {
  const response = await fetch(`content/blog/${slug}.json`);
  if (!response.ok) {
    throw new Error('Failed to load blog post');
  }

  return response.json();
}

export function toPreviewText(post, maxLength = 180) {
  const sourceText = post.excerpt || (post.content?.join(' ') ?? '');
  if (sourceText.length <= maxLength) {
    return sourceText;
  }

  return `${sourceText.slice(0, maxLength).trimEnd()}...`;
}
