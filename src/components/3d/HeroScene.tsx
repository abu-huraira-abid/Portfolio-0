import TechOrbit, { type OrbitItem } from "./TechOrbit";

const technologies: OrbitItem[] = [
  { name: "Python", category: "Python & Backend" },
  { name: "FastAPI", category: "Python & Backend" },
  { name: "Django", category: "Python & Backend" },
  { name: "LangChain", category: "AI, GenAI & RAG" },
  { name: "AI Agents", category: "AI, GenAI & RAG" },
  { name: "React", category: "Frontend (React & Next.js)" },
  { name: "Next.js", category: "Frontend (React & Next.js)" },
  { name: "n8n", category: "Workflow Automation" },
  { name: "PostgreSQL", category: "Databases & Async" },
];
export default function HeroScene() {
  return <TechOrbit items={technologies} portrait label="Core Python, AI, React, and Workflow Automation technologies" />;
}
