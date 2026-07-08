import { useEffect } from 'react';
import useReveal from '../hooks/useReveal';
import { posts } from '../lib/posts';
import { site } from '../data/site';
import BlogCard from '../components/BlogCard';
import './BlogIndex.css';

export default function BlogIndex() {
  const [titleRef, titleInView] = useReveal();

  useEffect(() => {
    document.title = `Blog — ${site.name}`;
  }, []);

  return (
    <section className="blog-index">
      <div className="container">
        <h2 ref={titleRef} className={`section-title reveal ${titleInView ? 'revealed' : ''}`}>
          All Posts
        </h2>
        <div className="blog-list">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
