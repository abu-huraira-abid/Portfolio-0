import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`
    );
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: "transform 0.2s ease-out",
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.8, duration: 0.8, ease: "easeOut" }}
    >
      {/* Ambient glow - cyan/violet */}
      <div
        className="absolute -inset-10 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.25) 0%, rgba(139,92,246,0.15) 50%, transparent 70%)",
        }}
      />

      {/* Glass card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c14]/80 backdrop-blur-xl p-0.5">
        {/* Conic border glow */}
        <div
          className="absolute inset-0 rounded-3xl opacity-30"
          style={{
            background:
              "conic-gradient(from 180deg, transparent, rgba(6,182,212,0.12), transparent, rgba(139,92,246,0.08), transparent)",
          }}
        />

        <div className="relative rounded-[22px] overflow-hidden bg-[#0c0c14]">
          {/* Top accent line */}
          <div
            className="h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, #06b6d4, #8b5cf6, transparent)",
            }}
          />

          {/* Transparent portrait */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[#0a0f1a] to-[#0c0c14]">
            <img
              src="/img2.png"
              alt="Abu Huraira Abid"
              className="w-full aspect-[4/5] object-cover object-top"
              style={{ mixBlendMode: "normal" }}
            />
            {/* Bottom fade */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0c0c14] to-transparent" />
          </div>

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400">
                Available for work
              </span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Abu Huraira Abid
            </h3>
            <p className="text-sm text-[#a0a0b8] mt-0.5">
              Full-Stack Software Engineer
            </p>
            <p className="text-xs text-[#5a5a72] mt-1">Lahore, Pakistan</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
