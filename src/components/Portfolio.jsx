import { useState } from 'react';
import { ExternalLink, PlaySquare } from 'lucide-react';
import useReveal from '../hooks/useReveal';
import { projects } from '../data/site';
import './Portfolio.css';

const categories = ['All', ...new Set(projects.map(p => p.category))];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [sectionRef, inView] = useReveal(0.08);

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
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              aria-pressed={filter === cat}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, i) => {
            const icon = project.category === 'Videos'
              ? <PlaySquare size={32} />
              : <ExternalLink size={32} />;
            return (
              <div
                key={`${filter}-${project.id}`}
                className={`project-card ${project.featured ? 'featured' : ''} ${inView ? 'animate' : ''}`}
                style={{ '--card-delay': `${240 + i * 120}ms` }}
              >
                <div className="card-image">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  {project.url ? (
                    <a
                      className="overlay"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                    >
                      {icon}
                    </a>
                  ) : (
                    <div className="overlay">{icon}</div>
                  )}
                </div>
                <div className="card-content">
                  <span className="category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <div className="tags">
                    {project.tech.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
