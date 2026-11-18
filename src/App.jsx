import { useEffect, useState } from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import AttentionHero from './AttentionHero.jsx';
import { experience, projects, alsoBuilt, skills } from './content.js';

const SECTIONS = [
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

function Pipeline({ steps, loop }) {
  return (
    <div className={`pipeline${loop ? ' pipeline--loop' : ''}`} aria-label={`Pipeline: ${steps.join(', then ')}`}>
      <ol className="pipeline__steps">
        {steps.map((s, i) => (
          <li key={s} className={`pipeline__step${i === steps.length - 1 ? ' pipeline__step--out' : ''}`}>
            {s}
          </li>
        ))}
      </ol>
      {loop && (
        <p className="pipeline__loop">
          <svg width="22" height="14" viewBox="0 0 22 14" aria-hidden="true">
            <path d="M20 2v4a4 4 0 0 1-4 4H3m0 0 3.5-3.5M3 10l3.5 3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {steps[loop.from]} → {steps[loop.to]}: {loop.label} until tests pass
        </p>
      )}
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (atBottom) return setActiveSection('contact');
      const y = window.scrollY + 140;
      let current = null;
      for (const [id] of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className="nav">
        <div className="wrap nav__inner">
          <a href="#top" className="nav__name">Jeffrin Nadar</a>
          <nav aria-label="Sections">
            <ul className="nav__links">
              {SECTIONS.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className={`nav__link${activeSection === id ? ' nav__link--active' : ''}`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero wrap">
          <AttentionHero />
          <div className="hero__intro">
            <p>
              I'm an AI and software engineer. Most recently I built a voice-to-clinical-notes prototype at Provation;
              on my own time I build personal projects and explore new technologies.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="mailto:anthony.jeffrin.b@gmail.com">Email me</a>
              <a className="btn" href="#projects">See projects</a>
            </div>
          </div>
        </section>

        <section id="experience" className="section wrap">
          <h2 className="section__title">Experience</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.org} className="job">
                <p className="job__dates">{job.dates}</p>
                <div>
                  <h3 className="job__role">{job.role}</h3>
                  <p className="job__org">{job.org}, {job.where}</p>
                  <ul className="job__points">
                    {job.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="section wrap">
          <h2 className="section__title">Projects</h2>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.name} className="project">
                <div className="project__text">
                  <h3 className="project__name">{p.name}</h3>
                  <p className="project__summary">{p.summary}</p>
                  <p className="project__stack">{p.stack}</p>
                  {p.link && (
                    <a className="project__link" href={p.link.href} target="_blank" rel="noopener noreferrer">
                      {p.link.label === 'Code' && <Github size={16} aria-hidden="true" />}
                      {p.link.label}
                    </a>
                  )}
                </div>
                <Pipeline steps={p.pipeline} loop={p.loop} />
              </article>
            ))}
          </div>

          <h3 className="also__title">Also built</h3>
          <ul className="also">
            {alsoBuilt.map((p) => (
              <li key={p.name}>
                <strong>{p.name}</strong> ({p.stack}). {p.summary}
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" className="section wrap">
          <h2 className="section__title">Skills</h2>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skills__row">
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="section section--contact wrap">
          <h2 className="section__title">Contact</h2>
          <p className="contact__lead">I'm looking for AI and ML engineering roles. The fastest way to reach me is email.</p>
          <a className="contact__email" href="mailto:anthony.jeffrin.b@gmail.com">anthony.jeffrin.b@gmail.com</a>
          <ul className="contact__links">
            <li>
              <a href="https://linkedin.com/in/jeffrinnadar" target="_blank" rel="noopener noreferrer">
                <Linkedin size={18} aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/JeffrinNadar" target="_blank" rel="noopener noreferrer">
                <Github size={18} aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a href="mailto:anthony.jeffrin.b@gmail.com">
                <Mail size={18} aria-hidden="true" /> Email
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer wrap">
        <p>© 2026 Jeffrin Nadar</p>
      </footer>
    </>
  );
}
