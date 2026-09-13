import { motion } from "framer-motion";
import { Award, Trophy, Medal, GraduationCap, Star, BookOpen } from "lucide-react";
import { achievements, personalInfo } from "../data/portfolio";

const achievementIcons = [
  <Star key="s1" size={18} />,
  <Star key="s2" size={18} />,
  <Medal key="m" size={18} />,
  <Award key="a" size={18} />,
  <BookOpen key="b" size={18} />,
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.div variants={fadeUp} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#d4a853]/60" />
              <span className="text-sm font-medium tracking-wide text-[#d4a853]">Achievements</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Awards & <span className="gradient-text">Education</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Achievements */}
            <motion.div variants={fadeUp}>
              <h3 className="mb-6 flex items-center gap-2 text-base font-semibold text-white">
                <Trophy size={18} className="text-[#d4a853]" />
                Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((ach, i) => (
                  <motion.div
                    key={ach.id}
                    className="glass-card award-card group flex items-center gap-4 p-4 transition-all hover:border-[#d4a853]/[0.15]"
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d4a853]/[0.08] text-[#d4a853]">
                      {achievementIcons[i] || <Award size={18} />}
                    </div>
                    <p className="text-sm font-medium text-[#f0f0f5]">{ach.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeUp}>
              <h3 className="mb-6 flex items-center gap-2 text-base font-semibold text-white">
                <GraduationCap size={18} className="text-[#8b5cf6]" />
                Education
              </h3>
              <div className="glass-card p-6">
                {personalInfo.education.map((edu, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8b5cf6]/[0.08]">
                      <GraduationCap size={22} className="text-[#8b5cf6]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white tracking-tight">{edu.degree} in {edu.field}</h4>
                      <p className="mt-1 text-sm text-[#a0a0b8]">{edu.institution}</p>
                      <p className="mt-0.5 text-xs text-[#5a5a72]">Expected: {edu.year}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-6 border-t border-white/[0.04] pt-6">
                  <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-[#5a5a72]">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {personalInfo.languages.map((lang) => (
                      <span key={lang.name} className="rounded-lg bg-white/[0.03] border border-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#a0a0b8]">
                        {lang.name} <span className="text-[#5a5a72]">· {lang.level}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
