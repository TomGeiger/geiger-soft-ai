# CLAUDE.md

> Persistent context for Claude Code sessions on this repo. Read first, then proceed with the user's task. Honor the constraints below — they encode design decisions that took real iteration to land on, and reverting them would be a regression.

---

## Project

**Geigersoft Consulting** — the marketing site for an independent technical consulting practice (Thomas Geiger). Four-page React + TypeScript + Vite site deployed on Vercel at [geigersoft.com](https://geigersoft.com).

The site exists to position Tom as a senior software engineer building AI/MCP tools for insurance and financial services firms. Audience is three groups: (1) insurance agents and Experior network, (2) fellow engineers and AI builders, (3) potential clients and hiring managers.

---

## Tech stack

```
framework    React 18 + TypeScript + Vite
styling      Tailwind CSS (custom theme tokens — see tailwind.config.ts)
routing      React Router (client-side, SPA)
build        Vite
deploy       Vercel (auto-deploy from main branch)
domain       geigersoft.com (Namecheap DNS → Vercel)
```

When making changes, work within this stack. Do not introduce new frameworks, CSS-in-JS libraries, animation libraries, or state managers without explicit user approval. Tailwind utility classes are the correct way to style.

---

## Site structure

```
/             Home — hero, what-i-build (4 cards), approach, recent work, CTA
/work         Work — deep dive on the 4 current builds with anchor nav
/about        About — career arc, capabilities grid, education, philosophy
/contact      Contact — direct info column + contact form
```

Nav and Footer are persistent across all four pages. They live in shared `Layout` and component files under `src/components/`.

---

## Design system: "Signal & Precision"

The site has a distinct visual identity. **Honor it.** When asked to add new sections, components, or pages, match the patterns below.

### Color palette (use the Tailwind tokens, not raw hex in components)

| Token | Hex | Use |
| :--- | :--- | :--- |
| `bg.primary` | `#080E1A` | Page background — near-black with navy tint |
| `bg.secondary` | `#0E1626` | Footer / secondary surface |
| `fg.primary` | `#EAEFF6` | Body text — near-white with cool tint |
| `fg.muted` | `rgba(234,239,246,0.62)` | Secondary text |
| `fg.subtle` | `rgba(234,239,246,0.45)` | Captions, inactive nav |
| `accent` | `#00C8E0` | Electric cyan — used sparingly |
| `accent.bright` | `#4BDFEE` | Gradient pair only |
| `border.hairline` | `rgba(0,200,224,0.08)` | Section dividers, card edges |

The site is **dark mode by default**. There is no light mode toggle. Do not add one. The dark mode is the brand.

### Typography

- **Display & body:** Space Grotesk (weights 300, 400, 600, 700). Use `tracking-tight` (`-0.02em`) on large headings.
- **Mono / labels / terminal aesthetic:** JetBrains Mono (weight 400). Use for `// section-label` eyebrows, code-style listings, status pills, and form field labels.

Both fonts are loaded via Google Fonts with `font-display: swap`. Do not swap fonts without explicit approval.

### Visual motifs (use throughout, not just the homepage)

1. **Node graph backgrounds** — subtle inline SVG with cyan dots connected by hairline edges. Low opacity (0.12–0.25). No aggressive animation; at most a slow pulse or fade.
2. **Terminal-style labels** — small all-caps mono text prefixed with `//`, optionally with a blinking cursor block. Use for section eyebrows. Examples: `// what-i-build`, `// approach`, `// engagements`.
3. **Hairline borders** — 1px borders at very low cyan opacity for section dividers, card edges, table rows. Never heavy boxes.
4. **Cyan dot brand mark** — small 8px solid cyan circle preceding the GEIGERSOFT wordmark in the nav. Do not remove or restyle.
5. **Gradient text accent** — applied to *one phrase per page maximum*. Linear gradient from `accent` to `accent.bright` via `background-clip: text`. Never apply to UI elements (buttons, borders).
6. **Subtle radial cyan glow** — soft radial gradient blob (low opacity, ~0.15) behind hero content for depth.

### Buttons

- **Primary:** solid cyan background, near-black text, uppercase, letter-spacing 0.08em, font weight 600. Border radius minimal (4px max) or none.
- **Secondary:** transparent background, primary text color, 1px cyan border at 30% opacity. Same typography as primary.
- **Hover:** primary darkens slightly; secondary fills with low-opacity cyan.

### Spacing rhythm

Generous. Sections have substantial vertical padding (96px+ on desktop). The site should feel breathable, not dense.

---

## Voice and copy patterns

When writing or editing copy:

- **Senior, confident, technically literate.** Not flashy, not promotional, not startup-y.
- **Specific, not generic.** "AI voice agent for insurance agent onboarding via phone" beats "AI-powered voice solutions."
- **Use the `// label` convention** for eyebrow text on every section.
- **One gradient phrase per page maximum.** Don't add new gradient text without checking what's already there.
- **Use em dashes (—) freely** — they match the existing voice.
- **No emoji in body copy or headings.** Footer and connection blocks may use them sparingly if matching existing patterns.
- **Past clients:** Ford Motor Company, MetLife Japan, Genworth Financial, Willkie Farr & Gallagher, Liberty Healthcare. These names are public and OK to use.
- **Current builds (the four to feature):** TTF Fast Start Voice Coach, IUL Pro Analyzer, ClearCount, Trusted Future / Horizon Capital. Voice Coach leads (newest, most novel).
- **Use "agent organization"** when describing Trusted Future scale, *not* "downline." This is a deliberate choice for tonal neutrality.

---

## Privacy and confidentiality

When adding or editing content, do not introduce:

- **Commercial terms** — rates, contract values, deal sizes, monthly retainers, equity. None of this belongs on the public site.
- **Internal client product names without verification** — if a client product/platform name is internal, generalize it on the public site.
- **Specific compensation, commission, or compliance detail** about clients.
- **Named individuals from client engagements** without their permission. Patricia Geiger is the exception — she's Tom's wife and her practice is publicly named.

If asked to add a project as a portfolio piece, the bar is: (1) the deliverable is publicly accessible, AND (2) the client has been asked permission. The TenXTL Developer Academy ([tenxtl-developer-academy.vercel.app](https://tenxtl-developer-academy.vercel.app/)) is approved for showcase.

The previously listed "Estate Planning Law Practice" engagement (for an attorney) has been removed from the public site at the client's preference. Do not re-add it.

---

## What NOT to do

- **No carousels, sliders, or auto-rotating content.** Static layouts only.
- **No testimonials with stock photos.** There are no testimonials yet — leave the section out entirely.
- **No blog section yet** — planned for v2.0 but not in scope now.
- **No stock photography of any kind.** Inline SVG, gradient backgrounds, and node graphs only.
- **No gradient buttons.** Only one gradient effect (text) per page.
- **No colors outside the defined palette.** Stick to the tokens.
- **No emoji in body copy or headings.**
- **No motion/animation beyond very subtle.** Acceptable: cursor blink, gentle hover states on cards, smooth scroll. Not acceptable: parallax, scroll-triggered reveals, full-page transitions, video backgrounds.
- **No light-mode toggle.** Dark mode is the brand.
- **No third-party tracking scripts** without explicit approval (e.g., Google Analytics, Hotjar, etc.).

---

## Project structure

```
geigersoft-site/
├── public/                  Static assets
├── src/
│   ├── components/          Shared UI (Nav, Footer, Cards, Hero, etc.)
│   ├── pages/               Home, Work, About, Contact
│   ├── styles/              Tailwind config and globals
│   ├── lib/                 Utilities and shared helpers
│   └── main.tsx             Entry point
├── index.html               Vite entry HTML
├── tailwind.config.ts       Brand color tokens defined here
├── vite.config.ts           Vite configuration
├── vercel.json              SPA rewrites for client-side routing
├── README.md                Public repo documentation
└── CLAUDE.md                This file
```

When adding new pages, place them in `src/pages/` and register the route in the React Router config. When adding new shared components (e.g., a reusable card), place them in `src/components/` and ensure they consume Tailwind brand tokens, not raw hex.

---

## Development workflow

```bash
# install
npm install

# dev server (http://localhost:5173)
npm run dev

# production build
npm run build

# preview production build locally
npm run preview
```

**Deployments:** Auto-deploy on push to `main`. Vercel triggers within ~60 seconds. To preview a change before merging, push to a branch — Vercel creates a preview URL automatically.

**Environment variables:** None required for v1. If/when the contact form is wired up via Resend, `RESEND_API_KEY` will be set in Vercel Project Settings.

---

## Roadmap (open items)

- [ ] **v1.1** — Center the Capabilities grid bottom row on the About page (currently has trailing empty cell)
- [ ] **v1.2** — Wire up the contact form via Resend (Vercel serverless function under `/api/contact`)
- [ ] **v1.3** — OG image and meta tags for link previews (Twitter, LinkedIn, etc.)
- [ ] **v2.0** — Add a writing/insights section (long-form posts on AI/MCP work)
- [ ] **v2.1** — Case studies for completed engagements

When picking up work, prefer items higher in the list unless the user requests otherwise.

---

## Contact form notes

Currently the form on `/contact` is visual-only — the submit handler does not send anywhere. When wiring up, the planned approach is:

1. Sign up for Resend (resend.com)
2. Verify the geigersoft.com domain
3. Add `RESEND_API_KEY` to Vercel environment variables
4. Create `api/contact.ts` as a Vercel serverless function that takes the form POST and uses Resend to send to `tom.geiger@me.com`
5. Update the form's submit handler to POST to `/api/contact`

Do not implement the form handler without Tom's go-ahead — this is a planned but not yet greenlit task.

---

## When in doubt

- Read existing components in `src/components/` and match their patterns.
- Read `tailwind.config.ts` for the canonical brand tokens.
- If a change would break the visual identity above, **ask before doing**.
- If a change adds a dependency, **ask before installing**.
- If a change touches privacy-sensitive content (client names, commercial terms), **flag it explicitly**.

The user (Tom) values: senior-grade collaboration, direct communication, production-quality output, and consistency with the established brand. Optimize for those.
