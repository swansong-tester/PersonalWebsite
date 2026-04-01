import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">Mark<span>.</span></a>
        
        <nav className={`desktop-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>Portfolio</a>
          <a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
          <a href="#footer" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        </nav>

        <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
