import { ArrowRight } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <span className="greeting">Hi, I'm Mark 👋</span>
          <h1>Designing digital <span>experiences</span> with a human touch.</h1>
          <p>I build intuitive apps, write about modern web development, and capture the world through a lens.</p>

          <div className="stat-chips">
            <span>5+ yrs experience</span>
            <span>30+ projects shipped</span>
            <span>React · Figma · iOS</span>
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
             <img src="/profile_picture_1774731436010.png" alt="Mark Portrait" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}
