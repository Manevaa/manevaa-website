import { images } from '../data/images.js';
import { useReveal } from '../hooks/useReveal.js';
import './EmotionalSection.css';

export default function EmotionalSection() {
  const ref = useReveal();

  return (
    <section className="emotional-section">
      <div className="emotional-section__media">
        <img src={images.emotionalMother} alt="A mother preparing food with care in her kitchen" />
        <div className="emotional-section__scrim" />
      </div>

      <div className="container emotional-section__inner" ref={ref}>
        <h2 className="emotional-section__quote reveal" data-reveal>Some food takes you home.</h2>
        <p className="emotional-section__sub reveal reveal-delay-1" data-reveal>
          A familiar aroma. A comforting taste. A recipe passed down through generations.
          Manevaa brings those little pieces of home closer to you.
        </p>
        <p className="emotional-section__quote-2 reveal reveal-delay-2" data-reveal>
          "A mother's food has a taste that no restaurant can recreate."
        </p>
      </div>
    </section>
  );
}
