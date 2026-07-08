import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { marked } from 'marked';
import { getPost } from '../lib/posts';
import { site } from '../data/site';
import './BlogPost.css';

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  const html = useMemo(
    () => (post ? marked.parse(post.body) : ''),
    [post]
  );

  useEffect(() => {
    document.title = post ? `${post.title} — ${site.name}` : `Post not found — ${site.name}`;
  }, [post]);

  if (!post) {
    return (
      <section className="blog-post">
        <div className="container post-container">
          <h1>Post not found</h1>
          <p className="post-missing">The article you're looking for doesn't exist (or was moved).</p>
          <Link to="/blog" className="btn btn-outline">
            <ArrowLeft size={18} /> All Posts
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="blog-post">
      <div className="container post-container">
        <Link to="/blog" className="back-link">
          <ArrowLeft size={16} /> All Posts
        </Link>

        <header className="post-header">
          <div className="meta">
            <span>{post.date}</span> • <span>{post.readTime}</span>
          </div>
          <h1>{post.title}</h1>
        </header>

        {post.image && (
          <div className="post-hero-image">
            <img src={post.image} alt={post.title} fetchPriority="high" />
          </div>
        )}

        <div className="post-body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </section>
  );
}
