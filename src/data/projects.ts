export interface Project {
  id: string;
  num: string;
  name: string;
  status: string;
  short: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    id: "voice-coach",
    num: "01",
    name: "TTF Fast Start Voice Coach",
    status: "POC",
    short:
      "AI voice agent that answers onboarding questions for new insurance agents over the phone. Custom RAG pipeline (markdown-aware chunking, TF-IDF retrieval) over 11 source documents, exposed to the LLM via SignalWire SWAIG. Demoed live at Mastermind Friday; Phase 2 roadmap includes CRM integration and pgvector.",
    stack: ["TypeScript", "Node.js", "SignalWire AgentBase SDK", "Rime TTS"],
  },
  {
    id: "iul-pro-analyzer",
    num: "02",
    name: "IUL Pro Analyzer",
    status: "IN DEVELOPMENT",
    short:
      "AI-powered MCP server with 25+ tools for Indexed Universal Life policy analysis, comparisons, and client consultation. Built on the Anthropic Claude API and Model Context Protocol.",
    stack: ["TypeScript", "Anthropic MCP", "Claude API", "Node.js"],
  },
  {
    id: "clearcount",
    num: "03",
    name: "ClearCount",
    status: "IN BETA",
    short:
      "Financial clarity SaaS platform with a dual-audience design — insurance agents and consumers. Local-first architecture using localStorage / SQLite, CSV import, and smart categorization.",
    stack: ["React", "TypeScript", "Tailwind", "GitHub + Vercel"],
  },
  {
    id: "trusted-future",
    num: "04",
    name: "Trusted Future / Horizon Capital",
    status: "LIVE · ONGOING",
    short:
      "In-house technologist for an Experior Financial Group practice serving a 500+ agent organization. Web platform, education content, agent-facing planning tools, full visual identity system.",
    stack: ["React", "Next.js", "Lovable.dev → GitHub → Vercel"],
  },
];
