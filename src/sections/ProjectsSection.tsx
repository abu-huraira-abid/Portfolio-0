import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Filter } from "lucide-react";
import ProjectDetails from "../components/ProjectDetails";
import { projects, type Project, type ProjectCategory } from "../data/portfolio";

const categories: ProjectCategory[] = ["Full-Stack", "Frontend", "AI Automation", "Integrations", "Mobile"];

const categoryColors: Record<ProjectCategory, string> = {
  "Full-Stack": "#3b82f6",
  Frontend: "#06b6d4",
  "AI Automation": "#ec4899",
  Integrations: "#f59e0b",
  Mobile: "#10b981",
};

const gradients = [
  "linear-gradient(135deg, #0a0f1a 0%, #162032 40%, #0a0f1a 100%)",
  "linear-gradient(135deg, #0a0f1a 0%, #1a1632 40%, #0a0f1a 100%)",
  "linear-gradient(135deg, #0a0f1a 0%, #162a20 40%, #0a0f1a 100%)",
  "linear-gradient(135deg, #0a0f1a 0%, #2a1a16 40%, #0a0f1a 100%)",
  "linear-gradient(135deg, #0a0f1a 0%, #162a32 40%, #0a0f1a 100%)",
  "linear-gradient(135deg, #0a0f1a 0%, #201632 40%, #0a0f1a 100%)",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const reduceMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, opacity: 1 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0c0c14] transition-all duration-300 hover:border-white/[0.12]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, opacity: 0 }))}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      animate={{ rotateX: reduceMotion ? 0 : (50 - spotlight.y) * .045 * spotlight.opacity, rotateY: reduceMotion ? 0 : (spotlight.x - 50) * .045 * spotlight.opacity }}
      style={{ transformPerspective: 1000 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      layout
      exit={{ opacity: 0, scale: .95 }}
    >
      {/* Spotlight effect */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${spotlight.x}% ${spotlight.y}%, rgba(59,130,246,0.06), transparent 60%)`,
          opacity: spotlight.opacity,
        }}
      />

      {/* Abstract visual */}
      <div className="relative h-44 overflow-hidden" style={{ background: gradients[index % gradients.length] }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-5 right-5 h-20 w-20 rounded-full"
            style={{ background: `radial-gradient(circle, ${categoryColors[project.category]}30, transparent)` }} />
          <div className="absolute bottom-8 left-8 h-10 w-10 rounded-xl rotate-45 border"
            style={{ borderColor: `${categoryColors[project.category]}20` }} />
          <div className="absolute top-1/2 left-1/3 h-14 w-14 rounded-full border"
            style={{ borderColor: `${categoryColors[project.category]}15` }} />
        </div>

        <div className="project-stack-art" aria-hidden="true"><span className="project-art-label">{project.productType}</span><div className="project-art-chain">{project.techStack.slice(0, 3).map((tech, i) => <div key={tech}><span>0{i + 1}</span><strong>{tech}</strong></div>)}</div><span className="project-art-caption">{project.industry}</span></div>
        <div className="absolute top-3 right-3 z-20">
          <span className="rounded-md px-2.5 py-1 text-[11px] font-semibold"
            style={{ background: `${categoryColors[project.category]}15`, color: categoryColors[project.category] }}>
            {project.category}
          </span>
        </div>

        {project.status === "working" && (
          <div className="absolute top-3 left-3 z-20">
            <span className="flex items-center gap-1.5 rounded-md bg-amber-500/10 px-2.5 py-1 text-[11px] font-semibold text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              In Progress
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-20 p-5">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-lg font-bold text-white tracking-tight">{project.name}</h3>
          <ArrowUpRight size={16} className="mt-1 text-[#5a5a72] transition-all group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-xs font-medium text-[#5a5a72] mb-2">{project.industry} · {project.productType}</p>
        <p className="text-[13px] leading-relaxed text-[#a0a0b8] mb-4 line-clamp-2">{project.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-[#a0a0b8]">
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-[#5a5a72]">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[11px] font-medium text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Live <ExternalLink size={10} />
            </a>
          )}
        </div>
        <button className="project-details-button" onClick={onOpen}>Explore project <ArrowUpRight size={15} /></button>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "All">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);
  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#06b6d4]/60" />
              <span className="text-sm font-medium tracking-wide text-[#06b6d4]">Projects</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Featured <span className="gradient-text">Work</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <Filter size={14} className="text-[#5a5a72]" />
            {(["All", ...categories] as const).map((cat) => (
              <motion.button
                key={cat}
                aria-pressed={activeFilter === cat}
                onClick={() => { setActiveFilter(cat); setShowAll(false); }}
                className={`rounded-lg px-3 py-1.5 text-[13px] font-medium transition-all ${
                  activeFilter === cat ? "bg-white/[0.08] text-white" : "text-[#5a5a72] hover:text-[#a0a0b8]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {displayed.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} onOpen={() => setSelectedProject(project)} />
              ))}
            </AnimatePresence>
          </div>

          {/* View All */}
          {filtered.length > 6 && !showAll && (
            <motion.div className="mt-10 text-center">
              <motion.button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white/[0.15] hover:bg-white/[0.06]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View All {filtered.length} Projects
                <ArrowUpRight size={14} />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
      {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
