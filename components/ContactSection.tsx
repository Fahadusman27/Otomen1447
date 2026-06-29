"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2, X } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

function Toast({ show, onClose }: { show: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-24 right-6 z-50 flex items-center gap-4 px-6 py-4 bg-slate-800 border border-green-500/30 rounded-2xl shadow-2xl shadow-black/50 backdrop-blur-xl max-w-sm"
        >
          <CheckCircle2 size={22} className="text-green-400 flex-shrink-0" />
          <div>
            <p className="text-white font-semibold text-sm">Message Sent!</p>
            <p className="text-white/50 text-xs mt-0.5">
              We&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-2 text-white/30 hover:text-white/70 transition-colors"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a brief processing delay then show success toast
    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setShowToast(false), 5000);
    }, 1200);
  };

  const inputClass =
    "w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-red-500/60 focus:bg-white/8 transition-all duration-300";

  return (
    <>
      <section
        id="contact"
        className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
      >
        {/* Background accents */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/6 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-red-500" />
              <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">
                Let&apos;s Talk
              </span>
              <div className="w-8 h-px bg-red-500" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Drive?
              </span>
            </h2>
            <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
              Our team is standing by to help you find your perfect car.
              Reach out and we&apos;ll respond within one business day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Visit our showroom or reach out through any channel below.
                  We&apos;re available 6 days a week, 9AM – 7PM.
                </p>
              </div>

              {/* Contact Cards */}
              {[
                { icon: Phone, label: "Phone", value: COMPANY_INFO.phone, href: `tel:${COMPANY_INFO.phone}` },
                { icon: Mail, label: "Email", value: COMPANY_INFO.email, href: `mailto:${COMPANY_INFO.email}` },
                { icon: MapPin, label: "Address", value: COMPANY_INFO.address, href: "#" },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 p-5 bg-white/4 border border-white/8 rounded-2xl hover:bg-white/7 hover:border-red-500/20 transition-all duration-300 group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-11 h-11 bg-red-500/15 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/25 transition-all duration-300">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-1">
                      {label}
                    </p>
                    <p className="text-white/80 text-sm font-medium">{value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                id="contact-form"
                className="p-8 lg:p-10 bg-white/3 backdrop-blur-xl border border-white/8 rounded-2xl space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white/50 text-xs font-semibold tracking-widest uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for — preferred make, model, budget, or any questions..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-red-500/25 hover:shadow-red-500/40 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={!loading ? { scale: 1.02, y: -1 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? (
                    <svg className="animate-spin w-5 h-5 text-white/70" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-white/25 text-xs text-center">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer strip */}
        <div className="mt-24 border-t border-white/5 pt-8">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-sm">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-white/25 text-sm">
              Crafted with passion for automotive excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Toast Notification */}
      <Toast show={showToast} onClose={() => setShowToast(false)} />
    </>
  );
}
