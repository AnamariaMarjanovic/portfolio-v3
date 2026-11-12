import { experience } from '../data.js';

export default function Experience() {
  return (
    <section id="experience" className="band">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Experience</p>
          <h2 className="headline-md">Where I've worked.</h2>
        </div>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline__item reveal">
              <div className="timeline__meta">
                <span className="timeline__period">{job.period}</span>
                <span className="caption">{job.place}</span>
              </div>
              <div className="card timeline__card">
                <h3 className="card__title">{job.company}</h3>
                <p className="card__subtitle">{job.title}</p>
                <ul className="card__list">
                  {job.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
