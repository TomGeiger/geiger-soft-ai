interface TerminalLabelProps {
  children: React.ReactNode;
  cursor?: boolean;
  className?: string;
}

export const TerminalLabel = ({ children, cursor = false, className = "" }: TerminalLabelProps) => {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.18em] text-accent ${cursor ? "cursor-blink" : ""} ${className}`}
    >
      <span className="text-foreground/45">//</span> {children}
    </span>
  );
};
