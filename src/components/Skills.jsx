import { skills, education, certifications } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="band">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Skills & Education</p>
          <h2 className="headline-md">The toolkit.</h2>
        </div>
        <div className="chips chips--center skills reveal">
          {skills.map((s) => <span key={s} className="chip chip--lg">{s}</span>)}
        </div>
        <div className="grid-2">
          <div className="card reveal">
            <h3 className="card__title">Education</h3>
            <ul className="plain-list">
              {education.map((e) => (
                <li key={e.degree}>
                  <div className="row">
                    <strong>{e.degree}</strong>
                    <span className="caption">{e.year}</span>
                  </div>
                  <span className="caption">{e.school}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card reveal">
            <h3 className="card__title">Certifications <span className="caption">2026</span></h3>
            <ul className="plain-list">
              {certifications.map((c) => <li key={c} className="body-sm">{c}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
