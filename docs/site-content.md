# Geigersoft.com — Full Site Content

> Extracted from source as of May 2026. Use this to cross-reference LinkedIn and resume for consistency.

---

## Navigation

**Nav links:** Home · Work · About · Contact

**Brand mark:** GEIGERSOFT (with cyan dot)

---

## Page: Home (`/`)

### Hero

**Label:** `// ai-tools-for-financial-services`

**Headline:** Production AI, Built to Ship.

**Subheading:**
MCP servers, voice AI agents, and SaaS platforms — engineered for insurance and financial services with 30 years of full-stack depth behind every deployment.

**CTAs:** See My Work · Get In Touch

**Stack & Capabilities sidebar:**

| Category | Items |
| :--- | :--- |
| AI | Claude API · MCP Servers · RAG Pipelines |
| Voice | SignalWire · SWAIG · Rime TTS |
| Web | React · TypeScript · Vite |
| Domain | IUL · Insurance · Agent Tooling |

**Past Clients (sidebar):** Ford Motor Co. · MetLife Japan · Genworth Financial · Willkie Farr

---

### Section: What I Build

**Label:** `// what-i-build`

**Headline:** Four production builds. One specialty.

**Body:** Geigersoft is independent technical consulting focused on the intersection of AI and financial services. The builds below are live or in active development.

**Project cards (summary):**

| # | Name | Status | Stack |
| :-- | :--- | :--- | :--- |
| 01 | TTF Fast Start Voice Coach | POC | TypeScript · Node.js · SignalWire AgentBase SDK · Rime TTS |
| 02 | IUL Pro Analyzer | IN DEVELOPMENT | TypeScript · Anthropic MCP · Claude API · Node.js |
| 03 | ClearCount | IN BETA | React · TypeScript · shadcn/ui · Vitest · GitHub + Vercel |
| 04 | Trusted Future / Horizon Capital | LIVE · ONGOING | React 18 · TypeScript · Vite · Vercel Postgres · Upstash Redis |

**Card short descriptions:**

*01 — TTF Fast Start Voice Coach:* AI voice agent that answers onboarding questions for new insurance agents over the phone. Custom RAG pipeline (markdown-aware chunking, TF-IDF retrieval) over 11 source documents, exposed to the LLM via SignalWire SWAIG. Demoed live at Mastermind Friday; Phase 2 roadmap includes CRM integration and pgvector.

*02 — IUL Pro Analyzer:* AI-powered MCP server with 25+ tools for Indexed Universal Life policy analysis, comparisons, and client consultation. Built on the Anthropic Claude API and Model Context Protocol.

*03 — ClearCount:* Four-module financial clarity SaaS for insurance agents, CPAs, and consumers — commission tracking, household finance, CPA portal, and consumer onboarding. Local-first, ~12K+ LOC, 280 TypeScript/TSX modules.

*04 — Trusted Future / Horizon Capital:* In-house technologist for an Experior Financial Group practice serving a 500+ agent organization. Horizon Capital platform: ~40K LOC, 230 TypeScript modules, 23 Postgres migrations, 220+ commits over 16 months.

---

### Section: Approach

**Label:** `// approach`

**Headline:** Engineering with domain fluency.

**01 — Senior engineer, not a junior team.**
Thirty-plus years of full-stack experience. You're working with the person who's writing the code, not a layer of project management above one.

**02 — Domain literacy.**
Indexed Universal Life products, agent compensation structures, illustration analysis, FDA 21 CFR Part 11 — I understand the financial and regulatory ground underneath what I build.

**03 — Production-grade, not prototypes.**
Real CI/CD, real test coverage, real deployments. Past clients include Ford Motor Company, MetLife Japan, Genworth Financial, and Willkie Farr & Gallagher.

---

### Section: Engagements

**Label:** `// engagements`

**Headline:** Selected recent work.

**TenXTL** *(link: tenxtl-developer-academy.vercel.app)*
Sustainability technology. Code analysis, developer training platform, Data Platform API architecture proposal. Built the complete TenXTL Developer Academy — a 14-module React/TypeScript/Tailwind training site.

**Trusted Future Agent Platform**
Agent Blueprint 2026 (React + Alpine.js wizard), AgentLink platform with ProspectPipelines and ProspectLink, IUL education content, mastermind curricula.

**patriciageiger.com** *(link: patriciageiger.com)*
Practice website for Patricia Geiger — Trusted Future / Horizon Capital lead agent. React/TypeScript/Vite site with IUL education content, interactive financial calculators, and long-form blog content.

**Precision Performance Financial Services** *(link: precisionperformancefinancial.com)*
Marketing and lead-generation site for an IUL and retirement planning practice in Raleigh, NC. React/TypeScript/Vite build with animated scroll-triggered sections, an interactive Retirement Comparison tool, Recharts-powered historical performance visualizations, FAQ accordion, and Zod-validated contact form.
*Stack: React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Recharts · React Hook Form · Zod · Vercel*

**Clarity Connect Psychiatry, PLLC** *(link: clarityconnectpllc.com)*
Marketing and patient acquisition site for a telehealth psychiatric practice serving patients in North Carolina and Kansas. Multi-page React/TypeScript/Vite build with a provider bio and credentials section, a services overview covering eight mental health conditions (anxiety, depression, ADHD, bipolar disorder, PTSD, OCD), an educational resources section with long-form articles, and appointment scheduling integrated directly with the Headway platform. SEO-optimized with structured data schemas (LocalBusiness, MedicalService, Person, Breadcrumb), geo-targeting meta tags for NC and KS, and HIPAA-compliant Google Analytics 4 (IP anonymization, advertising features disabled, custom event tracking for appointment and contact interactions). Zod-validated forms and React Hook Form throughout.
*Stack: React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · React Router · React Hook Form · Zod · React Helmet Async · GA4 · Vercel*

---

### Section: CTA

**Label:** `// next-steps`

**Headline:** Building something at the intersection of finance and AI?

**Body:** Available for technical engagements — particularly AI/LLM development, MCP server work, voice AI, and full-stack builds for financial services firms.

**Note:** `// Currently scheduling for Q3 2026 engagements`

---

## Page: Work (`/work`)

### Hero

**Label:** `// work`

**Headline:** Current builds. In production or actively shipping.

**Body:** Four projects spanning voice AI, MCP servers, dual-audience SaaS, and a long-running agency relationship for an insurance practice — each a different angle on the same specialty.

---

### Project 01: TTF Fast Start Voice Coach

**Status:** POC complete · Phase 2 roadmap in progress

**Overview:**
An AI voice agent that answers onboarding questions for new insurance agents over the phone. Designed for Team Trusted Future, a Trusted Future / Horizon Capital practice within the Experior Financial Group, to scale Fast Start program coaching without requiring 1:1 trainer time.

**What it does:**
- Answers natural-language phone questions about the 90-day Fast Start program — training schedule, Top 25 prospecting system, Required-2 Protocol, invite scripts, product basics, and promotion ladder — by retrieving from 11 markdown source documents.
- Implements a custom RAG pipeline: chunks docs by markdown headings (## / ###), builds an in-memory TF-IDF index with stopword filtering, and ranks results with squared IDF weighting to surface the most relevant chunk per query.
- Defines a `search_documents` SWAIG tool the LLM calls during conversation; results are summarized in the agent's voice rather than read verbatim.
- Configured a warm, concise voice persona with domain-specific speech hints (Experior, IUL, BTO, SFA, etc.) to improve transcription accuracy on industry jargon.
- Auto-detects the local ngrok tunnel on startup and prints the authenticated SWML webhook URL for the SignalWire dashboard.
- Captures every call as a JSON transcript with an LLM-generated post-call summary covering topics discussed and unanswered questions.
- Enforces conversational boundaries — redirects commission, compliance, and client-specific questions to human trainers instead of fabricating answers.

**Stack:**

| Layer | Technologies |
| :--- | :--- |
| Voice infrastructure | SignalWire AgentBase SDK · SWAIG · Rime TTS |
| Backend | TypeScript · Node.js · ngrok |
| Retrieval | Custom TF-IDF over markdown source docs |

**Outcome:**
Working POC that proves phone → AI persona → knowledge retrieval → on-brand response. Demoed live at a Friday Mastermind session and received positive reception from agents.

**Phase 2 Roadmap:**
CRM integration · caller-ID stage lookup · SMS document delivery · pgvector for vector retrieval · multi-tenant routing.

---

### Project 02: IUL Pro Analyzer

**Status:** In Development

**Overview:**
An AI-powered MCP server purpose-built for Indexed Universal Life policy analysis, comparison, and client consultation. Twenty-five-plus tools spanning policy projections, side-by-side comparisons, consultation flows, and automated presentation generation.

**What it does:**
- Loads carrier illustrations and policy data into structured, queryable form.
- Runs side-by-side comparisons across multiple policy designs.
- Produces client-ready presentation materials from raw illustration data.
- Exposes 25+ specialized tools through the Model Context Protocol so any MCP-compatible client (including Claude Desktop) can drive analysis through natural-language conversation.

**Stack:**

| Layer | Technologies |
| :--- | :--- |
| AI | Anthropic Claude API · Model Context Protocol |
| Backend | TypeScript · Node.js |
| Domain | Indexed Universal Life policy mechanics |

**Outcome:**
Active development. Currently exploring SaaS deployment at iulproanalyzer.com with active beta testing inside Patricia Geiger's practice.

---

### Project 03: ClearCount

**Status:** In Beta

**Overview:**
A four-module financial clarity SaaS platform built for insurance agents, CPAs, and individual consumers. Local-first architecture keeps data on the user's machine until they explicitly export — ~12K+ LOC across 280 TypeScript/TSX modules.

**What it does:**
- Four distinct product modules: household finance with settlement engine, insurance agent commission tracker (1099/vesting/chargebacks), CPA portal with three permission levels, and consumer onboarding.
- Learning engine for merchant-to-category rules — improves automatic transaction categorization over time without manual re-tagging.
- Account-aware storage keys and custom event bus — modules share state without coupling.
- Module unlock-code gating for staged rollout and beta access control.
- Smart CSV import powered by PapaParse + Zod validation; automatic transaction categorization on import.
- 38 Vitest + RTL test files covering core modules.
- Full PRD, Terms of Service, Privacy Policy, and Beta NDA in place.

**Stack:**

| Layer | Technologies |
| :--- | :--- |
| Frontend | React · TypeScript · Tailwind · shadcn/ui (52 components) · Recharts |
| Data | localStorage · PapaParse · date-fns · Zod |
| Testing & Deploy | Vitest · RTL · GitHub + Vercel |

**Outcome:**
Currently in private beta with insurance agents and a small consumer cohort. ~12K+ LOC, 280 TypeScript/TSX modules, 38 test files. Beta feedback is shaping the v1 release roadmap.

---

### Project 04: Trusted Future / Horizon Capital

**Status:** Live · Ongoing

**Overview:**
In-house technologist for an Experior Financial Group practice serving an organization of 500+ insurance agents in the Indexed Universal Life space. The Horizon Capital platform is the flagship engineering deliverable — ~40K LOC, 230 TypeScript/TSX modules, 23 Postgres migrations, 220+ commits over 16 months.

**What it does:**
- Horizon Capital platform: Guardian Edge premium tier (11 smart agent-facing components), magic-link auth agent portal, UTM attribution on lead CRM, event RSVP and survey engine.
- Serverless consolidation: reduced 30+ legacy endpoints to 12 Vercel Serverless functions backed by Vercel Postgres and Upstash Redis — $0 infrastructure cost at current scale.
- Maintains patriciageiger.com — originated from a Lovable.dev scaffold, evolved to a production React/Vite/TypeScript codebase with CI/CD via GitHub + Vercel.
- Produces IUL education content and interactive financial tools — compound interest calculators, 401(k) vs IUL comparisons, long-form blog content.
- Designs and delivers Friday Night Mastermind curricula, blending business systems thinking with financial education.
- Develops agent-facing software including the Agent Blueprint 2026 planning app — a React + Alpine.js wizard with localStorage persistence, pipeline math, and full design-system branding.
- Designed the Trusted Future visual identity (Deep Navy / Warm Gold / Cream) and applies it across web, print, and presentation materials.

**Stack:**

| Layer | Technologies |
| :--- | :--- |
| Frontend | React 18 · TypeScript · Vite · Tailwind · shadcn/ui |
| Backend | Vercel Serverless · Vercel Postgres · Upstash Redis · jose JWT |
| Tooling | Vitest · GitHub · Vercel · Namecheap DNS |

**Outcome:** Three years and counting. ~40K LOC, 230 TypeScript/TSX modules, 220+ commits. Active across web platform, content, software, and brand.

---

## Page: About (`/about`)

### Hero

**Label:** `// about`

**Headline:** 30 years of building. Three decades of shipping.

**Body:**
I'm Thomas Geiger — a senior software engineer based in Raleigh, NC. I've spent three decades shipping production software across enterprise, regulated industries, and now AI for financial services. Geigersoft is how I do that work today: independent, hands-on, and deeply technical.

---

### Section: The Arc

**Label:** `// the-arc`

I started professionally in 1992 — and won First Place at the 1992 Software Developers Competition (Windows category) shortly after. That competition set the tone for what's been a career-long obsession with shipping real software, not impressive demos.

The next two decades were enterprise full-stack work spanning C++, .NET, Angular, and React. Engagements at Ford Motor Company, MetLife Japan, Genworth Financial, Willkie Farr & Gallagher, and Liberty Healthcare — building systems that had to be correct, auditable, and maintainable for years after I left.

Along the way I founded multiple ventures, including a software consultancy specializing in FDA 21 CFR Part 11–compliant pharmaceutical applications. Regulated industries taught me how to think about provenance, signatures, and the audit trail beneath everything an application does.

Today, Geigersoft is focused at the intersection of AI and financial services — building MCP servers, voice agents, and SaaS platforms backed by deep insurance domain expertise. The tools change. The discipline of shipping real, trustworthy software does not.

---

### Section: Capabilities

**Label:** `// capabilities`

**Headline:** Core capabilities.

**AI & LLM Engineering**
Claude API integration, prompt engineering, agentic workflows. Built and shipped MCP servers including a 25-tool IUL policy analysis platform. Daily user of Claude Code and AI-augmented development workflows.

**Modern Web Development**
React, Next.js, Vue, Astro, TypeScript, Tailwind CSS. Vercel and GitHub-based CI/CD. Rapid prototyping with Lovable.dev. Deep Angular experience (v5–v17) including Material, NGRX, and RxJS.

**Backend & Enterprise**
.NET / C# / ASP.NET MVC / Web API, Node.js, Python. REST and OData API design. SQL Server, Azure SQL, MongoDB, RavenDB.

**Cloud & DevOps**
Azure, AWS, Vercel. GitHub Actions, Azure DevOps, Jenkins. Docker.

**Financial Services Domain**
Indexed Universal Life (IUL) product knowledge, illustration analysis, and policy comparison. Insurance agent tooling, pipeline management, CRM integration. Financial education content and interactive tools.

**Regulated Industries**
FDA 21 CFR Part 11 (electronic records and signatures), HIPAA-compliant systems, pharmaceutical clinical trials applications.

**Leadership**
Technical lead and mentor across multiple engineering teams. Founded and operated multiple ventures. Cross-functional collaboration with UX, backend, QA, and product.

---

### Section: Education & Recognition

**Label:** `// education-recognition`

**BSEE, Computer Science emphasis**
Polytechnic University of New York · December 1991
*(Now NYU Tandon School of Engineering — merged with NYU in 2008)*

**Graduate Coursework — Object-Oriented Languages and Systems**
Smalltalk · C++ · Eiffel · OODB
North Carolina State University

**Selected Coursework — OOA, OOD, OOP in C++**
Wake Technical Community College

**First Place — 1992 Software Developers Competition**
Windows Application category

**Professional Affiliations**
IEEE · TriNUG · Council for Entrepreneurial Development (CED)

---

### Section: Philosophy

**Label:** `// philosophy`

I write production code that ships, not prototypes that demo. Demos are easy; production is where the work actually is — error handling, telemetry, deployment, the second release.

I believe in domain depth. The best engineering happens when you understand the business as well as the codebase. For me right now, that means knowing IUL mechanics, agent compensation, illustration math, and the regulatory ground beneath insurance.

I aim for senior-grade collaboration: direct, kind, focused on outcomes. No theater, no hand-waving — just the work.

---

## Page: Contact (`/contact`)

### Hero

**Label:** `// contact`

**Headline:** Let's talk.

**Body:**
Available for AI/LLM development, MCP server work, voice AI engineering, and full-stack builds for financial services firms. Also open to senior engineering and technical leadership roles.

---

### Direct Contact

| Channel | Info |
| :--- | :--- |
| Email | tom.geiger@me.com |
| Phone | (919) 271-0609 |
| Location | Raleigh, NC |

### Elsewhere

| Platform | Handle |
| :--- | :--- |
| LinkedIn | linkedin.com/in/tomgeigernc |
| GitHub | github.com/TomGeiger |

**Response time note:** `// typical response time: within one business day`

---

## Footer (persistent across all pages)

Thomas Geiger · 30+ Years Full-Stack

Links: LinkedIn · GitHub · Email

geigersoft.com · © 2026 Geigersoft Consulting
