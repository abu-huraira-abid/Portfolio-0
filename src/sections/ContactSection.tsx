import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, CheckCircle, AlertCircle, ArrowUpRight } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { Github, Linkedin } from "../components/Icons";

interface FormData { name: string; email: string; subject: string; message: string; }
interface FormStatus { type: "success" | "error" | null; message: string; }

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Invalid email";
    if (!formData.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const subject = formData.subject.trim() || `Portfolio inquiry from ${formData.name.trim()}`;
      const body = `${formData.message.trim()}\n\nFrom: ${formData.name.trim()}\nEmail: ${formData.email.trim()}`;
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus({ type: "success", message: "Your email app has been requested. Send the draft there to complete your message. If it did not open, use the email link on the left." });
    } catch {
      setStatus({ type: "error", message: "Failed to send. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="section-container relative z-10">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}>
          <motion.div variants={fadeUp} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#3b82f6]/60" />
              <span className="text-sm font-medium tracking-wide text-[#3b82f6]">Contact</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="mt-3 max-w-lg text-[15px] text-[#5a5a72]">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Contact Info */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-4">
              {[
                { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                { icon: <Phone size={18} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
                { icon: <Linkedin size={18} />, label: "LinkedIn", value: "Connect on LinkedIn", href: personalInfo.linkedin, external: true },
                { icon: <Github size={18} />, label: "GitHub", value: "View Profile", href: personalInfo.github, external: true },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="glass-card group flex items-center gap-4 p-4 transition-all hover:border-white/[0.12]"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3b82f6]/[0.08] text-[#3b82f6]">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#5a5a72]">{item.label}</p>
                    <p className="text-sm font-medium text-[#f0f0f5]">{item.value}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-[#5a5a72] transition-all group-hover:text-[#3b82f6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card space-y-5 p-6">
                <p className="text-xs text-[#a0a0b8]">Compose your inquiry here, then send it from your email app.</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#5a5a72]">Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#3b82f6]/50 ${errors.name ? "border-red-500/40" : "border-white/[0.06]"}`}
                      placeholder="Your name" />
                    {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#5a5a72]">Email *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      className={`w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#3b82f6]/50 ${errors.email ? "border-red-500/40" : "border-white/[0.06]"}`}
                      placeholder="your@email.com" />
                    {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#5a5a72]">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange}
                    className="w-full rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#3b82f6]/50"
                    placeholder="Project inquiry" />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-[#5a5a72]">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5}
                    className={`w-full resize-none rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-[#5a5a72] focus:border-[#3b82f6]/50 ${errors.message ? "border-red-500/40" : "border-white/[0.06]"}`}
                    placeholder="Tell me about your project..." />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                {status.type && (
                  <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm ${status.type === "success" ? "bg-emerald-500/[0.08] text-emerald-400" : "bg-red-500/[0.08] text-red-400"}`}>
                    {status.type === "success" ? <CheckCircle size={15} /> : <AlertCircle size={15} />}
                    {status.message}
                  </motion.div>
                )}

                <motion.button type="submit" disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2563eb] disabled:opacity-50"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(59,130,246,0.25)" }}
                  whileTap={{ scale: 0.98 }}>
                  {isSubmitting ? <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" /> : <><Send size={15} /> Open Email Draft</>}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
