import { BLOG_POST_SLUGS } from '../content/blogManifest.js';

const BLOG_POSTS_BASE_PATH = 'content/blog/posts';

function parseFrontMatter(markdownSource) {
  if (!markdownSource.startsWith('---\n')) {
    return { metadata: {}, body: markdownSource };
  }

  const endIndex = markdownSource.indexOf('\n---\n', 4);
  if (endIndex === -1) {
    return { metadata: {}, body: markdownSource };
  }

  const metadataBlock = markdownSource.slice(4, endIndex).trim();
  const body = markdownSource.slice(endIndex + 5).trim();
  const metadata = {};

  for (const line of metadataBlock.split('\n')) {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) {
      continue;
    }

    const key = line.slice(0, separatorIndex).trim();
    const rawValue = line.slice(separatorIndex + 1).trim();
    const normalizedValue = rawValue.replace(/^"|"$/g, '').replace(/^'|'$/g, '');
    metadata[key] = normalizedValue;
  }

  return { metadata, body };
}

async function fetchMarkdownPost(slug) {
  const response = await fetch(`${BLOG_POSTS_BASE_PATH}/${slug}.md`);
  if (!response.ok) {
    throw new Error(`Failed to load blog post: ${slug}`);
  }

  const source = await response.text();
  const { metadata, body } = parseFrontMatter(source);

  return {
    slug,
    title: metadata.title ?? slug,
    date: metadata.date ?? '',
    image: metadata.image ?? '',
    excerpt: metadata.excerpt ?? '',
    markdown: body
  };
}

export async function getBlogPostIndex() {
  const posts = await Promise.all(BLOG_POST_SLUGS.map(slug => fetchMarkdownPost(slug)));

  return posts.sort((firstPost, secondPost) => {
    return secondPost.date.localeCompare(firstPost.date);
  });
}

export async function getBlogPost(slug) {
  return fetchMarkdownPost(slug);
}

export function toPreviewText(post, maxLength = 200) {
  const sourceText = post.excerpt || post.markdown || '';
  if (sourceText.length <= maxLength) {
    return sourceText;
  }

  return `${sourceText.slice(0, maxLength).trimEnd()}...`;
}
