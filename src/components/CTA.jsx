import SteamHeart from './SteamHeart.jsx';
import { useReveal } from '../hooks/useReveal.js';
import './CTA.css';

export default function CTA() {
  const ref = useReveal();

  return (
    <section className="section cta">
      <div className="container cta__box" ref={ref}>
        <SteamHeart className="cta__glyph reveal" data-reveal color="var(--terracotta-soft)" />
        <h2 className="cta__heading reveal reveal-delay-1" data-reveal>Ready for a taste of home?</h2>
        <p className="cta__sub reveal reveal-delay-2" data-reveal>
          Manevaa launches on 21 August. Your next favourite meal could come from a
          mother's kitchen just around the corner.
        </p>
        <div className="cta__actions reveal reveal-delay-3" data-reveal>
          <a href="#coming-soon" className="btn btn-terracotta">Stay Tuned</a>
          <a href="#food" className="btn btn-outline cta__outline">Explore Manevaa</a>
        </div>
      </div>
    </section>
  );
}
