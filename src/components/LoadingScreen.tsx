import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps { isLoading: boolean; }

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#06060b]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="text-center">
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Spinning ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: "conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)", filter: "blur(16px)", opacity: 0.3 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="relative flex h-24 items-center justify-center rounded-full border border-white/[0.08] bg-[#0c0c14] px-8"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, duration: 0.5, ease: "backOut" }}
              >
                <span className="text-2xl font-bold gradient-text">Huraira</span>
              </motion.div>
            </motion.div>

            <motion.div className="mt-6 space-y-1.5" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <h2 className="text-base font-semibold text-white">Abu Huraira Abid</h2>
              <p className="text-xs text-[#5a5a72]">Full-Stack Software Engineer</p>
            </motion.div>

            <motion.div className="mx-auto mt-6 h-px w-40 overflow-hidden rounded-full bg-white/[0.06]"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              <motion.div className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #3b82f6, #06b6d4, #8b5cf6)" }}
                initial={{ width: "0%" }} animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "easeInOut", delay: 0.2 }} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
