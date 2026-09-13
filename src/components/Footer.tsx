import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { Github, Linkedin } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.04] bg-[#06060b] py-10">
      <div className="section-container px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            {[
              { Icon: <Github size={16} />, href: personalInfo.github, label: "GitHub" },
              { Icon: <Linkedin size={16} />, href: personalInfo.linkedin, label: "LinkedIn" },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.06] text-[#5a5a72] transition-colors hover:border-white/[0.12] hover:text-[#a0a0b8]"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={s.label}
              >
                {s.Icon}
              </motion.a>
            ))}
          </div>
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
          <div className="text-center">
            <p className="text-[13px] text-[#5a5a72]">&copy; {year} {personalInfo.name}. All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center gap-1 text-[11px] text-[#5a5a72]/60">
              Built with <Heart size={10} className="text-[#ec4899]" /> React, TypeScript &amp; Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
