import { Heart, ChefHat, Sparkles, Leaf, Home, Truck } from 'lucide-react';
import { useReveal } from '../hooks/useReveal.js';
import './WhyManevaa.css';

const REASONS = [
  { icon: Heart, title: 'Homemade', text: 'Food prepared in real home kitchens.' },
  { icon: ChefHat, title: 'Mother Chefs', text: 'Discover food prepared by talented mothers and home chefs.' },
  { icon: Sparkles, title: 'Hygienic', text: 'Mindful and clean preparation.' },
  { icon: Leaf, title: 'Fresh', text: 'Food prepared fresh with care.' },
  { icon: Home, title: 'Authentic', text: 'Traditional recipes and genuine homemade flavours.' },
  { icon: Truck, title: 'Convenient', text: 'Homemade food delivered to your doorstep.' },
];

export default function WhyManevaa() {
  const ref = useReveal();

  return (
    <section id="why-manevaa" className="section why-manevaa">
      <div className="container" ref={ref}>
        <div className="why-manevaa__head">
          <span className="eyebrow reveal" data-reveal>Why Manevaa</span>
          <h2 className="section-heading reveal reveal-delay-1" data-reveal>Why Manevaa?</h2>
        </div>

        <div className="why-manevaa__grid">
          {REASONS.map((reason, i) => (
            <div
              className={`why-manevaa__card reveal reveal-delay-${Math.min((i % 4) + 1, 4)}`}
              data-reveal
              key={reason.title}
            >
              <div className="why-manevaa__icon"><reason.icon size={20} strokeWidth={1.7} /></div>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
