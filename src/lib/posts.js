// Loads every markdown file in src/content/posts/ at build time.
// Each file needs a frontmatter block (--- key: value ---) followed by the
// article body in markdown. The filename becomes the URL slug.

const files = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function parseFrontmatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    data[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { data, body: raw.slice(match[0].length) };
}

export const posts = Object.entries(files)
  .map(([path, raw]) => {
    const { data, body } = parseFrontmatter(raw);
    return {
      slug: path.split('/').pop().replace(/\.md$/, ''),
      title: data.title ?? 'Untitled',
      date: data.date ?? '',
      readTime: data.readTime ?? '',
      excerpt: data.excerpt ?? '',
      image: data.image ?? null,
      body,
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

export function getPost(slug) {
  return posts.find(p => p.slug === slug) ?? null;
}
