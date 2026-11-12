import { profile } from '../data.js';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner reveal">
        <p className="eyebrow">{profile.role} · {profile.location}</p>
        <h1 className="headline-display">
          Frontend,<br /><span className="accent">done right.</span>
        </h1>
        <p className="body-lg hero__sub">{profile.tagline}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">View projects</a>
          <a className="btn btn--secondary" href="#contact">Get in touch ›</a>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="device">
          <div className="device__bar"><i /><i /><i /></div>
          <pre className="device__code">
{`@Component({
  selector: 'app-portfolio',
  standalone: true,
  template: \`<h1>{{ name }}</h1>\`,
})
export class Portfolio {
  name = signal('${profile.name}');
}`}
          </pre>
        </div>
      </div>
    </section>
  );
}
