"use client";

import { motion } from "framer-motion";
import { Zap, Smartphone, TrendingUp, Code2 } from "lucide-react";

const bentoItems = [
  {
    title: "Mobile-First Engineering",
    description: "Designed natively for thumbs. We guarantee 95+ PageSpeed scores on mobile.",
    icon: <Smartphone size={32} className="text-cyan" />,
    className: "md:col-span-2 md:row-span-2 bg-slate-900",
    highlight: "99/100",
  },
  {
    title: "Direct WhatsApp Pipeline",
    description: "Bypass contact forms. Send leads directly to your sales team instantly.",
    icon: <Zap size={32} className="text-green-400" />,
    className: "md:col-span-1 md:row-span-1 bg-slate-900",
  },
  {
    title: "Conversion-Focused Layouts",
    description: "Built strictly to convert traffic into revenue.",
    icon: <TrendingUp size={32} className="text-orange" />,
    className: "md:col-span-1 md:row-span-1 bg-slate-900",
  },
  {
    title: "Zero Bloat, Lean Code",
    description: "No heavy templates or plugins. Just pure, clean React code.",
    icon: <Code2 size={32} className="text-blue-400" />,
    className: "md:col-span-2 md:row-span-1 bg-slate-900",
  },
];

export default function BentoGrid() {
  return (
    <section id="services" className="py-24 relative z-10 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-left"
      >
        <h2 className="font-jakarta text-4xl md:text-5xl font-bold text-white mb-6">
          The <span className="text-cyan">BoostFlow</span> Matrix
        </h2>
        <p className="text-slate-400 font-inter text-lg max-w-2xl">
          We don't build generic websites. We engineer high-speed digital assets designed to maximize your ROI.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-6 auto-rows-[200px]">
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
            className={`rounded-3xl p-8 flex flex-col justify-between group border border-slate-800 hover:border-slate-500 transition-all text-left ${item.className}`}
          >
            <div className="flex justify-between items-start">
              <div className="p-3 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-700">
                {item.icon}
              </div>
              {item.highlight && (
                <span className="font-jakarta font-black text-4xl text-transparent bg-clip-text bg-gradient-to-br from-cyan to-blue-500 opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.highlight}
                </span>
              )}
            </div>
            
            <div>
              <h3 className="font-jakarta text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 font-inter text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
