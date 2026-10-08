"use client";

import { motion } from "framer-motion";

export default function Comparison() {
  const comparisons = [
    {
      metric: "Technology",
      old: "Bloated themes",
      new: "Custom React",
    },
    {
      metric: "Conversion",
      old: "Complex forms",
      new: "Direct WhatsApp",
    },
    {
      metric: "Design",
      old: "Generic & cheap",
      new: "Premium bespoke",
    },
    {
      metric: "Timeline",
      old: "Months of delay",
      new: "Live in 14 days",
    },
    {
      metric: "Pricing",
      old: "Hidden retainers",
      new: "Clear & upfront",
    }
  ];

  return (
    <section className="pt-16 pb-24 max-w-7xl mx-auto px-6">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl tracking-tight text-white mb-6 flex flex-col items-center justify-center gap-2">
          <span className="font-fraunces italic font-light text-gray-300">The old way vs.</span>
          <span className="font-inter font-bold">The BoostFlow edge.</span>
        </h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row border border-gray-800 rounded-2xl overflow-hidden shadow-2xl"
      >
        {comparisons.map((item, i) => (
          <div 
            key={i}
            className="flex-1 p-6 md:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-gray-800 last:border-0 bg-[#050505] hover:bg-[#0a0a0a] transition-colors group relative"
          >
            {/* Hover top glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-whatsapp opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <h3 className="font-fraunces italic text-lg md:text-xl text-gray-500 mb-12 group-hover:text-gray-400 transition-colors">
              {item.metric}
            </h3>
            
            <div className="flex flex-col gap-2">
              <span className="font-inter text-gray-600 line-through decoration-red-900/80 decoration-2 text-xs md:text-sm uppercase tracking-wider font-medium">
                {item.old}
              </span>
              <span className="font-inter font-bold text-white text-lg md:text-xl group-hover:text-whatsapp transition-colors leading-tight">
                {item.new}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
