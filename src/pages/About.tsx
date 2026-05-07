import { Layout } from "@/components/Layout";
import { NodeGraph } from "@/components/NodeGraph";
import { TerminalLabel } from "@/components/TerminalLabel";
import { CtaButton } from "@/components/CtaButton";
import { Brain, Code2, Server, Cloud, LineChart, ShieldCheck, Users } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI & LLM Engineering",
    body: "Claude API integration, prompt engineering, agentic workflows. Built and shipped MCP servers including a 25-tool IUL policy analysis platform. Daily user of Claude Code and AI-augmented development workflows.",
  },
  {
    icon: Code2,
    title: "Modern Web Development",
    body: "React, Next.js, Vue, Astro, TypeScript, Tailwind CSS. Vercel and GitHub-based CI/CD. Rapid prototyping with Lovable.dev. Deep Angular experience (v5–v17) including Material, NGRX, and RxJS.",
  },
  {
    icon: Server,
    title: "Backend & Enterprise",
    body: ".NET / C# / ASP.NET MVC / Web API, Node.js, Python. REST and OData API design. SQL Server, Azure SQL, MongoDB, RavenDB.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "Azure, AWS, Vercel. GitHub Actions, Azure DevOps, Jenkins. Docker.",
  },
  {
    icon: LineChart,
    title: "Financial Services Domain",
    body: "Indexed Universal Life (IUL) product knowledge, illustration analysis, and policy comparison. Insurance agent tooling, pipeline management, CRM integration. Financial education content and interactive tools.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated Industries",
    body: "FDA 21 CFR Part 11 (electronic records and signatures), HIPAA-compliant systems, pharmaceutical clinical trials applications.",
  },
  {
    icon: Users,
    title: "Leadership",
    body: "Technical lead and mentor across multiple engineering teams. Founded and operated multiple ventures. Cross-functional collaboration with UX, backend, QA, and product.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="relative border-b hairline overflow-hidden">
        <NodeGraph opacity={0.2} seed={5} />
        <div className="absolute inset-0 radial-glow" />
        <div className="container relative py-24 lg:py-32">
          <TerminalLabel>about</TerminalLabel>
          <h1 className="mt-6 font-display font-bold text-5xl lg:text-7xl max-w-4xl leading-[1.02]">
            30 years of building. <span className="text-gradient">Three decades of shipping.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/62 font-light leading-relaxed">
            I'm Thomas Geiger — a senior software engineer based in Raleigh, NC. I've spent three decades shipping production software across enterprise, regulated industries, and now AI for financial services. Geigersoft is how I do that work today: independent, hands-on, and deeply technical.
          </p>
        </div>
      </section>

      {/* Arc */}
      <section className="container py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <TerminalLabel>the-arc</TerminalLabel>
          </div>
          <div className="lg:col-span-9 space-y-6 text-lg text-foreground/80 font-light leading-relaxed max-w-3xl">
            <p>
              I started professionally in 1992 — and won First Place at the 1992 Software Developers Competition (Windows category) shortly after. That competition set the tone for what's been a career-long obsession with shipping real software, not impressive demos.
            </p>
            <p>
              The next two decades were enterprise full-stack work spanning C++, .NET, Angular, and React. Engagements at Ford Motor Company, MetLife Japan, Genworth Financial, Willkie Farr &amp; Gallagher, and Liberty Healthcare — building systems that had to be correct, auditable, and maintainable for years after I left.
            </p>
            <p>
              Along the way I founded multiple ventures, including a software consultancy specializing in FDA 21 CFR Part 11–compliant pharmaceutical applications. Regulated industries taught me how to think about provenance, signatures, and the audit trail beneath everything an application does.
            </p>
            <p>
              Today, Geigersoft is focused at the intersection of AI and financial services — building MCP servers, voice agents, and SaaS platforms backed by deep insurance domain expertise. The tools change. The discipline of shipping real, trustworthy software does not.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t hairline bg-surface">
        <div className="container py-24 lg:py-32">
          <TerminalLabel>capabilities</TerminalLabel>
          <h2 className="mt-6 font-display font-semibold text-4xl lg:text-5xl max-w-3xl">
            Core capabilities.
          </h2>
          {(() => {
            const firstRow = capabilities.slice(0, 4);
            const secondRow = capabilities.slice(4);
            const renderCard = (c: typeof capabilities[number]) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.title}
                  className="bg-background p-8 hover:bg-surface transition-colors border hairline w-full sm:w-[calc((100%-1px)/2)] lg:w-[calc((100%-3px)/4)]"
                >
                  <Icon className="text-accent" size={22} strokeWidth={1.5} />
                  <h3 className="mt-5 font-display font-semibold text-lg">{c.title}</h3>
                  <p className="mt-3 text-sm text-foreground/62 leading-relaxed">{c.body}</p>
                </article>
              );
            };
            return (
              <div className="mt-16 space-y-px">
                <div className="flex flex-wrap justify-start gap-px bg-accent/10">
                  {firstRow.map(renderCard)}
                </div>
                <div className="flex flex-wrap justify-center gap-px bg-accent/10">
                  {secondRow.map(renderCard)}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Education */}
      <section className="container py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <TerminalLabel>education-recognition</TerminalLabel>
          </div>
          <div className="lg:col-span-9 space-y-6">
            <div className="border-l-2 border-accent/40 pl-6">
              <h3 className="font-display font-semibold text-lg">BSEE, Computer Science emphasis</h3>
              <p className="mt-1 text-foreground/62">Polytechnic University of New York · December 1991</p>
              <p className="mt-1 font-mono text-xs text-foreground/45">Now NYU Tandon School of Engineering (merged with NYU in 2008)</p>
            </div>
            <div className="border-l-2 border-accent/40 pl-6">
              <h3 className="font-display font-semibold text-lg">Graduate Coursework — Object-Oriented Languages and Systems</h3>
              <p className="mt-1 text-foreground/62">Smalltalk · C++ · Eiffel · OODB</p>
              <p className="mt-1 font-mono text-xs text-foreground/45">North Carolina State University</p>
            </div>
            <div className="border-l-2 border-accent/40 pl-6">
              <h3 className="font-display font-semibold text-lg">Selected Coursework — OOA, OOD, OOP in C++</h3>
              <p className="mt-1 text-foreground/62">Wake Technical Community College</p>
            </div>
            <div className="border-l-2 border-accent/40 pl-6">
              <h3 className="font-display font-semibold text-lg">First Place — 1992 Software Developers Competition</h3>
              <p className="mt-1 text-foreground/62">Windows Application category</p>
            </div>
            <div className="border-l-2 border-accent/40 pl-6">
              <h3 className="font-display font-semibold text-lg">Professional Affiliations</h3>
              <p className="mt-1 text-foreground/62">IEEE · TriNUG · Council for Entrepreneurial Development (CED)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t hairline bg-surface">
        <div className="container py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <TerminalLabel>philosophy</TerminalLabel>
            </div>
            <div className="lg:col-span-9 space-y-6 text-lg text-foreground/80 font-light leading-relaxed max-w-3xl">
              <p>I write production code that ships, not prototypes that demo. Demos are easy; production is where the work actually is — error handling, telemetry, deployment, the second release.</p>
              <p>I believe in domain depth. The best engineering happens when you understand the business as well as the codebase. For me right now, that means knowing IUL mechanics, agent compensation, illustration math, and the regulatory ground beneath insurance.</p>
              <p>I aim for senior-grade collaboration: direct, kind, focused on outcomes. No theater, no hand-waving — just the work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t hairline">
        <NodeGraph opacity={0.16} seed={99} />
        <div className="container relative py-24 text-center">
          <h2 className="font-display font-semibold text-3xl lg:text-4xl">Want to talk?</h2>
          <div className="mt-8 flex justify-center">
            <CtaButton to="/contact">Get In Touch</CtaButton>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
