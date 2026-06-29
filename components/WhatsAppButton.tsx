"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={COMPANY_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float-btn"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 overflow-hidden"
      initial={{ opacity: 0, scale: 0, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Tooltip label */}
      <motion.span
        className="hidden sm:block px-4 py-2 bg-slate-800 border border-white/10 rounded-xl text-white text-sm font-medium shadow-xl opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap"
      >
        Chat on WhatsApp
      </motion.span>

      {/* Button */}
      <motion.div
        className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/40"
        whileHover={{ scale: 1.12, rotate: 5 }}
        whileTap={{ scale: 0.92 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.4)",
            "0 0 0 14px rgba(37, 211, 102, 0)",
            "0 0 0 0 rgba(37, 211, 102, 0)",
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
            delay: 3,
          },
        }}
      >
        <MessageCircle size={26} className="text-white fill-white" />
      </motion.div>
    </motion.a>
  );
}
