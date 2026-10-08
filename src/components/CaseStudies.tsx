"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseStudies() {
  return (
    <section id="work" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-white mb-6 flex flex-col items-center justify-center gap-2">
            <span className="font-inter font-bold">Live</span>
            <span className="font-fraunces italic font-light text-gray-300">Industry Demos</span>
          </h2>
          <p className="font-inter text-gray-400 max-w-xl mx-auto text-lg">
            Ready-to-use templates we built to show what's possible for businesses like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:border-gray-600 transition-colors"
          >
            <div className="bg-black flex items-center justify-center border-b border-gray-800 relative overflow-hidden">
              <Image 
                src="/images/cafe.png" 
                alt="Screenshot of a modern local coffee shop website" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700" 
              />
            </div>
            <div className="p-8">
              <h3 className="font-inter font-bold text-2xl text-white mb-3">The Local Bean</h3>
              <p className="font-inter text-gray-400 mb-8 leading-relaxed">
                A neighborhood coffee shop needing an elegant, inviting online presence to share their daily menu and hours.
              </p>
              
              <div className="font-inter text-sm text-gray-500 uppercase tracking-widest font-bold">
                Live Demo: Ready to deploy
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-gray-800 rounded-2xl overflow-hidden flex flex-col group hover:border-gray-600 transition-colors"
          >
            <div className="bg-black flex items-center justify-center border-b border-gray-800 relative overflow-hidden">
              <Image 
                src="/images/plumbing.png" 
                alt="Screenshot of a professional local plumbing service website" 
                width={800} 
                height={600} 
                className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700" 
              />
            </div>
            <div className="p-8">
              <h3 className="font-inter font-bold text-2xl text-white mb-3">ProFlow Plumbing</h3>
              <p className="font-inter text-gray-400 mb-8 leading-relaxed">
                An emergency plumbing service focused on speed and trust, requiring a high-converting site for urgent calls.
              </p>
              
              <div className="font-inter text-sm text-gray-500 uppercase tracking-widest font-bold">
                Live Demo: Ready to deploy
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
