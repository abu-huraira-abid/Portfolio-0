import TechOrbit, { type OrbitItem } from "./TechOrbit";

const technologies: OrbitItem[] = [
  { name: "React", category: "Frontend Engineering" },
  { name: "Node.js", category: "Backend Engineering" },
  { name: "Python", category: "Backend Engineering" },
  { name: "TypeScript", category: "Frontend Engineering" },
  { name: "Django", category: "Backend Engineering" },
  { name: "n8n", category: "AI & Automation" },
  { name: "Laravel", category: "Backend Engineering" },
  { name: "PostgreSQL", category: "Database" },
];
export default function HeroScene() {
  return <TechOrbit items={technologies} portrait label="Technologies I work with" />;
}
