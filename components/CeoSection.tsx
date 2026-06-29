"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";
import { CEO_DATA } from "@/lib/data";

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function CeoSection() {
  return (
    <section id="ceo" className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-950/15 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          className="flex items-center gap-3 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          custom={0}
        >
          <div className="w-8 h-px bg-red-500" />
          <span className="text-red-500 text-sm font-semibold tracking-widest uppercase">
            A Word From Our CEO
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInLeft}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image
                src={CEO_DATA.image}
                alt={`${CEO_DATA.name} - CEO of Otomen1447`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              {/* Metallic overlay sheen */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 to-transparent" />
            </div>

            {/* Floating name card */}
            <motion.div
              className="absolute -bottom-6 -right-4 lg:right-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-white font-bold text-lg">{CEO_DATA.name}</p>
              <p className="text-white/50 text-sm">{CEO_DATA.title}</p>
              <div className="mt-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-red-500 rounded-sm opacity-80" />
                ))}
              </div>
            </motion.div>

            {/* Decorative border accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-red-500/40 rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-0 lg:right-0 w-24 h-24 border-b-2 border-r-2 border-red-500/20 rounded-br-2xl pointer-events-none" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInRight}
            className="flex flex-col justify-center"
          >
            <Quote
              size={48}
              className="text-red-500/30 mb-6 fill-red-500/10"
            />

            <motion.blockquote
              className="text-xl md:text-2xl lg:text-3xl text-white/85 leading-relaxed font-light italic mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              &ldquo;{CEO_DATA.quote}&rdquo;
            </motion.blockquote>

            {/* Signature & Divider */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
            >
              <div className="w-16 h-px bg-red-500/50 mb-6" />
              <p
                className="text-3xl text-white/90 mb-1"
                style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
              >
                {CEO_DATA.signature}
              </p>
              <p className="text-white/40 text-sm tracking-wide">
                {CEO_DATA.title}
              </p>
            </motion.div>

            {/* Achievement Pills */}
            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
            >
              {["Forbes Top 50 Dealers 2023", "ISO 9001 Certified", "J.D. Power Award"].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white/60 font-medium tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
