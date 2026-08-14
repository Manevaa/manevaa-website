import { categories } from '../data/categories.js';
import { useToast } from '../hooks/useToast.jsx';
import { useReveal } from '../hooks/useReveal.js';
import './FoodCategories.css';

export default function FoodCategories() {
  const showToast = useToast();
  const ref = useReveal();

  return (
    <section className="section food-categories">
      <div className="container" ref={ref}>
        <div className="food-categories__head">
          <span className="eyebrow reveal" data-reveal>Discover</span>
          <h2 className="section-heading reveal reveal-delay-1" data-reveal>
            Find the flavour you're craving.
          </h2>
        </div>

        <div className="food-categories__grid">
          {categories.map((cat, i) => (
            <button
              key={cat.key}
              className={`food-categories__pill reveal reveal-delay-${Math.min((i % 4) + 1, 4)}`}
              data-reveal
              onClick={() => showToast('Manevaa is launching on 21 August. Stay tuned.')}
            >
              <span className="food-categories__pill-image">
                <img src={cat.image} alt="" loading="lazy" />
              </span>
              <span className="food-categories__pill-label">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
