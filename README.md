# Sanskriti Anand — Portfolio

A personal portfolio website built with modern web technologies to showcase my experience, projects, achievements, and education.

**Live:** [sanskriti-anand.vercel.app](https://sanskriti-anand.vercel.app)


## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Theming | next-themes (dark / light / system) |
| Font | Inter (via `next/font/google`) |
| Deployment | [Vercel](https://vercel.com/) |


## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
app/
  layout.tsx          # Root layout with nav, footer, theme provider
  page.tsx            # Main page composing all sections
  globals.css         # Tailwind config and CSS variables

components/
  section/            # Page sections (home, about, experience, projects, achievements, education)
  component/          # Reusable components (nav, footer, profile, cards)
  ui/                 # UI primitives (button, badge, title, avatar, toast)

lib/
  data.ts             # All portfolio content (experience, projects, achievements, etc.)
  utils.ts            # Utility functions
```

---

## License

MIT
