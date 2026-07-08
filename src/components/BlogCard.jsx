import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import './Blog.css';

export default function BlogCard({ post, index = 0 }) {
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
        <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="read-more">
          Read Article <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}
