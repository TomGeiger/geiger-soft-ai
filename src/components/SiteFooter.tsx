export const SiteFooter = () => {
  return (
    <footer className="bg-surface border-t hairline mt-32">
      <div className="container py-12 grid gap-8 md:grid-cols-2 items-start">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/60">
            Thomas Geiger · 30+ Years Full-Stack
          </p>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
            <a href="https://linkedin.com/in/tomgeigernc" target="_blank" rel="noreferrer" className="text-foreground/45 hover:text-accent">LinkedIn</a>
            <a href="https://github.com/TomGeiger" target="_blank" rel="noreferrer" className="text-foreground/45 hover:text-accent">GitHub</a>
            <a href="mailto:tom.geiger@me.com" className="text-foreground/45 hover:text-accent">Email</a>
          </div>
        </div>
        <div className="md:text-right font-mono text-xs text-foreground/45">
          <p className="text-foreground/60">geigersoft.com</p>
          <p className="mt-2">© 2026 Geigersoft Consulting</p>
        </div>
      </div>
    </footer>
  );
};
