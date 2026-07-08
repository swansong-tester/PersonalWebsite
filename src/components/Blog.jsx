import { ArrowRight } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import { posts, blogIndexUrl } from '../data/site';
import './Blog.css';

function BlogCard({ post, index }) {
  const [ref, inView] = useReveal();

  return (
    <article
      ref={ref}
      className={`blog-card reveal ${inView ? 'revealed' : ''}`}
      style={{ transitionDelay: inView ? `${index * 150}ms` : '0ms' }}
    >
      <div className="blog-image">
        <img src={post.image} alt={post.title} loading="lazy" />
      </div>
      <div className="blog-content">
        <div className="meta">
          <span>{post.date}</span> • <span>{post.readTime}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        {post.url && (
          <a href={post.url} className="read-more">
            Read Article <ArrowRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}

export default function Blog() {
  const [titleRef, titleInView] = useReveal();

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 ref={titleRef} className={`section-title reveal ${titleInView ? 'revealed' : ''}`}>
          Latest Thoughts
        </h2>

        <div className="blog-list">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        {blogIndexUrl && (
          <div className="view-all">
            <a href={blogIndexUrl} className="btn btn-outline">View All Posts</a>
          </div>
        )}
      </div>
    </section>
  );
}
