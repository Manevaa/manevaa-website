import { useCountdown } from '../hooks/useCountdown.js';
import { useReveal } from '../hooks/useReveal.js';
import SteamHeart from './SteamHeart.jsx';
import './ComingSoon.css';

const UNITS = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
];

export default function ComingSoon() {
  const time = useCountdown();
  const ref = useReveal();

  return (
    <section id="coming-soon" className="coming-soon">
      <div className="container" ref={ref}>
        <div className="coming-soon__top reveal" data-reveal>
          <SteamHeart className="coming-soon__glyph" color="var(--terracotta)" />
          <p className="coming-soon__kicker">We're not serving yet.</p>
          <h2 className="coming-soon__heading">
            {time.isLive ? "We're Live! Start Ordering" : 'But something delicious is coming.'}
          </h2>
          <p className="coming-soon__sub">
            Manevaa is getting ready to bring homemade goodness to your doorstep.
          </p>
        </div>

        {!time.isLive ? (
          <div className="coming-soon__countdown reveal reveal-delay-1" data-reveal>
            <p className="coming-soon__launching">Launching 21 August</p>
            <div className="countdown">
              {UNITS.map((unit) => (
                <div className="countdown__unit" key={unit.key}>
                  <div className="countdown__ring">
                    <span className="countdown__value">{String(time[unit.key]).padStart(2, '0')}</span>
                  </div>
                  <span className="countdown__label">{unit.label}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="coming-soon__live reveal reveal-delay-1" data-reveal>
            <a href="#food" className="btn btn-primary">Start Ordering</a>
          </div>
        )}
      </div>
    </section>
  );
}
