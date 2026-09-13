import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navigation() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(
    navLinks.map((l) => l.href.replace("#", ""))
  );

  const handleLinkClick = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-[#06060b]/70 backdrop-blur-2xl"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 2.5, ease: "easeOut" }}
    >
      <div className="section-container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <motion.a href="#home" className="flex items-center gap-2" whileHover={{ scale: 1.02 }}>
          <span className="text-lg font-bold tracking-tight gradient-text">Huraira</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <motion.a
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                  isActive ? "text-white" : "text-[#5a5a72] hover:text-[#a0a0b8]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-white/[0.05]"
                    layoutId="activeNav"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-40 bg-[#06060b]/95 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-1 pt-8">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`w-full py-3 text-center text-base font-medium transition-colors ${
                      isActive ? "text-white" : "text-[#5a5a72]"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
