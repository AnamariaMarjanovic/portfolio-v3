import { useState } from 'react';
import { projects } from '../data.js';

/* ---------- Visuals, one per project ---------- */

function FederationDiagram() {
  return (
    <div className="mf" aria-hidden="true">
      <div className="mf__shell">
        <span className="mf__label">Shell · Angular</span>
        <div className="mf__remotes">
          <div className="mf__remote mf__remote--ng">
            <b>Remote A</b><span>Angular</span>
          </div>
          <div className="mf__remote mf__remote--react">
            <b>Remote B</b><span>React</span>
          </div>
          <div className="mf__remote mf__remote--lib">
            <b>Shared libs</b><span>Nx workspace</span>
          </div>
        </div>
      </div>
      <div className="mf__caption">Native Federation · loaded at runtime</div>
    </div>
  );
}

function ComponentPreview() {
  const [on, setOn] = useState(true);
  const [tab, setTab] = useState(0);
  return (
    <div className="preview">
      <div className="preview__row">
        <button className="btn btn--primary btn--sm" type="button">Primary</button>
        <button className="btn btn--secondary btn--sm" type="button">Secondary</button>
      </div>
      <div className="preview__row">
        <div className="segmented" role="tablist">
          {['Day', 'Week', 'Month'].map((t, i) => (
            <button key={t} type="button" role="tab" aria-selected={tab === i}
              className={tab === i ? 'is-active' : ''} onClick={() => setTab(i)}>{t}</button>
          ))}
        </div>
        <button type="button" className={`switch ${on ? 'is-on' : ''}`}
          role="switch" aria-checked={on} aria-label="Toggle" onClick={() => setOn(!on)}>
          <span />
        </button>
      </div>
      <div className="preview__input">
        <span className="caption">mae-input</span>
        <div className="fake-input">anamaria@maestral<span className="caret" /></div>
      </div>
      <code className="preview__code">npm i @maestral/ui</code>
    </div>
  );
}

const frames = [
  ['X'], ['9', '/'], ['7', '2'], ['X'], ['8', '1'],
];
const totals = [20, 37, 46, 65, 74];

function Scoreboard() {
  return (
    <div className="score" aria-label="Example bowling scoreboard">
      <div className="score__head">
        <span>Player 1</span><span className="score__total">74</span>
      </div>
      <div className="score__frames">
        {frames.map((f, i) => (
          <div key={i} className="score__frame">
            <span className="score__no">{i + 1}</span>
            <div className="score__rolls">
              {f.map((r, j) => (
                <span key={j} className={r === 'X' || r === '/' ? 'is-hit' : ''}>{r}</span>
              ))}
            </div>
            <span className="score__sum">{totals[i]}</span>
          </div>
        ))}
      </div>
      <div className="score__state">
        <code>{'{ frame: 6, roll: 1, pins: 10 }'}</code>
        <span className="caption">NgRx store</span>
      </div>
    </div>
  );
}

const visuals = {
  'Nexus Dashboard': FederationDiagram,
  Maestral: ComponentPreview,
  'Bowling Scoreboard': Scoreboard,
};

/* ---------- Layouts ---------- */

function ProjectText({ p, dark }) {
  return (
    <div className="project__text">
      <p className="project__kicker">{p.kicker}</p>
      <h3 className="headline-md">{p.name}</h3>
      <p className={`body-md project__desc ${dark ? 'project__desc--dark' : ''}`}>{p.description}</p>
      <div className="chips">
        {p.tags.map((t) => <span key={t} className={`chip ${dark ? 'chip--dark' : ''}`}>{t}</span>)}
      </div>
      <a className={`btn-link ${dark ? 'btn-link--dark' : ''}`} href={p.link} target="_blank" rel="noreferrer">
        View on GitHub ›
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="band band--muted">
      <div className="container">
        <div className="section-head center reveal">
          <p className="eyebrow">Projects</p>
          <h2 className="headline-md">Things I've built on the side.</h2>
        </div>
        <div className="projects">
          {projects.map((p) => {
            const Visual = visuals[p.name];
            const dark = p.layout === 'feature';
            return (
              <article key={p.name} className={`project project--${p.layout} reveal`}>
                <ProjectText p={p} dark={dark} />
                {Visual && <div className="project__visual"><Visual /></div>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
