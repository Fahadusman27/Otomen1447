"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link2, Share2, Globe } from "lucide-react";
import { TEAM_MEMBERS } from "@/lib/data";

function FlipCard({ member, index }: { member: (typeof TEAM_MEMBERS)[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative h-[480px] cursor-pointer group"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      aria-label={`Team member: ${member.name}`}
      id={`team-card-${member.id}`}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-white/8 bg-slate-800/40"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-3/4">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-white font-bold text-xl mb-1">{member.name}</h3>
            <p className="text-red-400 text-sm font-medium tracking-wide">{member.role}</p>
            <div className="mt-3 flex items-center gap-2 text-white/30 text-xs">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              Hover to learn more
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-red-500/20 flex flex-col items-center justify-center p-8 text-center"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Avatar circle */}
          <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-red-500/50 mb-5 shadow-lg shadow-red-500/20">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="80px"
              className="object-cover object-top"
            />
          </div>

          <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
          <p className="text-red-400 text-sm font-medium mb-5">{member.role}</p>
          <div className="w-10 h-px bg-red-500/40 mb-5" />
          <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <motion.a
              href={member.linkedin}
              className="w-9 h-9 bg-white/8 hover:bg-blue-600/80 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${member.name} LinkedIn`}
            >
              <Link2 size={15} />
            </motion.a>
            <motion.a
              href={member.instagram}
              className="w-9 h-9 bg-white/8 hover:bg-pink-600/80 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${member.name} Instagram`}
            >
              <Share2 size={15} />
            </motion.a>
            <motion.a
              href={member.twitter}
              className="w-9 h-9 bg-white/8 hover:bg-sky-500/80 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`${member.name} Twitter`}
            >
              <Globe size={15} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

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
              Our People
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
              Key Team
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
            World-class professionals united by one mission — to deliver the
            finest automotive experience you&apos;ve ever had.
          </p>
          <p className="text-white/30 text-sm mt-3">Hover over a card to flip it</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <FlipCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
