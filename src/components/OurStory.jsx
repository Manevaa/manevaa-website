import { Home, Sparkles, Heart, ChefHat } from 'lucide-react';
import { images } from '../data/images.js';
import { useReveal } from '../hooks/useReveal.js';
import './OurStory.css';

const HIGHLIGHTS = [
  { icon: Home, label: 'Made at Home' },
  { icon: Sparkles, label: 'Clean & Hygienic' },
  { icon: Heart, label: 'Made With Care' },
  { icon: ChefHat, label: 'Authentic Taste' },
];

export default function OurStory() {
  const ref = useReveal();

  return (
    <section id="our-story" className="section our-story">
      <div className="container our-story__grid" ref={ref}>
        <div className="our-story__media reveal" data-reveal>
          <img src={images.storyMother} alt="A home chef preparing a meal in her home kitchen" />
        </div>

        <div className="our-story__content">
          <span className="eyebrow reveal" data-reveal>Our Story</span>
          <h2 className="section-heading reveal reveal-delay-1" data-reveal>
            Not a restaurant. Not just a delivery app. It's homemade.
          </h2>
          <p className="section-sub reveal reveal-delay-2" data-reveal>
            Manevaa brings together customers who crave authentic homemade food and mothers
            who love cooking for others. We make it easier to discover, order and enjoy food
            prepared with the warmth and care of home.
          </p>
          <p className="our-story__tagline reveal reveal-delay-2" data-reveal>
            From her kitchen to your doorstep.
          </p>

          <div className="our-story__highlights">
            {HIGHLIGHTS.map((item, i) => (
              <div
                className={`our-story__pill reveal reveal-delay-${Math.min(i + 1, 4)}`}
                data-reveal
                key={item.label}
              >
                <item.icon size={18} strokeWidth={1.8} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
