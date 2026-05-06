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
| Web | React · Next.js · TypeScript |
| Domain | IUL · Insurance · Agent Tooling |

**Past Clients (sidebar):** Ford Motor Co. · MetLife Japan · Genworth Financial · Willkie Farr

---

### Section: What I Build

**Label:** `// what-i-build`

**Headline:** Four production builds. One specialty.

**Body:** Geigersoft is independent technical consulting focused on the intersection of AI and financial services. The builds below are live or in active development.

**Project cards (summary):**

| # | Name | Status |
| :-- | :--- | :--- |
| 01 | TTF Fast Start Voice Coach | POC |
| 02 | IUL Pro Analyzer | IN DEVELOPMENT |
| 03 | ClearCount | IN BETA |
| 04 | Trusted Future / Horizon Capital | LIVE · ONGOING |

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

**TenXTL**
Sustainability technology. Code analysis, developer training platform, Data Platform API architecture proposal. Built the complete TenXTL Developer Academy — a 14-module React/TypeScript/Tailwind training site.
*Link: tenxtl-developer-academy.vercel.app*

**Trusted Future Agent Platform**
Agent Blueprint 2026 (React + Alpine.js wizard), AgentLink platform with ProspectPipelines and ProspectLink, IUL education content, mastermind curricula.

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
A financial clarity SaaS platform with a dual-audience design — built for both insurance agents and individual consumers. Local-first architecture means data stays on the user's machine until they explicitly export.

**What it does:**
- Smart CSV import with automatic transaction categorization.
- Dual experience layer: agents see pipeline-relevant tagging, consumers see budget categories.
- Local-first persistence (localStorage / SQLite) — no server-side data storage required.
- Full PRD, Terms of Service, Privacy Policy, and Beta NDA in place.

**Stack:**

| Layer | Technologies |
| :--- | :--- |
| Frontend | React · TypeScript · Tailwind CSS |
| Persistence | localStorage · SQLite |
| Deployment | GitHub + Vercel |

**Outcome:**
Currently in private beta with insurance agents and a small consumer cohort. Beta feedback is shaping the v1 release roadmap.

---

### Project 04: Trusted Future / Horizon Capital

**Status:** Live · Ongoing

**Overview:**
In-house technologist for an Experior Financial Group practice serving an organization of 500+ insurance agents in the Indexed Universal Life space. Owns the practice's web presence, education content, and agent-facing software.

**What it does:**
- Built and maintains patriciageiger.com (Lovable.dev → GitHub → Vercel, Namecheap DNS).
- Produces IUL education content and interactive financial tools — compound interest calculators, 401(k) vs IUL comparisons, long-form blog content.
- Designs and delivers Friday Night Mastermind curricula, blending business systems thinking with financial education.
- Develops agent-facing software including the Agent Blueprint 2026 planning app — a React + Alpine.js wizard with localStorage persistence, pipeline math, and full design-system branding.
- Designed the Trusted Future visual identity (Deep Navy / Warm Gold / Cream) and applies it across web, print, and presentation materials.
- Built the AgentLink platform (ProspectPipelines, ProspectLink) — initial release shipped, currently being re-architected as part of a broader CRM modernization effort.

**Stack:**

| Layer | Technologies |
| :--- | :--- |
| Frontend | React · Alpine.js · Next.js · Tailwind |
| Tooling | Lovable.dev · GitHub · Vercel · Namecheap DNS |
| Brand system | Deep Navy / Warm Gold / Cream |

**Outcome:** Three years and counting. Active across web, content, software, and brand.

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
Azure, AWS, Vercel. GitHub Actions, Azure DevOps, Jenkins. Docker, Kubernetes.

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

**First Place — 1992 Software Developers Competition**
Windows Application category

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
