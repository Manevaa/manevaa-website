import { images } from '../data/images.js';
import { useReveal } from '../hooks/useReveal.js';
import './LocalConcept.css';

export default function LocalConcept() {
  const ref = useReveal();

  return (
    <section className="section local-concept">
      <div className="container local-concept__grid" ref={ref}>
        <div className="local-concept__content">
          <span className="eyebrow reveal" data-reveal>Nearby, Not Far</span>
          <h2 className="section-heading reveal reveal-delay-1" data-reveal>
            Good food doesn't always have to travel far.
          </h2>
          <p className="section-sub reveal reveal-delay-2" data-reveal>
            By connecting customers with home chefs around them, Manevaa aims to bring
            fresh homemade meals closer to your doorstep — starting within your own
            neighbourhood.
          </p>
          <p className="local-concept__note reveal reveal-delay-3" data-reveal>
            Exact service areas will be confirmed as Manevaa launches in each city.
          </p>
        </div>

        <div className="local-concept__visual reveal reveal-delay-2" data-reveal>
          <img src={images.localMap} alt="Neighbourhood where Manevaa home chefs cook and deliver" />
          <div className="local-concept__radius">
            <span className="local-concept__radius-value">~5 KM</span>
            <span className="local-concept__radius-label">initial reach</span>
          </div>
        </div>
      </div>
    </section>
  );
}
