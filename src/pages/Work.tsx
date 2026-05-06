import { Layout } from "@/components/Layout";
import { NodeGraph } from "@/components/NodeGraph";
import { TerminalLabel } from "@/components/TerminalLabel";
import { CtaButton } from "@/components/CtaButton";

interface ProjectDetail {
  id: string;
  num: string;
  name: string;
  status: string;
  overview: string;
  bullets: string[];
  stack: { label: string; items: string }[];
  outcome: string;
  roadmap?: string;
}

const details: ProjectDetail[] = [
  {
    id: "voice-coach",
    num: "01",
    name: "TTF Fast Start Voice Coach",
    status: "POC complete · Phase 2 roadmap in progress",
    overview:
      "An AI voice agent that answers onboarding questions for new insurance agents over the phone. Designed for Team Trusted Future, a Trusted Future / Horizon Capital practice within the Experior Financial Group, to scale Fast Start program coaching without requiring 1:1 trainer time.",
    bullets: [
      "Answers natural-language phone questions about the 90-day Fast Start program — training schedule, Top 25 prospecting system, Required-2 Protocol, invite scripts, product basics, and promotion ladder — by retrieving from 11 markdown source documents.",
      "Implements a custom RAG pipeline: chunks docs by markdown headings (## / ###), builds an in-memory TF-IDF index with stopword filtering, and ranks results with squared IDF weighting to surface the most relevant chunk per query.",
      "Defines a search_documents SWAIG tool the LLM calls during conversation; results are summarized in the agent's voice rather than read verbatim.",
      "Configured a warm, concise voice persona with domain-specific speech hints (Experior, IUL, BTO, SFA, etc.) to improve transcription accuracy on industry jargon.",
      "Auto-detects the local ngrok tunnel on startup and prints the authenticated SWML webhook URL for the SignalWire dashboard.",
      "Captures every call as a JSON transcript with an LLM-generated post-call summary covering topics discussed and unanswered questions.",
      "Enforces conversational boundaries — redirects commission, compliance, and client-specific questions to human trainers instead of fabricating answers.",
    ],
    stack: [
      { label: "Voice infrastructure", items: "SignalWire AgentBase SDK · SWAIG · Rime TTS" },
      { label: "Backend", items: "TypeScript · Node.js · ngrok" },
      { label: "Retrieval", items: "Custom TF-IDF over markdown source docs" },
    ],
    outcome:
      "Working POC that proves phone → AI persona → knowledge retrieval → on-brand response. Demoed live at a Friday Mastermind session and received positive reception from agents.",
    roadmap:
      "CRM integration · caller-ID stage lookup · SMS document delivery · pgvector for vector retrieval · multi-tenant routing.",
  },
  {
    id: "iul-pro-analyzer",
    num: "02",
    name: "IUL Pro Analyzer",
    status: "In Development",
    overview:
      "An AI-powered MCP server purpose-built for Indexed Universal Life policy analysis, comparison, and client consultation. Twenty-five-plus tools spanning policy projections, side-by-side comparisons, consultation flows, and automated presentation generation.",
    bullets: [
      "Loads carrier illustrations and policy data into structured, queryable form.",
      "Runs side-by-side comparisons across multiple policy designs.",
      "Produces client-ready presentation materials from raw illustration data.",
      "Exposes 25+ specialized tools through the Model Context Protocol so any MCP-compatible client (including Claude Desktop) can drive analysis through natural-language conversation.",
    ],
    stack: [
      { label: "AI", items: "Anthropic Claude API · Model Context Protocol" },
      { label: "Backend", items: "TypeScript · Node.js" },
      { label: "Domain", items: "Indexed Universal Life policy mechanics" },
    ],
    outcome:
      "Active development. Currently exploring SaaS deployment at iulproanalyzer.com with active beta testing inside Patricia Geiger's practice.",
  },
  {
    id: "clearcount",
    num: "03",
    name: "ClearCount",
    status: "In Beta",
    overview:
      "A financial clarity SaaS platform with a dual-audience design — built for both insurance agents and individual consumers. Local-first architecture means data stays on the user's machine until they explicitly export.",
    bullets: [
      "Smart CSV import with automatic transaction categorization.",
      "Dual experience layer: agents see pipeline-relevant tagging, consumers see budget categories.",
      "Local-first persistence (localStorage / SQLite) — no server-side data storage required.",
      "Full PRD, Terms of Service, Privacy Policy, and Beta NDA in place.",
    ],
    stack: [
      { label: "Frontend", items: "React · TypeScript · Tailwind CSS" },
      { label: "Persistence", items: "localStorage · SQLite" },
      { label: "Deployment", items: "GitHub + Vercel" },
    ],
    outcome:
      "Currently in private beta with insurance agents and a small consumer cohort. Beta feedback is shaping the v1 release roadmap.",
  },
  {
    id: "trusted-future",
    num: "04",
    name: "Trusted Future / Horizon Capital",
    status: "Live · Ongoing",
    overview:
      "In-house technologist for an Experior Financial Group practice serving an organization of 500+ insurance agents in the Indexed Universal Life space. Owns the practice's web presence, education content, and agent-facing software.",
    bullets: [
      "Built and maintains patriciageiger.com (Lovable.dev → GitHub → Vercel, Namecheap DNS).",
      "Produces IUL education content and interactive financial tools — compound interest calculators, 401(k) vs IUL comparisons, long-form blog content.",
      "Designs and delivers Friday Night Mastermind curricula, blending business systems thinking with financial education.",
      "Develops agent-facing software including the Agent Blueprint 2026 planning app — a React + Alpine.js wizard with localStorage persistence, pipeline math, and full design-system branding.",
      "Designed the Trusted Future visual identity (Deep Navy / Warm Gold / Cream) and applies it across web, print, and presentation materials.",
      "Built the AgentLink platform (ProspectPipelines, ProspectLink) — initial release shipped, currently being re-architected as part of a broader CRM modernization effort.",
    ],
    stack: [
      { label: "Frontend", items: "React · Alpine.js · Next.js · Tailwind" },
      { label: "Tooling", items: "Lovable.dev · GitHub · Vercel · Namecheap DNS" },
      { label: "Brand system", items: "Deep Navy / Warm Gold / Cream" },
    ],
    outcome: "Three years and counting. Active across web, content, software, and brand.",
  },
];

const Work = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative border-b hairline overflow-hidden">
        <NodeGraph opacity={0.18} seed={11} />
        <div className="container relative py-20 lg:py-28">
          <TerminalLabel>work</TerminalLabel>
          <h1 className="mt-6 font-display font-bold text-4xl lg:text-6xl max-w-4xl leading-[1.05]">
            Current builds. <span className="text-foreground/62">In production or actively shipping.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-foreground/62 text-lg font-light">
            Four projects spanning voice AI, MCP servers, dual-audience SaaS, and a long-running agency relationship for an insurance practice — each a different angle on the same specialty.
          </p>
        </div>
      </section>

      {/* Sticky anchor nav */}
      <nav className="sticky top-16 z-40 bg-background/85 backdrop-blur border-b hairline">
        <div className="container flex gap-x-8 gap-y-2 overflow-x-auto py-4 font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">
          {details.map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(d.id);
                if (!el) return;
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                history.replaceState(null, "", `#${d.id}`);
              }}
              className="whitespace-nowrap hover:text-accent transition-colors"
            >
              {d.num} / {d.name.split(" ").slice(0, 3).join(" ")}
            </a>
          ))}
        </div>
      </nav>

      {/* Project sections */}
      <div className="container">
        {details.map((d, idx) => (
          <section
            key={d.id}
            id={d.id}
            className={`scroll-mt-32 py-20 lg:py-28 ${idx > 0 ? "border-t hairline" : ""}`}
          >
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <div className="font-mono text-5xl lg:text-6xl text-accent">{d.num}</div>
                <span className="mt-6 inline-block font-mono text-[10px] uppercase tracking-[0.16em] text-accent border hairline-strong px-2.5 py-1 rounded-sm">
                  {d.status}
                </span>
              </div>
              <div className="lg:col-span-9">
                <h2 className="font-display font-bold text-3xl lg:text-5xl leading-[1.05]">{d.name}</h2>
                <p className="mt-8 text-foreground/80 text-lg leading-relaxed font-light">{d.overview}</p>

                <div className="mt-12">
                  <TerminalLabel>what-it-does</TerminalLabel>
                  <ul className="mt-6 space-y-4">
                    {d.bullets.map((b, i) => (
                      <li key={i} className="flex gap-4 text-foreground/62 leading-relaxed">
                        <span className="mt-2 h-px w-4 shrink-0 bg-accent/60" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-12">
                  <TerminalLabel>stack</TerminalLabel>
                  <div className="mt-6 border hairline divide-y divide-accent/10">
                    {d.stack.map((s) => (
                      <div key={s.label} className="grid grid-cols-1 md:grid-cols-3 gap-2 p-5">
                        <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{s.label}</div>
                        <div className="md:col-span-2 text-foreground/62">{s.items}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 grid gap-10 md:grid-cols-2">
                  <div>
                    <TerminalLabel>outcome</TerminalLabel>
                    <p className="mt-4 text-foreground/62 leading-relaxed">{d.outcome}</p>
                  </div>
                  {d.roadmap && (
                    <div>
                      <TerminalLabel>phase-2-roadmap</TerminalLabel>
                      <p className="mt-4 text-foreground/62 leading-relaxed">{d.roadmap}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="container pb-8">
        <div className="border hairline p-10 lg:p-14 bg-surface flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
          <div>
            <TerminalLabel>next-steps</TerminalLabel>
            <h2 className="mt-4 font-display font-semibold text-2xl lg:text-3xl">Want to build something like this?</h2>
          </div>
          <CtaButton to="/contact">Start a Conversation</CtaButton>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
