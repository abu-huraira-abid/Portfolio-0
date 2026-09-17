import { motion } from "framer-motion";
import { MapPin, Briefcase, Code2, GraduationCap, Globe, Calendar } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const quickFacts = [
  { icon: <MapPin size={18} />, label: "Location", value: personalInfo.location },
  { icon: <Briefcase size={18} />, label: "Experience", value: personalInfo.experience },
  { icon: <Code2 size={18} />, label: "Current Role", value: "Lead Software Engineer" },
  { icon: <GraduationCap size={18} />, label: "Education", value: `${personalInfo.education[0].degree} — ${personalInfo.education[0].field}` },
  { icon: <Calendar size={18} />, label: "Graduation", value: personalInfo.education[0].year },
  { icon: <Globe size={18} />, label: "Languages", value: personalInfo.languages.map((l) => l.name).join(", ") },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.div variants={fadeUp} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#3b82f6]/60" />
              <span className="text-sm font-medium tracking-wide text-[#3b82f6]">About</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Building <span className="gradient-text">production software</span> with precision
            </h2>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-5">
            <motion.div variants={fadeUp} className="lg:col-span-3 space-y-5">
              <p className="text-[18px] leading-[1.8] text-[#a0a0b8]">
                {personalInfo.summary}
              </p>
              <p className="text-[18px] leading-[1.8] text-[#5a5a72]">
                Specializing in end-to-end product development — from pixel-perfect
                frontend interfaces to scalable backend architectures. Passionate about
                AI-powered automation and building tools that solve real problems.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-2">
              <div className="glass-card p-6">
                <h3 className="mb-5 text-sm font-semibold tracking-wider uppercase text-[#5a5a72]">Quick Facts</h3>
                <div className="space-y-4">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="flex items-start gap-3">
                      <div className="mt-0.5 text-[#3b82f6]/70">{fact.icon}</div>
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-[#5a5a72]">{fact.label}</p>
                        <p className="text-sm font-medium text-[#f0f0f5]">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
