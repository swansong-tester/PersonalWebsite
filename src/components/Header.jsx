import { Link } from 'react-router-dom';
import { site, nav } from '../data/site';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="page" aria-label="Primary">
        <Link to="/" className="site-name">{site.name}</Link>
        <div className="site-nav-links">
          {nav.map(({ label, to }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
