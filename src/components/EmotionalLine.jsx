import { useReveal } from '../hooks/useReveal.js';

export default function EmotionalLine({ text }) {
  const ref = useReveal();
  return (
    <div className="container">
      <p ref={ref} data-reveal className="emotional-line reveal">
        {text}
      </p>
    </div>
  );
}
