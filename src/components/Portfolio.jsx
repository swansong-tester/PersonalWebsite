import { useState, useRef, useEffect } from 'react';
import { ExternalLink, PlaySquare } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Focus Timer App',
    category: 'Apps',
    image: '/portfolio_project1_1774731448878.png',
    tech: ['React Native', 'TypeScript'],
    featured: true,
  },
  {
    id: 2,
    title: 'Abstract Concept Art',
    category: 'Images',
    image: '/portfolio_project2_1774731461653.png',
    tech: ['Blender', 'Figma'],
  },
  {
    id: 3,
    title: 'Cinematic Reel 2025',
    category: 'Videos',
    image: '/portfolio_project1_1774731448878.png',
    tech: ['Premiere Pro', 'After Effects'],
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section ref={sectionRef} id="portfolio" className="portfolio">
      <div className="container">
        <h2 className={`section-title reveal ${inView ? 'revealed' : ''}`}>Selected Work</h2>

        <div
          className={`filter-controls reveal ${inView ? 'revealed' : ''}`}
          style={{ transitionDelay: inView ? '120ms' : '0ms' }}
        >
          {['All', 'Apps', 'Images', 'Videos'].map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, i) => (
            <div
              key={`${filter}-${project.id}`}
              className={`project-card ${project.featured ? 'featured' : ''} ${inView ? 'animate' : ''}`}
              style={{ '--card-delay': `${240 + i * 120}ms` }}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="overlay">
                  {project.category === 'Videos' ? <PlaySquare size={32} /> : <ExternalLink size={32} />}
                </div>
              </div>
              <div className="card-content">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
                <div className="tags">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
