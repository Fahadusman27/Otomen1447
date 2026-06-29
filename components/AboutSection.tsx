"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Eye, Target, Shield, Heart, Zap, Users } from "lucide-react";
import { VISION_MISSION_VALUES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Target,
  Shield,
  Heart,
  Zap,
  Users,
};

const CARD_WIDTH = 340;
const GAP = 24;

export default function AboutSection() {
  const [paused, setPaused] = useState(false);
  const xRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  // Duplicate items for seamless infinite loop
  const items = [...VISION_MISSION_VALUES, ...VISION_MISSION_VALUES];
  const totalWidth = VISION_MISSION_VALUES.length * (CARD_WIDTH + GAP);

  useAnimationFrame((_, delta) => {
    if (paused) return;
    xRef.current -= (delta / 1000) * 48; // 48px per second
    if (Math.abs(xRef.current) >= totalWidth) {
      xRef.current = 0;
    }
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">
              Who We Are
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Otomen1447
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/55 text-lg leading-relaxed">
            For over 15 years, we&apos;ve been the benchmark for premium automotive
            retail — built on three pillars: transparency, passion, and an
            obsessive commitment to your satisfaction.
          </p>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div
        className="relative overflow-hidden py-4"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

        <div
          ref={containerRef}
          className="flex will-change-transform"
          style={{ gap: `${GAP}px`, width: "max-content" }}
        >
          {items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={`${item.id}-${index}`}
                className="relative flex-shrink-0 bg-white/4 backdrop-blur-sm border border-white/8 rounded-2xl p-8 cursor-default group hover:border-red-500/30 hover:bg-white/6 transition-all duration-500"
                style={{ width: CARD_WIDTH }}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Top label */}
                <span className="inline-block px-3 py-1 bg-red-500/15 text-red-400 text-xs font-semibold tracking-widest uppercase rounded-full mb-5">
                  {item.label}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-red-600/20 to-red-800/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-red-600/30 transition-all duration-300">
                  {Icon && <Icon size={24} className="text-red-400" />}
                </div>

                <h3 className="text-white font-bold text-xl mb-3">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pause hint */}
      <div className="text-center mt-8">
        <span className="text-white/25 text-xs tracking-widest uppercase">
          Hover to pause
        </span>
      </div>
    </section>
  );
}
