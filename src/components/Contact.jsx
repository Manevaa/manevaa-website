import { useState } from 'react';
import { Mail, Phone, User, MessageSquare } from 'lucide-react';
import { useReveal } from '../hooks/useReveal.js';
import './Contact.css';

const initialForm = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — Manevaa isn't live. This simply confirms receipt
    // to the person. Wire this up to a real endpoint post-launch.
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid" ref={ref}>
        <div className="contact__intro reveal" data-reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="section-heading">Have a question?</h2>
          <p className="section-sub">
            Whether you're curious about Manevaa, want to become a home chef, or just want
            to say hello — we'd love to hear from you.
          </p>
        </div>

        <form className="contact__form reveal reveal-delay-1" data-reveal onSubmit={handleSubmit}>
          {submitted && (
            <div className="contact__success" role="status">
              Thank you! We'll get back to you soon.
            </div>
          )}

          <div className="contact__field">
            <label htmlFor="name"><User size={15} /> Name</label>
            <input
              id="name" name="name" type="text" required
              value={form.name} onChange={handleChange}
              placeholder="Your full name"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="email"><Mail size={15} /> Email</label>
            <input
              id="email" name="email" type="email" required
              value={form.email} onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="phone"><Phone size={15} /> Phone</label>
            <input
              id="phone" name="phone" type="tel"
              value={form.phone} onChange={handleChange}
              placeholder="+91 00000 00000"
            />
          </div>

          <div className="contact__field">
            <label htmlFor="message"><MessageSquare size={15} /> Message</label>
            <textarea
              id="message" name="message" required rows={4}
              value={form.message} onChange={handleChange}
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <button type="submit" className="btn btn-primary contact__submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
