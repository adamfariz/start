"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      title: "Discovery Call",
      description: "We jump on a quick 20-minute call to understand your business, your ideal customers, and what you want the website to achieve.",
    },
    {
      title: "Build & Design",
      description: "We write the copy and build a custom, high-performance site. No generic templates. We send you a link to review within 10 days.",
    },
    {
      title: "Launch & Handoff",
      description: "Once you approve, we launch the site on your domain, ensure WhatsApp routing works perfectly, and hand over the keys.",
    }
  ];

  return (
    <section className="pt-16 pb-24 max-w-6xl mx-auto px-6 overflow-hidden">
      <div className="mb-24 text-center">
        <h2 className="text-4xl md:text-5xl tracking-tight text-white mb-6 flex flex-col items-center justify-center gap-2">
          <span className="font-fraunces italic font-light text-gray-300">Our</span>
          <span className="font-inter font-bold">Workflow.</span>
        </h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-inter text-gray-400 max-w-xl mx-auto text-lg"
        >
          A simple chain of events to get your new site live in 14 days.
        </motion.p>
      </div>

      <div className="relative mt-8">
        {/* Background Track Line (Horizontal) */}
        {/* left-[16.66%] and right-[16.66%] ensure it exactly connects the centers of the 3 columns */}
        <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-gray-800 z-0"></div>
        
        {/* Animated Green Line with subtle glow */}
        <div className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px z-0 overflow-hidden">
          <motion.div 
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "linear" }}
            className="h-full bg-whatsapp shadow-[0_0_10px_#25D366]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
          {steps.map((step, index) => {
            return (
              <div key={index} className="flex flex-col">
                
                {/* Chain Node */}
                <div className="flex justify-center mb-10 h-12">
                  <motion.div 
                    initial={{ backgroundColor: "#0a0a0a", borderColor: "#1F2937", color: "#4B5563" }}
                    whileInView={{ backgroundColor: "#25D366", borderColor: "#25D366", color: "#000000" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.5 + 0.2 }}
                    className="w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold font-inter z-10 transition-colors"
                  >
                    {index + 1}
                  </motion.div>
                </div>

                {/* Content Block (Left Aligned for editorial feel) */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.5 + 0.4 }}
                  className="bg-[#050505] border border-gray-800 p-8 rounded-2xl shadow-xl hover:border-gray-600 hover:bg-[#080808] transition-all w-full flex-grow text-left group relative overflow-hidden"
                >
                  {/* Subtle top glow on card hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-whatsapp opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <span className="font-fraunces italic text-gray-600 mb-6 block group-hover:text-whatsapp transition-colors text-lg">
                    Step 0{index + 1}
                  </span>
                  
                  <h3 className="font-inter font-bold text-2xl text-white mb-4">{step.title}</h3>
                  <p className="font-inter text-gray-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
