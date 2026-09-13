import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills, projects, type SkillCategory } from "../../data/portfolio";
import ProjectDetails from "../ProjectDetails";
import TechOrbit, { type OrbitItem } from "./TechOrbit";

// Split grouped technologies while preserving CI/CD and their source category.
const individualSkills = skills.flatMap(skill => skill.name.split(" / ").map(name => ({ ...skill, name })));

export default function SkillGalaxy({ activeCategory }: { activeCategory: SkillCategory | null }) {
  const [selectedSkill, setSelectedSkill] = useState<OrbitItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const selection = selectedSkill && (!activeCategory || selectedSkill.category === activeCategory) ? selectedSkill : null;
  const related = selection ? projects.filter(project => project.techStack.some(tech => tech.toLowerCase() === selection.name.toLowerCase())) : [];
  const visibleSkills = useMemo(() => individualSkills.filter(skill => !activeCategory || skill.category === activeCategory), [activeCategory]);
  return <div className="skill-universe">
    <div className="skill-universe-heading" aria-live="polite"><div><span className="orbit-eyebrow">EXPLORE MY STACK</span><h3>{activeCategory || "All Technologies"}</h3></div><span className="orbit-count">{visibleSkills.length} skills</span></div>
    <AnimatePresence mode="wait"><motion.div className="skill-universe-scene" key={activeCategory || "all"} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.25 }}><TechOrbit onSelect={setSelectedSkill} items={visibleSkills} label={activeCategory || "All technologies"} /></motion.div></AnimatePresence>
    {selection && <div className="skill-evidence" aria-live="polite"><strong>{selection.name}</strong><span>{related.length ? "Explore related projects" : "Project experience"}</span>{related.length ? <div>{related.map(project => <button key={project.id} onClick={() => setSelectedProject(project)}>{project.name} ↗</button>)}</div> : <p>{selection.evidence || selection.category}</p>}</div>}
    <p className="skill-universe-hint">Click a skill to explore its project experience</p>
    {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </div>;
}
