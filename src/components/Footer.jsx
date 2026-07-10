import { site, socials } from '../data/site';

export default function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="page">
        <h2>Contact</h2>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>Email</a>
          {socials.map(({ label, url }) =>
            url ? (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            ) : null
          )}
        </div>
        <p className="copyright">© {new Date().getFullYear()} {site.name}</p>
      </div>
    </footer>
  );
}
