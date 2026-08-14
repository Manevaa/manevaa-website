import { Quote } from 'lucide-react';
import { chefs } from '../data/chefs.js';
import { useToast } from '../hooks/useToast.jsx';
import { useReveal } from '../hooks/useReveal.js';
import './HomeChefs.css';

export default function HomeChefs() {
  const showToast = useToast();
  const ref = useReveal();

  return (
    <section id="home-chefs" className="section home-chefs">
      <div className="container" ref={ref}>
        <div className="home-chefs__head">
          <span className="eyebrow reveal" data-reveal>Home Chefs</span>
          <h2 className="section-heading reveal reveal-delay-1" data-reveal>
            Meet the Heart Behind Your Meal.
          </h2>
          <p className="section-sub reveal reveal-delay-2" data-reveal>
            Our mothers don't just cook food. They share a piece of their home with you.
          </p>
          <span className="home-chefs__demo-tag reveal reveal-delay-2" data-reveal>
            Demo profiles — real Manevaa home chefs joining soon
          </span>
        </div>

        <div className="home-chefs__grid">
          {chefs.map((chef, i) => (
            <div
              className={`home-chefs__card reveal reveal-delay-${Math.min(i + 1, 4)}`}
              data-reveal
              key={chef.name}
            >
              <div className="home-chefs__image">
                <img src={chef.image} alt={`${chef.name}, Manevaa home chef`} loading="lazy" />
              </div>
              <div className="home-chefs__body">
                <h3>{chef.name}</h3>
                <span className="home-chefs__speciality">{chef.speciality}</span>
                <span className="home-chefs__dish">{chef.dish}</span>
                <p><Quote size={13} className="home-chefs__quote-icon" />{chef.story}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="home-chefs__cta reveal" data-reveal>
          <h3>Want to become a Manevaa Home Chef?</h3>
          <button
            className="btn btn-outline"
            onClick={() => showToast('Home Chef registration is coming soon.')}
          >
            Join Manevaa
          </button>
        </div>
      </div>
    </section>
  );
}
