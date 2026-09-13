# Abu Huraira Abid — Portfolio

A premium, production-ready 3D developer portfolio built with React, TypeScript, Three.js, and Framer Motion.

## Tech Stack

- **Vite** — Build tool
- **React 19** — UI framework
- **TypeScript** — Type safety
- **Tailwind CSS 4** — Styling
- **React Three Fiber + Drei** — 3D visuals
- **Framer Motion** — Animations
- **GSAP** — Scroll-driven animations
- **Lucide React** — Icons

## Getting Started

### Prerequisites

- Node.js >= 18
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Environment Variables

Create a `.env` file from the example:

```bash
cp .env.example .env
```

Add your contact form endpoint:

```
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run linter |

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── HeroScene.tsx      # Interactive 3D hero scene
│   │   ├── Footer.tsx              # Footer with social links
│   │   ├── Icons.tsx               # Custom brand icons
│   │   ├── LoadingScreen.tsx       # Animated intro loader
│   │   └── Navigation.tsx          # Fixed nav with active indicator
│   ├── data/
│   │   └── portfolio.ts            # Portfolio data (single source of truth)
│   ├── hooks/
│   │   └── useActiveSection.ts     # Active section detection
│   ├── sections/
│   │   ├── AboutSection.tsx        # About + quick facts
│   │   ├── AchievementsSection.tsx # Awards + education
│   │   ├── ContactSection.tsx      # Contact form + info
│   │   ├── ExperienceSection.tsx   # Work experience timeline
│   │   ├── HeroSection.tsx         # Hero with 3D scene
│   │   ├── ProjectsSection.tsx     # Filterable project cards + modal
│   │   └── SkillsSection.tsx       # Categorized skill display
│   ├── App.tsx                     # Root component
│   ├── index.css                   # Global styles + Tailwind
│   └── main.tsx                    # Entry point
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── .env.example
├── index.html                      # SEO metadata + schema.org
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Updating Content

All portfolio content is sourced from `src/data/portfolio.ts`. To update:

1. Open `src/data/portfolio.ts`
2. Edit the relevant data objects (`personalInfo`, `projects`, `skills`, etc.)
3. Rebuild: `npm run build`

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload the `dist/` folder to Netlify
```

### GitHub Pages

```bash
npm run build
# Push the `dist/` folder to gh-pages branch
```

### Docker

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Performance

- Lazy-loaded 3D scene (HeroScene is code-split)
- Respects `prefers-reduced-motion`
- Semantic HTML + accessible keyboard navigation
- Optimized Three.js assets
- Strong contrast ratios

## License

Built by Abu Huraira Abid. All rights reserved.
