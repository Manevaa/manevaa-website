import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import './Footer.css';

const LINK_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Our Story', href: '#our-story' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Food', href: '#food' },
    ],
  },
  {
    title: 'Manevaa',
    links: [
      { label: 'Home Chefs', href: '#home-chefs' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img src={logo} alt="Manevaa" className="footer__logo" />
          <p className="footer__tagline">Homemade food. Made with heart.</p>

          <div className="footer__social">
            {/* Placeholder links — swap in real Manevaa social handles at launch */}
            <a href="#" aria-label="Manevaa on Instagram" className="footer__social-link"><Instagram size={17} /></a>
            <a href="#" aria-label="Manevaa on Facebook" className="footer__social-link"><Facebook size={17} /></a>
            <a href="#" aria-label="Manevaa on WhatsApp" className="footer__social-link"><MessageCircle size={17} /></a>
          </div>
        </div>

        <div className="footer__links">
          {LINK_COLUMNS.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              {col.links.map((link) => (
                <a href={link.href} key={link.label}>{link.label}</a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__divider" />

      <div className="container footer__bottom">
        <p>© 2026 Manevaa. All rights reserved.</p>
        <p className="footer__final-line">Where every meal carries a little bit of home.</p>
      </div>
    </footer>
  );
}
