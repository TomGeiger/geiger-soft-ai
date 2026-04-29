import { useState } from "react";
import { Layout } from "@/components/Layout";
import { NodeGraph } from "@/components/NodeGraph";
import { TerminalLabel } from "@/components/TerminalLabel";
import { CtaButton } from "@/components/CtaButton";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in name, email, and message.");
      return;
    }
    setSubmitting(true);
    // V1: open a mailto draft so messages reach Tom immediately without a backend.
    const subject = encodeURIComponent(`Geigersoft inquiry — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "—"}\n\n${form.message}`,
    );
    window.location.href = `mailto:tom.geiger@me.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your email client…");
    }, 300);
  };

  const fieldCls =
    "w-full bg-transparent border hairline-strong px-4 py-3.5 text-foreground placeholder:text-foreground/40 font-sans text-sm outline-none focus:border-accent transition-colors rounded-sm";
  const labelCls = "font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60";

  return (
    <Layout>
      <section className="relative border-b hairline overflow-hidden">
        <NodeGraph opacity={0.18} seed={31} />
        <div className="absolute inset-0 radial-glow" />
        <div className="container relative py-20 lg:py-28">
          <TerminalLabel>contact</TerminalLabel>
          <h1 className="mt-6 font-display font-bold text-5xl lg:text-7xl">
            Let's <span className="text-gradient">talk.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/62 font-light leading-relaxed">
            Available for AI/LLM development, MCP server work, voice AI engineering, and full-stack builds for financial services firms. Also open to senior engineering and technical leadership roles.
          </p>
        </div>
      </section>

      <section className="container py-24 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Direct */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <p className={labelCls}>Direct</p>
              <ul className="mt-6 space-y-4">
                <li className="flex justify-between gap-4 border-b hairline pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">Email</span>
                  <a href="mailto:tom.geiger@me.com" className="text-foreground hover:text-accent transition-colors">tom.geiger@me.com</a>
                </li>
                <li className="flex justify-between gap-4 border-b hairline pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">Phone</span>
                  <a href="tel:+19192710609" className="text-foreground hover:text-accent transition-colors">(919) 271-0609</a>
                </li>
                <li className="flex justify-between gap-4 border-b hairline pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">Location</span>
                  <span className="text-foreground">Raleigh, NC</span>
                </li>
              </ul>
            </div>

            <div>
              <p className={labelCls}>Elsewhere</p>
              <ul className="mt-6 space-y-4">
                <li className="flex justify-between gap-4 border-b hairline pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">LinkedIn</span>
                  <a href="https://linkedin.com/in/tomgeigernc" target="_blank" rel="noreferrer" className="text-foreground hover:text-accent transition-colors">linkedin.com/in/tomgeigernc</a>
                </li>
                <li className="flex justify-between gap-4 border-b hairline pb-3">
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">GitHub</span>
                  <a href="https://github.com/TomGeiger" target="_blank" rel="noreferrer" className="text-foreground hover:text-accent transition-colors">github.com/TomGeiger</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="lg:col-span-7 border hairline p-8 lg:p-10 bg-surface space-y-6">
            <div>
              <label htmlFor="name" className={labelCls}>Name</label>
              <input id="name" required className={`${fieldCls} mt-2`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="email" className={labelCls}>Email</label>
              <input id="email" type="email" required className={`${fieldCls} mt-2`} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div>
              <label htmlFor="company" className={labelCls}>Company <span className="text-foreground/40 normal-case tracking-normal">(optional)</span></label>
              <input id="company" className={`${fieldCls} mt-2`} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
            </div>
            <div>
              <label htmlFor="message" className={labelCls}>What can I help with?</label>
              <textarea id="message" required rows={6} className={`${fieldCls} mt-2 resize-y`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>
            <div className="pt-2">
              <CtaButton type="submit" onClick={() => { /* native form submit handles it */ }}>
                {submitting ? "Sending…" : "Send Message"}
              </CtaButton>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
              // typical response time: within one business day
            </p>
          </form>
        </div>
      </section>

      {/* Closing visual */}
      <section className="relative h-48 border-t hairline overflow-hidden">
        <NodeGraph opacity={0.22} seed={77} nodeCount={32} />
      </section>
    </Layout>
  );
};

export default Contact;
