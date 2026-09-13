import { useEffect, useRef } from "react";
import { ExternalLink, X, Layers, UserRound } from "lucide-react";
import type { Project } from "../data/portfolio";

export default function ProjectDetails({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = dialog.current;
    const previous = document.activeElement as HTMLElement | null;
    el?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { el?.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={dialog} onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }} className="project-dialog" aria-labelledby="project-title">
    <div className="project-dialog-inner">
      <button autoFocus className="dialog-close" onClick={onClose} aria-label="Close project details"><X size={20} /></button>
      <span className="showcase-eyebrow">{project.industry} / {project.category}</span>
      <h2 id="project-title">{project.name}</h2><p className="dialog-subtitle">{project.productType}</p>
      <div className="dialog-block"><h3>What it does</h3><p>{project.description}</p></div>
      <div className="dialog-block"><h3><UserRound size={16} /> My contribution</h3><p>{project.role}</p></div>
      <div className="dialog-block"><h3><Layers size={16} /> Technology stack</h3><div className="flex flex-wrap gap-2">{project.techStack.map(tech => <span className="skill-chip" key={tech}>{tech}</span>)}</div></div>
      <div className="dialog-footer"><span>{project.status === "working" ? "In development" : "Project portfolio"}</span>{project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">Visit project <ExternalLink size={15} /></a>}</div>
    </div>
  </dialog>;
}
