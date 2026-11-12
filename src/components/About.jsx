import { profile, languages } from '../data.js';
import photo from '../assets/anamaria.webp';

const stats = [
  { value: '4+', label: 'Years in frontend' },
  { value: '3', label: 'Companies' },
  { value: 'MSc', label: 'Computer Science' },
];

export default function About() {
  return (
    <section id="about" className="band band--muted">
      <div className="container narrow center reveal">
        <p className="eyebrow">About</p>
        <img className="avatar" src={photo} alt={profile.name} width="160" height="160" loading="lazy" />
        <h2 className="headline-lg">Angular at heart.<br />Curious about everything else.</h2>
        <p className="body-md about__text">{profile.intro}</p>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="chips chips--center">
          {languages.map((l) => (
            <span key={l.name} className="chip">{l.name} · {l.level}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
