"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { PORTFOLIO_ITEMS } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-24 lg:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute -top-20 right-1/4 w-72 h-72 bg-red-600/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-slate-700/15 rounded-full blur-3xl" />
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
              Recently Sold
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Portfolio &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Testimonials
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
            Real cars, real clients, real stories. Here are some of our proudest
            recent deliveries and what our clients say about the experience.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              id={`portfolio-card-${item.id}`}
              className={`group relative rounded-2xl overflow-hidden border border-white/8 bg-white/3 backdrop-blur-md hover:border-red-500/25 transition-all duration-500 ${
                index === 0 ? "md:row-span-1" : ""
              }`}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
            >
              {/* Car Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.car}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                {/* Type badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/15 rounded-full">
                  <span className="text-white/80 text-xs font-semibold tracking-wide">
                    {item.type}
                  </span>
                </div>

                {/* Price badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-red-600/80 backdrop-blur-md rounded-full">
                  <span className="text-white text-xs font-bold tracking-wide">
                    {item.price}
                  </span>
                </div>
              </div>

              {/* Content — Glassmorphism panel */}
              <div className="relative p-6 bg-white/2 backdrop-blur-xl">
                <h3 className="text-white font-bold text-lg mb-4">{item.car}</h3>

                {/* Review card — glassmorphism */}
                <div className="relative p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/8">
                  {/* Quote icon */}
                  <Quote
                    size={20}
                    className="text-red-400/50 fill-red-400/10 mb-3"
                  />
                  <p className="text-white/65 text-sm leading-relaxed italic mb-4">
                    &ldquo;{item.review}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {item.client.charAt(0)}
                        </span>
                      </div>
                      <span className="text-white/80 text-sm font-medium">
                        {item.client}
                      </span>
                    </div>
                    <StarRating count={item.rating} />
                  </div>
                </div>
              </div>

              {/* Bottom glow on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/15 rounded-xl text-white font-semibold hover:bg-white/10 hover:border-red-500/30 transition-all duration-300"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Find Your Next Car
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
