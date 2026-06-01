import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavTheme } from '../hooks/useNavTheme';  // ADD THIS
import logoJCream from '../assets/logo-j-cream.png';
import logoJBlue from '../assets/logo-j-blue.png';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navTheme = useNavTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`navbar navbar--${navTheme} ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <img
            src={navTheme === 'cream' ? logoJBlue : logoJCream}
            alt="Jaime's Portie"
            className="navbar__logo-img navbar__logo-img--small"
          />
        </Link>

        <nav className="navbar__links">
          <Link to="/" className={`navbar__link ${isActive('/') ? 'navbar__link--active' : ''}`}>
            Work
          </Link>
          <Link to="/about" className={`navbar__link ${isActive('/about') ? 'navbar__link--active' : ''}`}>
            About
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__link navbar__link--resume"
          >
            Résumé ↗
          </a>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <Link to="/" className="navbar__mobile-link">Work</Link>
            <Link to="/about" className="navbar__mobile-link">About</Link>
            <a href="/resume.pdf" target="_blank" className="navbar__mobile-link">Résumé ↗</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
