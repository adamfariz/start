"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "0.9s", label: "Avg. Load Time" },
  { value: "3x", label: "Lead Increase" },
  { value: "99+", label: "Mobile Score" },
  { value: "100%", label: "Direct WhatsApp" },
];

export default function Metrics() {
  return (
    <section className="py-12 relative border-y border-slate-800/50 bg-slate-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-800/50">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-left px-4"
            >
              <div className="font-jakarta text-4xl md:text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-slate-400 font-inter text-sm uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
