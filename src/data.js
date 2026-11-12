export const profile = {
  name: 'Anamaria Oršulić',
  role: 'Frontend Developer',
  location: 'Brescia, Italy',
  tagline: 'Building reliable interfaces with Angular, TypeScript and React.',
  intro:
    'Frontend developer with around four years of experience shipping Angular applications — from healthcare tools for pharmacy professionals to EU public-sector apps and cross-platform mobile apps on the app stores.',
  github: 'https://github.com/AnamariaMarjanovic',
  website: 'https://anamaria.dev',
  email: 'anamaria.orsulic@outlook.com',
  linkedin: 'https://www.linkedin.com/in/anamaria-orsulic/',
};

export const experience = [
  {
    company: 'CompuGroup Medical',
    place: 'Brescia',
    period: 'Jul 2025 — Jun 2026',
    title: 'Frontend Developer',
    points: [
      'Developed features for an Angular application used by pharmacy professionals.',
      'Worked in a hybrid team on a large, long-lived healthcare codebase.',
    ],
  },
  {
    company: 'Infordata Sistemi',
    place: 'Trieste',
    period: 'Oct 2022 — Jul 2025',
    title: 'Frontend Developer',
    points: [
      'Led a PHP-to-Angular migration of a self-service kiosk application.',
      'Built Angular apps for EU public-sector clients.',
      'Shipped Ionic / Capacitor cross-platform apps to the App Store and Google Play.',
    ],
  },
  {
    company: 'GDI Group',
    place: 'Rijeka',
    period: '2022',
    title: 'Intern',
    points: ['First professional steps in web development.'],
  },
];

export const projects = [
  {
    name: 'Nexus Dashboard',
    layout: 'feature', // full-width, dark, architecture diagram
    kicker: 'Micro-frontends',
    description:
      'Angular and React micro-frontends composed into one shell with Native Federation, organised as an Nx monorepo.',
    tags: ['Angular', 'React', 'Native Federation', 'Nx'],
    link: 'https://github.com/AnamariaMarjanovic/nexus-dashboard',
  },
  {
    name: 'Maestral',
    layout: 'split', // text left, live component preview right
    kicker: 'Component library',
    description:
      'An Angular component library built from scratch, designed to be published on npm and reused across projects.',
    tags: ['Angular', 'TypeScript', 'npm'],
    link: 'https://github.com/AnamariaMarjanovic/maestral',
  },
  {
    name: 'Bowling Scoreboard',
    layout: 'split-reverse', // scoreboard visual left, text right
    kicker: 'State management',
    description:
      'A bowling score calculator handling strikes, spares and the tenth frame, with predictable state via NgRx.',
    tags: ['Angular 19', 'NgRx', 'RxJS'],
    link: 'https://bowling-scorecard.vercel.app/',
  },
];

export const skills = [
  'Angular', 'TypeScript', 'RxJS', 'NgRx', 'React', 'Next.js', 'Ionic', 'Capacitor',
  'Nx', 'Native Federation', 'Tailwind CSS', 'REST APIs', 'HTML', 'CSS / SCSS', 'Git',
];

export const education = [
  { degree: 'Master of Informatics', school: 'University of Rijeka — Faculty of Informatics and Digital Technologies', year: '2022' },
  { degree: 'Bachelor of Informatics', school: 'University of Rijeka', year: '2020' },
];

export const certifications = [
  'Angular State Management with NgRx — LinkedIn Learning',
  'Advanced TypeScript Concepts — LinkedIn Learning',
  'Learning REST APIs — LinkedIn Learning',
  'Angular AI In Depth with Claude Code — Udemy',
];

export const languages = [
  { name: 'Croatian', level: 'Native' },
  { name: 'English', level: 'Fluent (C1)' },
  { name: 'Italian', level: 'Intermediate (B1)' },
];
