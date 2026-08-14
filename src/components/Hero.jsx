import { ArrowDown } from 'lucide-react';
import { images } from '../data/images.js';
import { useToast } from '../hooks/useToast.jsx';
import './Hero.css';

export default function Hero() {
  const showToast = useToast();

  const handleLaunchClick = (e) => {
    showToast('Manevaa launches on 21 August. Stay tuned!');
  };

  return (
    <section id="home" className="hero">
      <div className="hero__media">
        <img src={images.heroMother} alt="A home chef preparing a traditional meal in her kitchen" />
        <div className="hero__scrim" />
      </div>

      <div className="container hero__inner">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          Coming Soon &nbsp;•&nbsp; 21 August
        </div>

        <h1 className="hero__title">The Taste of Home, Delivered.</h1>

        <p className="hero__sub">
          Discover delicious homemade food prepared by mothers in the comfort of their homes,
          with care, cleanliness and the flavours you grew up loving.
        </p>

        <p className="hero__micro">Prepared by mothers. Made at home. Delivered with love.</p>

        <div className="hero__actions">
          <a href="#coming-soon" className="btn btn-primary" onClick={handleLaunchClick}>
            Launching 21 August
          </a>
          <a href="#how-it-works" className="btn btn-ghost-light">
            How Manevaa Works
          </a>
        </div>
      </div>

      <a href="#coming-soon" className="hero__scroll-cue" aria-label="Scroll down">
        <ArrowDown size={18} />
      </a>

      <img className="hero__thali" src={images.heroThali} alt="" aria-hidden="true" />
    </section>
  );
}
