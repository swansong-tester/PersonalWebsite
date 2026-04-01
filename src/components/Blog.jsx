import { ArrowRight } from 'lucide-react';
import './Blog.css';

const posts = [
  {
    id: 1,
    title: 'The Future of Web Design in 2026',
    date: 'Mar 15, 2026',
    readTime: '5 min read',
    excerpt: 'Exploring how tactile maximalism and organic geometries are taking over the web landscape.',
    image: '/blog_thumbnail_1774731483174.png'
  },
  {
    id: 2,
    title: 'Why React Native Still Rocks',
    date: 'Feb 28, 2026',
    readTime: '7 min read',
    excerpt: 'A deep dive into cross-platform development patterns that boost productivity.',
    image: '/portfolio_project2_1774731461653.png'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title" data-reveal>Latest Thoughts</h2>

        <div className="blog-list">
          {posts.map((post, i) => (
            <article key={post.id} className="blog-card" data-reveal data-delay={i * 150}>
              <div className="blog-image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="blog-content">
                <div className="meta">
                  <span>{post.date}</span> • <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#" className="read-more">
                  Read Article <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="view-all">
          <button className="btn btn-outline">View All Posts</button>
        </div>
      </div>
    </section>
  );
}
