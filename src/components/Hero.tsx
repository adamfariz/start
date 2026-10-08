"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Subtle side glows matching the screenshot */}
      <div className="absolute top-1/2 left-0 w-1/4 h-3/4 -translate-y-1/2 bg-blue-900/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-1/4 h-3/4 -translate-y-1/2 bg-blue-900/20 blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-800 bg-black/50 text-white text-xs font-inter font-medium tracking-wide">
            Performance-First Studio
          </div>
        </motion.div>
        
        {/* Mixed Typography Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight text-white flex flex-col items-center gap-2">
            <span className="flex items-center gap-4">
              <span className="font-inter font-bold tracking-tighter">High-Speed</span>
              <span className="font-fraunces italic font-light tracking-normal text-gray-300">Websites</span>
            </span>
            <span className="flex items-center gap-4">
              <span className="font-fraunces font-light tracking-normal text-gray-300">Direct</span>
              <span className="font-inter font-bold tracking-tighter">WhatsApp Leads</span>
            </span>
          </h1>
        </motion.div>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl font-inter max-w-2xl leading-relaxed mb-10"
        >
          Premium websites crafted for small businesses. We build fast, clean web pages that send customers straight to your phone.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="#contact">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-inter font-medium text-sm hover:bg-gray-200 transition-colors">
              Get a free audit
            </button>
          </Link>
          <Link href="#work">
            <button className="w-full sm:w-auto bg-transparent border border-gray-700 text-white px-8 py-3.5 rounded-full font-inter font-medium text-sm hover:border-gray-500 transition-colors">
              See our work
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
