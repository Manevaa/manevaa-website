import { Home, Sparkles, Leaf, HeartHandshake } from 'lucide-react';
import { images } from '../data/images.js';
import { useReveal } from '../hooks/useReveal.js';
import './Hygiene.css';

const CARDS = [
  {
    icon: Home,
    title: 'From Her Home',
    text: 'Prepared by mothers from the comfort of their homes.',
  },
  {
    icon: Sparkles,
    title: 'Hygiene First',
    text: 'Mindful and hygienic preparation of every meal.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    text: 'Freshly sourced ingredients, freshly prepared food.',
  },
  {
    icon: HeartHandshake,
    title: 'Personal Care',
    text: 'Every meal receives the personal attention that homemade food deserves.',
  },
];

export default function Hygiene() {
  const ref = useReveal();

  return (
    <section className="section hygiene" style={{ '--hygiene-bg': `url(${images.hygieneKitchen})` }}>
      <div className="container" ref={ref}>
        <div className="hygiene__head">
          <span className="eyebrow reveal" data-reveal>Safety &amp; Hygiene</span>
          <h2 className="section-heading reveal reveal-delay-1" data-reveal>
            Made at Home. Made with Care.
          </h2>
          <p className="section-sub reveal reveal-delay-2" data-reveal>
            Manevaa focuses on food prepared by mothers and home chefs in their own kitchens,
            with attention to cleanliness and hygienic preparation at every step.
          </p>
        </div>

        <div className="hygiene__grid">
          {CARDS.map((card, i) => (
            <div
              className={`hygiene__card reveal reveal-delay-${Math.min(i + 1, 4)}`}
              data-reveal
              key={card.title}
            >
              <card.icon size={22} strokeWidth={1.7} />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
