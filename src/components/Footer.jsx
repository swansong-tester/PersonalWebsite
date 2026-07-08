import { FiLinkedin, FiYoutube, FiInstagram, FiMail } from 'react-icons/fi';
import useReveal from '../hooks/useReveal';
import { site, socials } from '../data/site';
import './Footer.css';

const socialIcons = {
  linkedin: FiLinkedin,
  youtube: FiYoutube,
  instagram: FiInstagram,
};

export default function Footer() {
  const [contentRef, inView] = useReveal();

  return (
    <footer id="footer" className="footer">
      <div ref={contentRef} className={`container footer-content reveal ${inView ? 'revealed' : ''}`}>
        <div className="footer-brand">
          <p className="footer-logo">{site.name}<span>.</span></p>
          <p>{site.tagline}</p>
        </div>

        <div className="social-hub">
          <h3>Let's Connect</h3>
          <div className="social-links">
            {socials.map(({ key, label, url }) => {
              const Icon = socialIcons[key];
              if (!url || !Icon) return null;
              return (
                <a key={key} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon />
                </a>
              );
            })}
            <a href={`mailto:${site.email}`} aria-label="Email"><FiMail /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
