"use client";

import { motion } from "framer-motion";

export default function Guarantee() {
  return (
    <section className="py-32 relative overflow-hidden bg-[#050505]">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-whatsapp/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        {/* Glowing Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center w-24 h-24 mb-10 rounded-3xl bg-gradient-to-br from-whatsapp/20 to-whatsapp/5 border border-whatsapp/30 shadow-[0_0_40px_rgba(37,211,102,0.2)]"
        >
          <svg className="w-10 h-10 text-whatsapp drop-shadow-[0_0_10px_rgba(37,211,102,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </motion.div>

        {/* Catchy Headline */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-inter font-black tracking-tighter text-white mb-6 leading-tight"
        >
          Stop losing customers to <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 italic font-fraunces font-light">slow, outdated</span> websites.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 font-inter max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          Every second your website takes to load, 20% of your visitors leave. We build lightning-fast pages designed to do one thing: <strong className="text-white font-bold">turn visitors into direct WhatsApp messages.</strong>
        </motion.p>

        {/* The Guarantee Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-whatsapp/50 transition-colors"
          >
            <div className="absolute inset-0 bg-whatsapp/0 group-hover:bg-whatsapp/5 transition-colors"></div>
            <h3 className="text-3xl font-inter font-bold text-white mb-4 relative z-10">99+ Speed Score</h3>
            <p className="text-gray-400 font-inter relative z-10">
              We guarantee a Google Lighthouse performance score of 95 or higher, or we keep working until we hit it. Your site will feel instantaneous.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#0a0a0a] border border-gray-800 p-8 rounded-3xl relative overflow-hidden group hover:border-whatsapp/50 transition-colors"
          >
            <div className="absolute inset-0 bg-whatsapp/0 group-hover:bg-whatsapp/5 transition-colors"></div>
            <h3 className="text-3xl font-inter font-bold text-white mb-4 relative z-10">Zero Friction</h3>
            <p className="text-gray-400 font-inter relative z-10">
              No annoying contact forms that break or get sent to spam. Customers tap one button and they are chatting with you on WhatsApp.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
