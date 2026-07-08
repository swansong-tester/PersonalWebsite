import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { posts } from '../lib/posts';
import BlogCard from './BlogCard';
import './Blog.css';

// Home-page teaser: shows the most recent posts, links to the full index.
export default function Blog() {
  const [titleRef, titleInView] = useReveal();
  const latest = posts.slice(0, 2);

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 ref={titleRef} className={`section-title reveal ${titleInView ? 'revealed' : ''}`}>
          Latest Thoughts
        </h2>

        <div className="blog-list">
          {latest.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <div className="view-all">
          <Link to="/blog" className="btn btn-outline">View All Posts</Link>
        </div>
      </div>
    </section>
  );
}
