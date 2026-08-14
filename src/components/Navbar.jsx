import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { useToast } from '../hooks/useToast.jsx';
import { useIsLaunched } from '../hooks/useCountdown.js';
import './Navbar.css';

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#our-story', label: 'Our Story' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#food', label: 'Food' },
  { href: '#home-chefs', label: 'Home Chefs' },
  { href: '#why-manevaa', label: 'Why Manevaa' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const showToast = useToast();
  const isLaunched = useIsLaunched();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleOrder = () => {
    if (!isLaunched) {
      showToast('Manevaa launches on 21 August. Stay tuned!');
    }
    setOpen(false);
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--solid' : ''}${open ? ' navbar--menu-open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="Manevaa" className="navbar__logo" />
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href={isLaunched ? '#food' : '#coming-soon'} className="btn btn-primary navbar__cta" onClick={handleOrder}>
            {isLaunched ? 'Order Now' : 'Order Now'}
          </a>
          <button
            className="navbar__hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile${open ? ' navbar__mobile--open' : ''}`}>
        <nav aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__mobile-link" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <a href={isLaunched ? '#food' : '#coming-soon'} className="btn btn-primary navbar__mobile-cta" onClick={handleOrder}>
          Order Now
        </a>
      </div>
    </header>
  );
}
