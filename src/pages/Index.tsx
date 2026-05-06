import { ExternalLink } from "lucide-react";
import { Layout } from "@/components/Layout";
import { NodeGraph } from "@/components/NodeGraph";
import { TerminalLabel } from "@/components/TerminalLabel";
import { CtaButton } from "@/components/CtaButton";
import { projects } from "@/data/projects";

const stackBlocks = [
  { label: "AI", items: "Claude API · MCP Servers · RAG Pipelines" },
  { label: "Voice", items: "SignalWire · SWAIG · Rime TTS" },
  { label: "Web", items: "React · Next.js · TypeScript" },
  { label: "Domain", items: "IUL · Insurance · Agent Tooling" },
];

const pastClients = "Ford Motor Co. · MetLife Japan · Genworth Financial · Willkie Farr";

const engagements: Array<{ name: string; body: string; href?: string }> = [
  {
    name: "TenXTL",
    body: "Sustainability technology. Code analysis, developer training platform, Data Platform API architecture proposal. Built the complete TenXTL Developer Academy — a 14-module React/TypeScript/Tailwind training site.",
    href: "https://tenxtl-developer-academy.vercel.app/",
  },
  {
    name: "Trusted Future Agent Platform",
    body: "Agent Blueprint 2026 (React + Alpine.js wizard), AgentLink platform with ProspectPipelines and ProspectLink, IUL education content, mastermind curricula.",
  },
];

const approach = [
  {
    n: "01",
    title: "Senior engineer, not a junior team.",
    body: "Thirty-plus years of full-stack experience. You're working with the person who's writing the code, not a layer of project management above one.",
  },
  {
    n: "02",
    title: "Domain literacy.",
    body: "Indexed Universal Life products, agent compensation structures, illustration analysis, FDA 21 CFR Part 11 — I understand the financial and regulatory ground underneath what I build.",
  },
  {
    n: "03",
    title: "Production-grade, not prototypes.",
    body: "Real CI/CD, real test coverage, real deployments. Past clients include Ford Motor Company, MetLife Japan, Genworth Financial, and Willkie Farr & Gallagher.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden border-b hairline">
        <div className="absolute inset-0 radial-glow" />
        <NodeGraph opacity={0.22} />
        <div className="absolute inset-0 scanlines opacity-60" />

        <div className="container relative grid gap-16 py-24 lg:grid-cols-5 lg:py-32">
          <div className="lg:col-span-3 animate-fade-in">
            <TerminalLabel cursor>ai-tools-for-financial-services</TerminalLabel>
            <h1 className="mt-8 font-display font-bold leading-[1.02] text-5xl sm:text-6xl lg:text-7xl">
              Production AI,
              <br />
              <span className="text-gradient">Built to Ship.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg font-light text-foreground/62 leading-relaxed">
              MCP servers, voice AI agents, and SaaS platforms — engineered for insurance and financial services with 30 years of full-stack depth behind every deployment.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CtaButton to="/work" variant="primary">See My Work</CtaButton>
              <CtaButton to="/contact" variant="secondary">Get In Touch</CtaButton>
            </div>
          </div>

          <div className="lg:col-span-2 lg:pl-8 lg:border-l hairline animate-fade-in">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
              Stack &amp; Capabilities
            </p>
            <ul className="mt-6 space-y-0">
              {stackBlocks.map((b) => (
                <li key={b.label} className="py-4 border-b hairline first:border-t">
                  <div className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{b.label}</div>
                  <div className="mt-1.5 text-sm text-foreground/62">{b.items}</div>
                </li>
              ))}
            </ul>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/45">
              Past Clients
            </p>
            <p className="mt-3 font-mono text-xs text-foreground/45 leading-relaxed">{pastClients}</p>
          </div>
        </div>
      </section>

      {/* WHAT I BUILD */}
      <section className="container py-24 lg:py-32">
        <TerminalLabel>what-i-build</TerminalLabel>
        <h2 className="mt-6 font-display font-semibold text-4xl lg:text-5xl max-w-3xl">
          Four production builds. One specialty.
        </h2>
        <p className="mt-6 max-w-2xl text-foreground/62 text-lg font-light">
          Geigersoft is independent technical consulting focused on the intersection of AI and financial services. The builds below are live or in active development.
        </p>

        <div className="mt-16 grid gap-px bg-accent/10 sm:grid-cols-2 border hairline auto-rows-fr items-stretch">
          {projects.map((p) => (
            <article
              key={p.id}
              className="relative bg-background p-8 lg:p-10 group overflow-hidden transition-colors hover:bg-surface flex flex-col h-full"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <NodeGraph opacity={0.12} seed={Number(p.num) * 11} nodeCount={14} />
              </div>
              <div className="relative flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-semibold text-2xl">{p.name}</h3>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-accent border hairline-strong px-2.5 py-1 rounded-sm">
                    {p.status}
                  </span>
                </div>
                <p className="mt-5 text-foreground/62 leading-relaxed">{p.short}</p>
                <div className="mt-auto pt-6 border-t hairline font-mono text-xs text-foreground/45">
                  {p.stack.join(" · ")}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton to="/work" variant="secondary">Read the Deep Dives</CtaButton>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-t hairline bg-surface">
        <div className="container py-24 lg:py-32">
          <TerminalLabel>approach</TerminalLabel>
          <h2 className="mt-6 font-display font-semibold text-4xl lg:text-5xl max-w-3xl">
            Engineering with domain fluency.
          </h2>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {approach.map((a) => (
              <div key={a.n}>
                <div className="font-mono text-xs text-accent tracking-[0.18em]">{a.n}</div>
                <h3 className="mt-4 font-display font-semibold text-xl">{a.title}</h3>
                <p className="mt-4 text-foreground/62 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="container py-24 lg:py-32">
        <TerminalLabel>engagements</TerminalLabel>
        <h2 className="mt-6 font-display font-semibold text-4xl lg:text-5xl max-w-3xl">
          Selected recent work.
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {engagements.map((e) => {
            const cardClass =
              "group relative border hairline p-8 bg-surface/40 hover:bg-surface transition-colors";
            const content = (
              <>
                <h3 className="font-display font-semibold text-lg pr-8">{e.name}</h3>
                {e.href && (
                  <ExternalLink
                    className="absolute top-6 right-6 h-4 w-4 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                )}
                <p className="mt-4 text-foreground/62 leading-relaxed text-sm">{e.body}</p>
              </>
            );
            return e.href ? (
              <a
                key={e.name}
                href={e.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} block hover:border-accent/30`}
              >
                {content}
              </a>
            ) : (
              <article key={e.name} className={cardClass}>
                {content}
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t hairline">
        <NodeGraph opacity={0.18} seed={42} nodeCount={28} />
        <div className="absolute inset-0 radial-glow" />
        <div className="container relative py-24 lg:py-32">
          <TerminalLabel>next-steps</TerminalLabel>
          <h2 className="mt-6 font-display font-semibold text-4xl lg:text-5xl max-w-3xl leading-[1.05]">
            Building something at the intersection of finance and AI?
          </h2>
          <p className="mt-6 max-w-2xl text-foreground/62 text-lg font-light">
            Available for technical engagements — particularly AI/LLM development, MCP server work, voice AI, and full-stack builds for financial services firms.
          </p>
          <div className="mt-10">
            <CtaButton to="/contact">Start a Conversation</CtaButton>
          </div>
          <p className="mt-8 font-mono text-xs text-foreground/45 uppercase tracking-[0.18em]">
            // Currently scheduling for Q3 2026 engagements
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
