import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../lib/posts';
import { site } from '../data/site';

export default function BlogIndex() {
  useEffect(() => {
    document.title = `Writing — ${site.name}`;
  }, []);

  return (
    <div className="page blog-index">
      <h1>Writing</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            <time>{post.date}</time>
          </li>
        ))}
      </ul>
    </div>
  );
}
