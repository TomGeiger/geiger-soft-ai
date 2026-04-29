import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

interface CtaButtonProps {
  to?: string;
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center px-7 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] rounded-sm transition-colors duration-200 select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-primary-foreground hover:bg-accent2",
  secondary:
    "bg-transparent text-foreground border hairline-strong hover:bg-accent/10",
};

export const CtaButton = ({
  to,
  href,
  variant = "primary",
  children,
  className = "",
  type = "button",
  onClick,
}: CtaButtonProps) => {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button type={type} className={cls} onClick={onClick}>{children}</button>;
};
