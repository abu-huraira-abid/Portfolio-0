import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  Code2, Server, Link, Smartphone, Database, Brain, Cloud, Wrench,
} from "lucide-react";
import { skills, skillCategories, type SkillCategory } from "../data/portfolio";

const SkillGalaxy = lazy(() => import("../components/3d/SkillGalaxy"));

const categoryIcons: Record<SkillCategory, React.ReactNode> = {
  "Frontend Engineering": <Code2 size={16} />,
  "Backend Engineering": <Server size={16} />,
  "APIs & Integrations": <Link size={16} />,
  "Mobile Development": <Smartphone size={16} />,
  Database: <Database size={16} />,
  "AI & Automation": <Brain size={16} />,
  "Cloud & Deployment": <Cloud size={16} />,
  "Development Tools": <Wrench size={16} />,
};

const categoryColors: Record<SkillCategory, string> = {
  "Frontend Engineering": "#3b82f6",
  "Backend Engineering": "#06b6d4",
  "APIs & Integrations": "#8b5cf6",
  "Mobile Development": "#10b981",
  Database: "#f59e0b",
  "AI & Automation": "#ec4899",
  "Cloud & Deployment": "#14b8a6",
  "Development Tools": "#6366f1",
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | null>(null);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)" }} />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#8b5cf6]/60" />
            <span className="text-sm font-medium tracking-wide text-[#8b5cf6]">Skills</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mt-3 max-w-lg text-[15px] text-[#5a5a72]">
            Technologies I use to build production software and AI automation.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid gap-8 lg:grid-cols-5 items-start">
          {/* Left - Category selector + skill chips */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* All button */}
            <motion.button
              aria-pressed={activeCategory === null}
              onClick={() => setActiveCategory(null)}
              className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                activeCategory === null
                  ? "border-[#3b82f6]/30 bg-[#3b82f6]/[0.08] text-white"
                  : "border-white/[0.05] bg-white/[0.02] text-[#5a5a72] hover:text-[#a0a0b8] hover:border-white/[0.1]"
              }`}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05]">
                <div className="h-2 w-2 rounded-full bg-[#3b82f6]" />
              </div>
              <div>
                <p className="text-sm font-semibold">All Technologies</p>
                <p className="text-[11px] text-[#5a5a72]">Show everything</p>
              </div>
            </motion.button>

            {skillCategories.map((cat, i) => {
              const isActive = activeCategory === cat;
              const color = categoryColors[cat];
              return (
                <motion.button
                  key={cat}
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(isActive ? null : cat)}
                  className={`w-full flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all ${
                    isActive
                      ? "border-white/[0.12] bg-white/[0.05] text-white"
                      : "border-white/[0.05] bg-white/[0.02] text-[#5a5a72] hover:text-[#a0a0b8] hover:border-white/[0.1]"
                  }`}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors"
                    style={{ background: `${color}15`, color: isActive ? color : undefined }}
                  >
                    {categoryIcons[cat]}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{cat}</p>
                  </div>
                </motion.button>
              );
            })}

            {/* Skill chips for active category */}
            {activeCategory && (
              <motion.div
                className="flex flex-wrap gap-2 pt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {skills.filter(skill => skill.category === activeCategory).flatMap(skill => skill.name.split(" / ")).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border px-3 py-1.5 text-xs font-medium"
                    style={{
                      borderColor: `${categoryColors[activeCategory]}25`,
                      background: `${categoryColors[activeCategory]}08`,
                      color: categoryColors[activeCategory],
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </motion.div>
            )}
          </motion.div>

          {/* Right - 3D Galaxy */}
          <motion.div
            className="lg:col-span-3 h-[560px] sm:h-[620px] lg:h-[730px] relative min-w-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Fallback for no WebGL */}
            <noscript>
              <div className="flex h-full items-center justify-center text-[#5a5a72] text-sm">
                Enable JavaScript to view the interactive skill galaxy.
              </div>
            </noscript>

            <Suspense fallback={
              <div className="flex h-full items-center justify-center">
                <div className="h-12 w-12 animate-spin rounded-full border-2 border-[#8b5cf6]/30 border-t-[#8b5cf6]" />
              </div>
            }>
              <SkillGalaxy activeCategory={activeCategory} />
            </Suspense>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
