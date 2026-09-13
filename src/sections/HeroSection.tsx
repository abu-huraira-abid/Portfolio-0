import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { Github, Linkedin } from "../components/Icons";

const HeroScene = lazy(() => import("../components/3d/HeroScene"));

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 2.8 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const featuredSkills = [
  "React", "Django", "Node.js", "Laravel", "React Native", "n8n", "PostgreSQL", "TypeScript",
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Subtle background glows */}
      <div className="pointer-events-none absolute top-[15%] left-[5%] h-[500px] w-[500px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)" }} />
      <div className="pointer-events-none absolute top-[25%] right-[10%] h-[400px] w-[400px] rounded-full opacity-25"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)" }} />

      <div className="section-container relative z-10 px-5 sm:px-8 grid min-h-screen items-center gap-8 pt-20 pb-12 md:grid-cols-2 md:gap-4 lg:gap-8">
        {/* Left - Text content */}
        <motion.div className="flex flex-col gap-7 z-10" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <div className="h-px w-10 bg-[#3b82f6]/60" />
            <span className="text-sm font-medium tracking-wide text-[#3b82f6]">{personalInfo.location}</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.5rem]">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2 variants={fadeUp} className="text-lg font-medium text-[#a0a0b8] sm:text-xl">
            {personalInfo.title}
          </motion.h2>

          <motion.p variants={fadeUp} className="max-w-xl text-[15px] leading-relaxed text-[#5a5a72]">
            Building production web &amp; mobile apps, backend APIs, third-party
            integrations, and AI automation workflows. Full-stack engineer with{" "}
            {personalInfo.experience} of professional experience.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            <motion.a href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2563eb]"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(59,130,246,0.3)" }}
              whileTap={{ scale: 0.97 }}>
              <ExternalLink size={15} /> View Projects
            </motion.a>
            <motion.a href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/[0.15] hover:bg-white/[0.06]"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Mail size={15} /> Get in Touch
            </motion.a>
            <motion.a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[46px] w-[46px] rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#a0a0b8] transition-all hover:border-white/[0.15] hover:text-white"
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} aria-label="GitHub">
              <Github size={18} />
            </motion.a>
            <motion.a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[46px] w-[46px] rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#a0a0b8] transition-all hover:border-white/[0.15] hover:text-white"
              whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.92 }} aria-label="LinkedIn">
              <Linkedin size={18} />
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
            {featuredSkills.map((skill) => (
              <span key={skill} className="skill-chip text-[#a0a0b8]">{skill}</span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - 3D Scene with transparent portrait */}
        <motion.div
          className="relative flex items-center justify-center h-[420px] sm:h-[500px] lg:h-[600px] min-w-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 3, duration: 1, ease: "easeOut" }}
        >
          <Suspense fallback={
            <div className="flex h-full items-center justify-center">
              <div className="h-16 w-16 animate-spin rounded-full border-2 border-[#3b82f6]/30 border-t-[#3b82f6]" />
            </div>
          }>
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 0.6 }}>
        <motion.a href="#about"
          className="flex flex-col items-center gap-2 text-[#5a5a72] transition-colors hover:text-[#3b82f6]"
          animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity }}
          aria-label="Scroll">
          <span className="text-[11px] font-medium tracking-wider uppercase">Scroll</span>
          <ArrowDown size={14} />
        </motion.a>
      </motion.div>
    </section>
  );
}
