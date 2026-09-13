import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Pause, Play, Code2, Database, Cloud, Workflow, GitBranch, Smartphone, Braces } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { type SkillCategory } from "../../data/portfolio";

const categoryColors: Record<SkillCategory, string> = {
  "Frontend Engineering": "#61dafb", "Backend Engineering": "#6ee7b7",
  "APIs & Integrations": "#a78bfa", "Mobile Development": "#38bdf8",
  Database: "#fbbf24", "AI & Automation": "#fb7185",
  "Cloud & Deployment": "#2dd4bf", "Development Tools": "#a5b4fc",
};
export interface OrbitItem { name: string; category: SkillCategory; evidence?: string }

function TechMark({ item }: { item: OrbitItem }) {
  if (/React/.test(item.name)) return <svg viewBox="-12 -12 24 24" width="25" height="25" fill="none" stroke="currentColor" aria-hidden="true"><circle r="1.8" fill="currentColor" stroke="none" />{[0, 60, 120].map(angle => <ellipse key={angle} rx="11" ry="4.3" transform={`rotate(${angle})`} strokeWidth="1.1" />)}</svg>;
  const marks: Record<string, string> = { "Node.js": "JS", "TypeScript": "TS", "JavaScript": "JS", "Python": "Py", "Django": "dj", "PHP": "php", "Laravel": "L", "Next.js": "N", "n8n": "n8n", "AWS": "aws" };
  if (marks[item.name]) return <span className={`tech-letter ${item.name === "Node.js" ? "tech-hex" : ""}`}>{marks[item.name]}</span>;
  const Icon = item.category === "Database" ? Database : item.category === "Cloud & Deployment" ? Cloud : item.category === "AI & Automation" || item.category === "APIs & Integrations" ? Workflow : item.category === "Development Tools" ? GitBranch : item.category === "Mobile Development" ? Smartphone : item.category === "Backend Engineering" ? Braces : Code2;
  return <Icon size={23} strokeWidth={1.6} aria-hidden="true" />;
}

/** Perspective-projected orbits keep labels upright and work without WebGL. */
export default function TechOrbit({ items, portrait = false, label, onSelect }: { items: OrbitItem[]; portrait?: boolean; label: string; onSelect?: (item: OrbitItem) => void }) {
  const root = useRef<HTMLDivElement>(null);
  const chains = useRef<(SVGPathElement | null)[]>([]);
  const nodes = useRef<(HTMLLIElement | null)[]>([]);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const time = useRef(0);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    let frame = 0;
    let last = 0;
    let visible = true;
    let width = el.clientWidth;
    let height = el.clientHeight;
    const draw = () => {
      const ringCount = portrait ? 2 : items.length > 12 ? 3 : items.length > 5 ? 2 : 1;
      const paths: string[][] = Array.from({ length: ringCount }, () => []);
      nodes.current.forEach((node, i) => {
        if (!node || i >= items.length) return;
        const ring = i % ringCount;
        const count = Math.ceil((items.length - ring) / ringCount);
        const slot = Math.floor(i / ringCount);
        const angle = slot / count * Math.PI * 2 + ring * 0.85 + time.current * (ring % 2 ? -0.16 : 0.13);
        const radius = portrait ? width * (0.35 + ring * 0.045) : width * (0.19 + ring * 0.095);
        const ry = portrait ? height * (0.24 + ring * 0.065) : height * (0.20 + ring * 0.095);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * ry;
        const z = Math.sin(angle + ring * 0.65) * (portrait ? 95 : 65);
        paths[ring].push(`${x + width / 2},${y + height / 2}`);
        const scale = 1 + z / 650;
        node.style.transform = `translate3d(${x}px, ${y}px, ${z}px) scale(${scale})`;
        node.style.zIndex = z > 0 ? "5" : "1";
        node.style.opacity = String(portrait ? z > 0 ? 1 : 0.65 : 0.76 + (z + 65) / 550);
      });
      chains.current.forEach((path, i) => path?.setAttribute("d", paths[i]?.length > 2 ? `M ${paths[i].join(" L ")} Z` : ""));
    };
    const tick = (now: number) => {
      if (last && visible && !document.hidden && !paused && !hovered && !reduceMotion) time.current += Math.min((now - last) / 1000, 0.05);
      last = now;
      if (visible) draw();
      frame = requestAnimationFrame(tick);
    };
    const resize = new ResizeObserver(() => { width = el.clientWidth; height = el.clientHeight; draw(); });
    resize.observe(el);
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    observer.observe(el);
    draw();
    if (!reduceMotion && !paused) frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); resize.disconnect(); observer.disconnect(); };
  }, [items, portrait, paused, hovered, reduceMotion]);

  return <div ref={root} className={`tech-orbit ${portrait ? "tech-orbit--hero" : "tech-orbit--skills"}`} aria-label={label}>
    <div className="orbit-aura" aria-hidden="true" />
    <div className="orbit-path orbit-path--one" aria-hidden="true" />
    <div className="orbit-path orbit-path--two" aria-hidden="true" />
    {!portrait && <div className="orbit-path orbit-path--three" aria-hidden="true" />}
    {portrait ? <div className="orbit-portrait"><img src={`${import.meta.env.BASE_URL}img2.png`} alt="Abu Huraira Abid" fetchPriority="high" /><div className="portrait-base" /></div> : <div className="orbit-core" aria-hidden="true"><Code2 size={25} /><span>TECH<br />STACK</span></div>}
    <svg className="orbit-chains" aria-hidden="true">{[0, 1, 2].map(i => <path key={i} ref={node => { chains.current[i] = node; }} />)}</svg>
    <ul className="orbit-nodes" aria-label={label}>
      {items.map((item, i) => <li key={`${item.category}-${item.name}`} ref={node => { nodes.current[i] = node; }} className="orbit-node" style={{ "--tech-color": categoryColors[item.category] } as CSSProperties}>
        <button type="button" className="tech-badge" onClick={() => onSelect?.(item)} onMouseEnter={() => setHovered(item.name)} onMouseLeave={() => setHovered(null)} onFocus={() => setHovered(item.name)} onBlur={() => setHovered(null)} aria-label={`${item.name} — ${item.category}`}>
          <span className="tech-symbol"><TechMark item={item} /></span><span className="tech-name">{item.name}</span>
        </button>
      </li>)}
    </ul>
    {!reduceMotion && <button type="button" className="orbit-pause" onClick={() => setPaused(!paused)} aria-label={paused ? "Play technology animation" : "Pause technology animation"}>{paused ? <Play size={13} /> : <Pause size={13} />}{paused ? "Play" : "Pause"}</button>}
    {portrait && <div className="portrait-caption"><span /> Available for opportunities</div>}
  </div>;
}
