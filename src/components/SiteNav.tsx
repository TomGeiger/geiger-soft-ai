import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b hairline transition-colors ${
        scrolled ? "bg-background/80 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="block h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent)/0.6)]" />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-foreground">
            Geigersoft
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-accent" : "text-foreground/45 hover:text-foreground/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-foreground/70 hover:text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t hairline bg-background/95 backdrop-blur">
          <nav className="container flex flex-col py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `py-3 font-mono text-xs uppercase tracking-[0.18em] ${
                    isActive ? "text-accent" : "text-foreground/60"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
