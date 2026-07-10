import { projects } from '../data/site';

export default function WorkList() {
  return (
    <section id="work" className="page">
      <h2>Work</h2>
      {projects.map(project => (
        <div key={project.title} className="work-item">
          <div className="title">
            {project.url ? (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.title} →
              </a>
            ) : (
              <span>{project.title}</span>
            )}
            {' '}
            <span className="meta">{project.category}</span>
          </div>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}
