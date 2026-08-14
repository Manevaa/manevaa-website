import { ArrowUpRight } from 'lucide-react';
import { foodTimes } from '../data/foodTimes.js';
import { useToast } from '../hooks/useToast.jsx';
import { useReveal } from '../hooks/useReveal.js';
import './FoodTimes.css';

export default function FoodTimes() {
  const showToast = useToast();
  const ref = useReveal();

  return (
    <section id="food" className="section food-times">
      <div className="container" ref={ref}>
        <div className="food-times__head">
          <span className="eyebrow reveal" data-reveal>Food, All Day</span>
          <h2 className="section-heading reveal reveal-delay-1" data-reveal>
            Whatever Time It Is, There's Something Homemade.
          </h2>
        </div>

        <div className="food-times__grid">
          {foodTimes.map((item, i) => (
            <div
              className={`food-times__card reveal reveal-delay-${Math.min(i + 1, 4)}`}
              data-reveal
              key={item.key}
            >
              <div className="food-times__image">
                <img src={item.image} alt={`${item.label} homemade food`} loading="lazy" />
              </div>
              <div className="food-times__body">
                <span className="food-times__time">{item.time}</span>
                <h3>{item.label}</h3>
                <p>{item.line}</p>
                <button
                  className="food-times__explore"
                  onClick={() => showToast('Coming soon on 21 August.')}
                >
                  Explore <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
