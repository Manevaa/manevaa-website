import { ChevronRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal.js';
import './CustomerJourney.css';

const STEPS = ['Choose', 'Order', 'Freshly Prepared', 'Delivered', 'Enjoy'];

export default function CustomerJourney() {
  const ref = useReveal();

  return (
    <section className="section customer-journey">
      <div className="container" ref={ref}>
        <div className="customer-journey__head">
          <span className="eyebrow reveal" data-reveal>The Experience</span>
          <h2 className="section-heading reveal reveal-delay-1" data-reveal>More Than Just a Meal.</h2>
        </div>

        <div className="customer-journey__row reveal reveal-delay-2" data-reveal>
          {STEPS.map((step, i) => (
            <span className="customer-journey__step" key={step}>
              {step}
              {i < STEPS.length - 1 && <ChevronRight size={16} className="customer-journey__chev" />}
            </span>
          ))}
        </div>

        <p className="customer-journey__micro reveal reveal-delay-3" data-reveal>
          You order food. We deliver a feeling.
        </p>
      </div>
    </section>
  );
}
