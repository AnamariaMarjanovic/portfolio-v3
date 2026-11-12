import { useState } from 'react';
import { profile } from '../data.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (form.message.trim().length < 10) next.message = 'A few more words, please.';
    setErrors(next);
    if (Object.keys(next).length) return;
    const subject = encodeURIComponent(`Hello from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="band band--ink">
      <div className="container narrow center reveal">
        <p className="eyebrow eyebrow--band">Contact</p>
        <h2 className="headline-lg">Let's build something.</h2>
        <p className="body-md contact__text">
          Open to frontend roles and interesting collaborations. Drop me a line.
        </p>

        <form className="form" onSubmit={submit} noValidate>
          <div className="form__row">
            <label className="field">
              <span>Name</span>
              <input name="name" value={form.name} onChange={update} aria-invalid={!!errors.name} />
              {errors.name && <em>{errors.name}</em>}
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" value={form.email} onChange={update} aria-invalid={!!errors.email} />
              {errors.email && <em>{errors.email}</em>}
            </label>
          </div>
          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="4" value={form.message} onChange={update} aria-invalid={!!errors.message} />
            {errors.message && <em>{errors.message}</em>}
          </label>
          <button className="btn btn--primary" type="submit">Send message</button>
        </form>

        <div className="contact__links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ›</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ›</a>
          <a href={profile.website} target="_blank" rel="noreferrer">anamaria.dev ›</a>
        </div>
      </div>
    </section>
  );
}
