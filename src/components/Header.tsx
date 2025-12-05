import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: isHomePage ? '#inicio' : '/#inicio', label: 'Início' },
    { href: isHomePage ? '#servicos' : '/#servicos', label: 'Serviços' },
    { href: isHomePage ? '#sobre' : '/#sobre', label: 'Sobre' },
    { href: isHomePage ? '#tecnologias' : '/#tecnologias', label: 'Tecnologias' },
    { href: isHomePage ? '#contato' : '/#contato', label: 'Contato' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="header-logo">
          <Logo />
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            </ul>
            <a href={isHomePage ? '#contato' : '/#contato'} className="nav-cta" onClick={handleLinkClick}>
              Fale Conosco
            </a>
          </nav>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;