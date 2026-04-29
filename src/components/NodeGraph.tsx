import { useMemo } from "react";

interface NodeGraphProps {
  className?: string;
  nodeCount?: number;
  seed?: number;
  opacity?: number;
}

// Deterministic pseudo-random so SSR/hydration stays stable.
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const NodeGraph = ({
  className = "",
  nodeCount = 23,
  seed = 7,
  opacity = 0.22,
}: NodeGraphProps) => {
  const { nodes, edges } = useMemo(() => {
    const rand = mulberry32(seed);
    const w = 1200;
    const h = 800;
    const pts = Array.from({ length: nodeCount }, () => ({
      x: rand() * w,
      y: rand() * h,
    }));
    const eds: Array<[number, number]> = [];
    for (let i = 0; i < pts.length; i++) {
      // connect to 2 nearest neighbors
      const dists = pts
        .map((p, j) => ({ j, d: Math.hypot(p.x - pts[i].x, p.y - pts[i].y) }))
        .filter((x) => x.j !== i)
        .sort((a, b) => a.d - b.d)
        .slice(0, 2);
      for (const { j } of dists) {
        const key: [number, number] = i < j ? [i, j] : [j, i];
        if (!eds.some((e) => e[0] === key[0] && e[1] === key[1])) eds.push(key);
      }
    }
    return { nodes: pts, edges: eds };
  }, [nodeCount, seed]);

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ opacity }}
    >
      <g stroke="hsl(var(--accent))" strokeWidth="1" fill="none">
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            strokeOpacity="0.35"
          />
        ))}
      </g>
      <g fill="hsl(var(--accent))">
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={2.2} />
        ))}
      </g>
    </svg>
  );
};
