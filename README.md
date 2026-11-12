# Anamaria Oršulić — Portfolio

React + Vite portfolio. The design is based on the "Apple Minimal" system, recoloured to a dark red palette.

## Run
```bash
npm install
npm run dev            # local dev server
npm run build          # production build → dist/
npm run build:single   # one self-contained HTML → dist-single/index.html
```

## Where things live
- `src/tokens.css` – design tokens (colours, radii, spacing). Change the palette here.
- `src/data.js` – all content (experience, projects, skills…). Before you deploy, set `email` and `linkedin`.
- `src/components/` – Nav, Hero, About, Experience, Projects, Skills, Contact
- `src/App.css` – component styles and responsive rules

## Palette
| Token | Hex |
|---|---|
| primary | #a4161a |
| primary-70 (hover) | #85090f |
| primary-60 | #c43a3f |
| secondary | #d64045 |
| tertiary (links) | #8b1e24 |
| on-surface | #1f1416 |
| muted | #f8f3f3 |
| border | #eadfe0 |
| ink band | #1a0b0d |
