"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  BadgeCheck,
  RefreshCw,
  Landmark,
  Wrench,
  Shield,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  BadgeCheck,
  RefreshCw,
  Landmark,
  Wrench,
  Shield,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Decorative blob */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-red-600/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-700/20 rounded-full blur-3xl" />
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
              What We Offer
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Services &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Products
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg leading-relaxed">
            From your first inquiry to years of after-sales care — we cover
            every aspect of your automotive journey with excellence.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                id={`service-card-${service.id}`}
                className={`relative group rounded-2xl p-8 border transition-all duration-500 cursor-default overflow-hidden ${
                  service.highlight
                    ? "bg-gradient-to-br from-red-600/20 to-red-900/10 border-red-500/30 md:col-span-2 lg:col-span-1"
                    : "bg-white/3 border-white/8 hover:bg-white/6 hover:border-white/15"
                }`}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
              >
                {/* Highlight badge */}
                {service.highlight && (
                  <span className="absolute top-6 right-6 px-2.5 py-1 bg-red-500 text-white text-xs font-bold rounded-full tracking-wide">
                    Featured
                  </span>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    service.highlight
                      ? "bg-red-500/20 border border-red-500/30 group-hover:bg-red-500/30"
                      : "bg-white/5 border border-white/10 group-hover:bg-red-600/10 group-hover:border-red-500/20"
                  }`}
                >
                  {Icon && (
                    <Icon
                      size={24}
                      className={
                        service.highlight ? "text-red-400" : "text-white/60 group-hover:text-red-400 transition-colors duration-300"
                      }
                    />
                  )}
                </div>

                <h3 className="text-white font-bold text-xl mb-3">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow on hover */}
                <div className="mt-6 flex items-center gap-2 text-red-400 text-sm font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Learn more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-red-500/5 to-transparent" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
