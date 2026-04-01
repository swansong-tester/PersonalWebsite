import { FiLinkedin, FiYoutube, FiInstagram, FiMail } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-content" data-reveal>
        <div className="footer-brand">
          <p className="footer-logo">Mark<span>.</span></p>
          <p>Designing digital experiences with a human touch.</p>
        </div>
        
        <div className="social-hub">
          <h3>Let's Connect</h3>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="#" aria-label="YouTube"><FiYoutube /></a>
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="mailto:hello@example.com" aria-label="Email"><FiMail /></a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Mark. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
