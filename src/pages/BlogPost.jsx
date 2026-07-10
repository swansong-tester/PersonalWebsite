import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Marked } from 'marked';
import { getPost } from '../lib/posts';
import { site } from '../data/site';
import { asset } from '../lib/asset';

// Absolute image paths in markdown ('/photo.png') get the deploy base
// prefixed so pictures in posts work when hosted under a subpath.
const md = new Marked({
  renderer: {
    image({ href, title, text }) {
      const src = href?.startsWith('/') ? asset(href) : href;
      return `<img src="${src}" alt="${text ?? ''}"${title ? ` title="${title}"` : ''} loading="lazy">`;
    },
  },
});

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  const html = useMemo(() => (post ? md.parse(post.body) : ''), [post]);

  useEffect(() => {
    document.title = post ? `${post.title} — ${site.name}` : `Post not found — ${site.name}`;
  }, [post]);

  if (!post) {
    return (
      <div className="page blog-post">
        <Link to="/blog" className="back-link">← All writing</Link>
        <h1>Post not found</h1>
        <p className="meta">The article you're looking for doesn't exist (or was moved).</p>
      </div>
    );
  }

  return (
    <article className="page blog-post">
      <Link to="/blog" className="back-link">← All writing</Link>

      <header className="post-header">
        <div className="meta">
          <span>{post.date}</span> · <span>{post.readTime}</span>
        </div>
        <h1>{post.title}</h1>
      </header>

      {post.image && (
        <div className="post-hero-image">
          <img src={asset(post.image)} alt={post.title} fetchPriority="high" />
        </div>
      )}

      <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
