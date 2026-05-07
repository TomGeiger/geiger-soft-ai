Good timing on this audit — there are some real gaps. Let me work through it surface by surface.

---

## Geigersoft.com Content Audit vs. Resume / Project Source of Truth

---

### 🔴 HIGH PRIORITY — Material gaps or inaccuracies

**1. Horizon Capital Platform — Stack and scale are significantly understated**

The site's Work page lists the stack as `React · Alpine.js · Next.js · Tailwind` with `Lovable.dev · GitHub · Vercel · Namecheap DNS`. The source of truth is more precise and notably different:

- Stack should be: React 18, TypeScript, Vite, Tailwind, shadcn/ui, Vercel Serverless, Vercel Postgres, Upstash Redis, jose JWT, Vitest — not Next.js
- Scale is completely absent from the site: **~40k LOC, 230 TypeScript/TSX modules, 23 Postgres migrations, 220 commits over 16 months** — these are the numbers that make this project land
- Key features not mentioned anywhere on the site: Guardian Edge premium tier (11 smart components), magic-link auth agent portal, UTM attribution on lead CRM, serverless consolidation (30+ endpoints → 12 functions at $0 infra cost), event RSVP and survey engine
- The framing of "Lovable.dev → GitHub → Vercel" positions Lovable as a primary tool. It was the origin scaffold, not the ongoing stack — worth reframing

**2. ClearCount — Four-module architecture is completely missing**

The site describes it as "smart CSV import + dual experience layer + local-first persistence." That's a surface-level read. What's missing:

- The four distinct product modules: household finance with settlement engine, insurance agent commission tracker (1099/vesting/chargebacks), CPA portal with three permission levels, consumer onboarding
- Scale: ~280 TS/TSX source files, ~12K+ LOC, ~38 Vitest + RTL test files
- Notable engineering: learning engine for merchant→category rules, account-aware storage keys, custom-event bus, module unlock-code gating
- Full stack: shadcn/ui (52 Radix components), Recharts, PapaParse, date-fns, Zod, Vitest — none of these appear
- The site mentions "localStorage / SQLite" — SQLite is not in the source of truth, only localStorage. Worth confirming whether SQLite is actually in scope or if this is an error

---

### 🟡 MEDIUM — Missing details that strengthen the story

**3. TTF Voice Coach — Solid, but missing a few specifics**

This is the best-described project on the site. Two small gaps:
- The post-call JSON transcript with LLM-generated summary is a nice differentiator — not mentioned
- The conversational boundary enforcement (redirecting commission/compliance questions to human trainers) is worth a line — it shows you thought about responsible AI design

**4. Education section — Wake Tech missing**

The About page shows BSEE and NCSU grad coursework. The resume also lists "Selected coursework — OOA, OOD, OOP in C++ — Wake Technical Community College." Minor, but it's in the source of truth.

**5. Affiliations — Not on the site at all**

IEEE · TriNUG · CED appear on the resume but nowhere on the site. The About page's `// education-recognition` section is the natural home for these. Small credibility signal worth adding.

**6. TenXTL — The "$4K/month engagement" and "forensic code analysis" framing are absent**

The site mentions TenXTL in the Home engagements section but is vague. The resume specifies a Data Platform API architecture proposal at $4K/month over 4 months and forensic code analysis as a specific deliverable. The dollar figure signals the engagement tier — worth including if you're comfortable with it on the public site.

---

### 🟢 LOW — Minor consistency notes

**7. Home page stack sidebar lists "Next.js" as a primary web technology**

The four current builds primarily use Vite, not Next.js. Next.js is in the Trusted Future stack on the site but Vite is the actual build tool for both Horizon Capital and ClearCount. The sidebar could more accurately read `React · TypeScript · Vite` or just `React · TypeScript`.

**8. About/Capabilities mentions Docker and Kubernetes**

These don't appear in the resume or project notes. If you've genuinely used them, they're fine — just flag to verify they're not carry-over from an older bio draft.

**9. Other client sites not on the site**

precisionperformancefinancial.com and clarityconnectpllc.com aren't mentioned. This may be intentional (they're smaller engagements) but if you want to signal breadth of small-business work, a brief mention in the Engagements section is natural.

---

### ✅ What's well-aligned

- IUL Pro Analyzer description matches source of truth closely
- TTF Voice Coach RAG pipeline detail is accurate
- Contact page positioning ("open to senior engineering and technical leadership roles") matches your stated intent
- The Arc section on About is a good narrative and matches the career history
- Hero subheading and capability framing are tight

---

### Recommended Order of Updates

1. **Horizon Capital** — rewrite the Work page entry with the real stack, the scale numbers, and the key feature list (Guardian Edge, magic-link auth, UTM attribution, serverless consolidation). This is your flagship build — it should read like it.
2. **ClearCount** — expand to show the four-module architecture and the engineering depth. The current description undersells a 12K+ LOC local-first SaaS significantly.
3. **Education / Affiliations** — quick adds to the About page.
4. **Stack sidebar on Home** — swap Next.js for Vite or leave it as React · TypeScript only.
5. **SQLite clarification** — confirm whether that's in scope or should be removed.

Want me to draft the rewritten Horizon Capital and ClearCount sections for the site first?
