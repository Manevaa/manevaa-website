import { Search, ClipboardList, CookingPot, Bike } from 'lucide-react';
import { useReveal } from '../hooks/useReveal.js';
import './HowItWorks.css';

const STEPS = [
  { n: '01', icon: Search, title: 'Discover', text: 'Explore homemade food prepared by mothers and home chefs around you.' },
  { n: '02', icon: ClipboardList, title: 'Choose', text: 'Select your favourite breakfast, lunch, snack or dinner.' },
  { n: '03', icon: CookingPot, title: 'Prepare', text: 'Your chosen home chef prepares your food fresh.' },
  { n: '04', icon: Bike, title: 'Deliver', text: 'Manevaa helps bring your homemade meal to your doorstep.' },
];

export default function HowItWorks() {
  const ref = useReveal();

  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="container" ref={ref}>
        <div className="how-it-works__head">
          <span className="eyebrow reveal" data-reveal>How Manevaa Works</span>
          <h2 className="section-heading reveal reveal-delay-1" data-reveal>
            From a home kitchen to your table, in four simple steps.
          </h2>
        </div>

        <div className="how-it-works__row">
          {STEPS.map((step, i) => (
            <div
              className={`how-it-works__step reveal reveal-delay-${Math.min(i + 1, 4)}`}
              data-reveal
              key={step.n}
            >
              <span className="how-it-works__n">{step.n}</span>
              <div className="how-it-works__icon"><step.icon size={22} strokeWidth={1.7} /></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {i < STEPS.length - 1 && <span className="how-it-works__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
