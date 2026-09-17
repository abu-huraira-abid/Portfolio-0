import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { experiences } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function ExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 40%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#06b6d4]/60" />
              <span className="text-sm font-medium tracking-wide text-[#06b6d4]">Experience</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional <span className="gradient-text">Journey</span>
            </h2>
          </div>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line - draws on scroll */}
          <div className="absolute top-0 bottom-0 left-6 md:left-8 w-px bg-white/[0.04]">
            <motion.div
              className="w-full bg-gradient-to-b from-[#3b82f6] via-[#06b6d4] to-[#8b5cf6]"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-6">
            {experiences.map((experience, experienceIndex) => {
              const isCurrent = experience.status === "Current";
              return (
                <div key={experience.role} className="relative pl-16 md:pl-20">
                  <div className="absolute left-4 top-8 md:left-6">
                    <motion.div
                      className={`flex h-5 w-5 items-center justify-center rounded-full bg-[#06060b] border-2 ${isCurrent ? "border-[#3b82f6]" : "border-[#06b6d4]/70"}`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + experienceIndex * 0.12, type: "spring", stiffness: 300 }}
                    >
                      <div className={`h-2 w-2 rounded-full ${isCurrent ? "bg-[#3b82f6]" : "bg-[#06b6d4]"}`} />
                    </motion.div>
                  </div>

                  <motion.div
                    className={`glass-card p-6 md:p-8 ${isCurrent ? "border-[#3b82f6]/20" : ""}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + experienceIndex * 0.1, duration: 0.6 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-3">
                          <Briefcase size={18} className="text-[#3b82f6]" />
                          <h3 className="text-xl font-bold tracking-tight text-white">{experience.role}</h3>
                        </div>
                        <p className="mt-1.5 text-sm text-[#a0a0b8]">{experience.company} · {experience.location}</p>
                      </div>
                      <div className="flex w-fit items-center gap-2 rounded-lg bg-[#3b82f6]/[0.08] px-3 py-1.5 text-xs font-semibold text-[#60a5fa]">
                        {isCurrent && <span className="h-1.5 w-1.5 rounded-full bg-[#3b82f6] animate-pulse" />}
                        {experience.dates}
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      {experience.bullets.map((bullet, bulletIndex) => (
                        <motion.div
                          key={bullet}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + experienceIndex * 0.1 + bulletIndex * 0.08 }}
                        >
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-[#06b6d4]" />
                          <p className="text-[14px] leading-relaxed text-[#a0a0b8]">{bullet}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
