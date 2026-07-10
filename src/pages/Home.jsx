import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WorkList from '../components/WorkList';
import { site } from '../data/site';
import { posts } from '../lib/posts';
import { asset } from '../lib/asset';

export default function Home() {
  useEffect(() => {
    document.title = `${site.name} — Designer & Developer`;
  }, []);

  const latest = posts.slice(0, 3);

  return (
    <>
      <div id="hero" className="page intro">
        <img
          className="portrait"
          src={asset(site.portrait.src)}
          alt={site.portrait.alt}
          fetchPriority="high"
        />
        <div>
          <h1>{site.name}</h1>
          <p>{site.bio}</p>
        </div>
      </div>

      <WorkList />

      <section id="writing" className="page">
        <h2>Writing</h2>
        <ul className="post-list">
          {latest.map(post => (
            <li key={post.slug}>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              <time>{post.date}</time>
            </li>
          ))}
        </ul>
        <Link to="/blog" className="all-posts-link">All writing →</Link>
      </section>
    </>
  );
}
