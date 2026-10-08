"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RoiSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  
  // Inverse relationship: High slider = Fast load, Low slider = Slow load
  const isFast = sliderValue > 50;
  
  const loadTime = isFast ? (0.8 + ((100 - sliderValue) / 50) * 1.2).toFixed(1) : (3.0 + ((50 - sliderValue) / 50) * 4.0).toFixed(1);
  const conversionRate = isFast ? (5.5 + ((sliderValue - 50) / 50) * 4.5).toFixed(1) : (1.0 + (sliderValue / 50) * 4.5).toFixed(1);

  return (
    <section className="py-24 relative max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-900 border border-slate-800 p-8 md:p-12 rounded-3xl relative overflow-hidden"
      >
        <div className="mb-12 text-left">
          <h2 className="font-jakarta text-3xl md:text-4xl font-bold text-white mb-4">
            Speed Equals Revenue
          </h2>
          <p className="text-slate-400 font-inter">
            Slide to see how loading speed impacts your bottom line.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 justify-start mb-12">
          <div className="text-left flex-1">
            <p className="text-slate-500 font-inter text-sm mb-2 uppercase tracking-widest">Load Time</p>
            <div className={`font-jakarta text-5xl md:text-6xl font-bold ${isFast ? 'text-cyan' : 'text-red-500'}`}>
              {loadTime}s
            </div>
          </div>
          
          <div className="hidden md:block w-px h-24 bg-slate-700/50" />
          
          <div className="text-left flex-1">
            <p className="text-slate-500 font-inter text-sm mb-2 uppercase tracking-widest">Conversion Rate</p>
            <div className={`font-jakarta text-5xl md:text-6xl font-bold ${isFast ? 'text-green-400' : 'text-orange'}`}>
              {conversionRate}%
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-2xl mx-auto mt-8">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan"
            style={{
              background: `linear-gradient(to right, #EF4444 0%, #F97316 50%, #06B6D4 100%)`
            }}
          />
          <div className="flex justify-between mt-4 text-xs font-inter text-slate-500 font-bold uppercase tracking-wider">
            <span>Outdated & Slow</span>
            <span>BoostFlow Standard</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
