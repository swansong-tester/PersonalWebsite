import { ArrowRight } from 'lucide-react';
import { hero } from '../data/site';
import './Hero.css';

// Words wrapped in {braces} in the data file render as accent <span>s.
function renderHeadline(text) {
  return text.split(/(\{[^}]+\})/).map((part, i) =>
    part.startsWith('{') ? <span key={i}>{part.slice(1, -1)}</span> : part
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <span className="greeting">{hero.greeting}</span>
          <h1>{renderHeadline(hero.headline)}</h1>
          <p>{hero.subhead}</p>

          <div className="stat-chips">
            {hero.stats.map(stat => <span key={stat}>{stat}</span>)}
          </div>

          <div className="cta-group">
            <a href="#portfolio" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#blog" className="btn btn-outline">Read Blog</a>
          </div>
        </div>

        <div className="hero-image animate-float">
          <div className="image-wrapper">
             <img src={hero.portrait.src} alt={hero.portrait.alt} fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}
