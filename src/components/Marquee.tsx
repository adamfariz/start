"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const phrases = [
    { text: "High Performance", style: "font-inter font-bold" },
    { text: "Mobile Optimized", style: "font-fraunces italic font-light text-gray-400" },
    { text: "Direct WhatsApp Leads", style: "font-inter font-bold" },
    { text: "Premium Design", style: "font-fraunces italic font-light text-gray-400" },
    { text: "Zero Bloat", style: "font-inter font-bold" },
    { text: "Conversion Focused", style: "font-fraunces italic font-light text-gray-400" }
  ];

  return (
    <section className="py-8 border-y border-gray-900 bg-[#030303] overflow-hidden flex items-center relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>

      <motion.div
        className="flex whitespace-nowrap gap-12 pr-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {/* We duplicate the inner content twice to ensure seamless looping at exactly 50% width */}
        {[...Array(2)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center gap-12">
            {phrases.map((phrase, i) => (
              <div key={i} className="flex items-center gap-12">
                <span className={`text-2xl md:text-3xl text-white tracking-tight ${phrase.style}`}>
                  {phrase.text}
                </span>
                {/* Separator */}
                <span className="text-whatsapp">✦</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
