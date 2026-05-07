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
      "Four-module financial clarity SaaS for insurance agents, CPAs, and consumers — commission tracking, household finance, CPA portal, and consumer onboarding. Local-first, ~12K+ LOC, 280 TypeScript/TSX modules.",
    stack: ["React", "TypeScript", "shadcn/ui", "Vitest", "GitHub + Vercel"],
  },
  {
    id: "trusted-future",
    num: "04",
    name: "Trusted Future / Horizon Capital",
    status: "LIVE · ONGOING",
    short:
      "In-house technologist for an Experior Financial Group practice serving a 500+ agent organization. Horizon Capital platform: ~40K LOC, 230 TypeScript modules, 23 Postgres migrations, 220+ commits over 16 months.",
    stack: ["React 18", "TypeScript", "Vite", "Vercel Postgres", "Upstash Redis"],
  },
];
