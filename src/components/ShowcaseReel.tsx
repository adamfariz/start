"use client";

import { motion } from "framer-motion";

const projects = [
  { name: "CovoitAir", result: "3.2x Conversions", type: "Web Application" },
  { name: "Learnify", result: "0.8s Load Time", type: "E-Learning Platform" },
  { name: "BoostFlow Core", result: "+240% Leads", type: "Digital Agency" }
];

export default function ShowcaseReel() {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-white mb-4 text-left">
          Our Recent Work
        </h2>
        <p className="text-slate-400 font-inter">Recent builds pushing the boundaries of web speed.</p>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="snap-center shrink-0 w-[280px] md:w-[350px] h-[400px] md:h-[500px] rounded-2xl border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-inter font-bold text-white">
                {i + 1}
              </div>
              <div className="px-3 py-1 bg-slate-800 rounded border border-slate-700 text-xs font-inter font-bold text-slate-300">
                {project.result}
              </div>
            </div>

            <div className="relative z-10 mt-auto text-left">
              <div className="w-full h-48 bg-slate-800 rounded-lg border border-slate-700 mb-6 flex items-center justify-center overflow-hidden">
                <span className="text-slate-500 font-inter text-sm">[Screenshot: {project.name}]</span>
              </div>
              <div className="text-cyan text-xs font-bold mb-2 font-inter uppercase tracking-wider">{project.type}</div>
              <h3 className="font-jakarta text-2xl font-bold text-white transition-colors">
                {project.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
