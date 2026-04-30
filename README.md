# Geigersoft — Consulting Practice Website

> The marketing site for **Geigersoft Consulting** — independent technical consulting at the intersection of AI and financial services.

🌐 **Live:** [geigersoft.com](https://geigersoft.com)

![Stack](https://img.shields.io/badge/React-080E1A?style=flat-square&logo=react&logoColor=00C8E0)
![Stack](https://img.shields.io/badge/TypeScript-080E1A?style=flat-square&logo=typescript&logoColor=00C8E0)
![Stack](https://img.shields.io/badge/Vite-080E1A?style=flat-square&logo=vite&logoColor=00C8E0)
![Stack](https://img.shields.io/badge/Tailwind-080E1A?style=flat-square&logo=tailwindcss&logoColor=00C8E0)
![Deploy](https://img.shields.io/badge/Vercel-080E1A?style=flat-square&logo=vercel&logoColor=00C8E0)

---

## `// what-this-is`

A four-page consulting site for [Thomas Geiger](https://www.linkedin.com/in/tomgeigernc/) — software engineer & financial technologist building AI/MCP tools for insurance professionals.

**Pages**
- `/` — Home with current builds, capabilities, and recent engagements
- `/work` — Deep-dive on the four current builds (Voice Coach, IUL Pro Analyzer, ClearCount, Trusted Future)
- `/about` — Career arc, core capabilities, education, and working philosophy
- `/contact` — Direct contact info plus a contact form

---

## `// stack`

```
framework    React 18 + TypeScript + Vite
styling      Tailwind CSS (custom theme tokens)
routing      React Router
build        Vite
deploy       Vercel (auto-deploy from main)
domain       Namecheap → Vercel DNS
```

---

## `// design-system`

The site uses a custom visual language — **"Signal & Precision"** — built around a near-black background with electric cyan accents. The brand is intentionally distinct from but adjacent to **Trusted Future** (a financial services practice the founder also supports), which uses Deep Navy / Warm Gold / Cream.

### Color tokens

| Token | Hex | Use |
| :--- | :--- | :--- |
| `bg.primary` | `#080E1A` | Page background — near-black with navy tint |
| `bg.secondary` | `#0E1626` | Footer / secondary surface |
| `fg.primary` | `#EAEFF6` | Body text — near-white with cool tint |
| `fg.muted` | `rgba(234,239,246,0.62)` | Secondary text |
| `accent` | `#00C8E0` | Electric cyan — used sparingly for emphasis |
| `accent.gradient` | `#00C8E0 → #4BDFEE` | Reserved for one phrase per page |
| `border.hairline` | `rgba(0,200,224,0.08)` | Section dividers and card edges |

### Typography

- **Display & body:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) — weights 300, 400, 600, 700
- **Mono / labels / terminal aesthetic:** [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) — weight 400

### Visual motifs

- **Node graph backgrounds** — subtle SVG with cyan dots connected by hairline edges (low opacity)
- **Terminal-style labels** — `// section-label` mono text used as section eyebrows
- **Hairline borders** — 1px at very low cyan opacity for dividers and card edges
- **Cyan dot brand mark** — small solid cyan circle preceding the GEIGERSOFT wordmark in nav
- **Gradient text accent** — applied to one phrase per page maximum, never to UI

The site is **dark-mode by default**. There is no light mode toggle — the dark mode is the brand.

---

## `// local-development`

```bash
# clone
git clone https://github.com/TomGeiger/geigersoft-site.git
cd geigersoft-site

# install
npm install

# dev server (defaults to http://localhost:5173)
npm run dev

# production build
npm run build

# preview production build locally
npm run preview
```

**Requirements:** Node 18+ recommended.

---

## `// deployment`

The site auto-deploys to Vercel on every push to `main`.

**Build path:**
```
GitHub (this repo)
   ↓
Vercel (build + deploy)
   ↓
geigersoft.com (custom domain via Namecheap DNS)
```

### Environment variables

None required for v1. If/when the contact form is wired up via Resend, the following will be added in Vercel:
- `RESEND_API_KEY` — server-only, set in Vercel Project Settings → Environment Variables

### Domain configuration

The custom domain is configured at the registrar with:
- `A` record on `@` → `76.76.21.21`
- `CNAME` record on `www` → `cname.vercel-dns.com`

SSL is issued automatically by Vercel via Let's Encrypt.

---

## `// project-structure`

```
geigersoft-site/
├── public/                  Static assets
├── src/
│   ├── components/          Shared UI (Nav, Footer, Cards, etc.)
│   ├── pages/               Home, Work, About, Contact
│   ├── styles/              Tailwind config and globals
│   ├── lib/                 Utilities and shared helpers
│   └── main.tsx             Entry point
├── index.html               Vite entry HTML
├── tailwind.config.ts       Brand color tokens defined here
├── vite.config.ts           Vite configuration
└── vercel.json              SPA rewrites for client-side routing
```

---

## `// roadmap`

- [x] **v1.0** — Initial four-page site
- [ ] **v1.1** — Centered Capabilities grid (About page)
- [ ] **v1.2** — Wire up the contact form (Resend)
- [ ] **v1.3** — OG image and meta tags for link previews
- [ ] **v2.0** — Add a writing/insights section (long-form posts on AI/MCP work)
- [ ] **v2.1** — Case studies for completed engagements

---

## `// connect`

| | |
| :--- | :--- |
| 🌐 Website | [geigersoft.com](https://geigersoft.com) |
| 💼 LinkedIn | [linkedin.com/in/tomgeigernc](https://www.linkedin.com/in/tomgeigernc/) |
| 🐙 GitHub | [github.com/TomGeiger](https://github.com/TomGeiger) |
| 📨 Email | [tom.geiger@me.com](mailto:tom.geiger@me.com) |
| 📍 Location | Raleigh, NC |

---

## `// license`

This repository is the source code for a personal/professional consulting practice website. The code is published openly as a portfolio artifact — feel free to read it, learn from it, or take inspiration. **Please do not clone it as-is for your own consulting site.** The brand identity, copy, and project descriptions belong to Geigersoft Consulting.

If you'd like to chat about a similar build for your own practice, [get in touch](mailto:tom.geiger@me.com).

---

<div align="center">
<sub><code>// production-ai · built-to-ship</code></sub>
</div>