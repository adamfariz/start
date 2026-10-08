"use client";

import { motion } from "framer-motion";

export default function VideoShowcase() {
  return (
    <section className="pt-32 pb-16 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Creative Arch Video Mask */}
        <div className="w-full lg:w-[45%] relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-t-[16rem] rounded-b-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_80px_-20px_rgba(37,211,102,0.15)] bg-[#050505] z-10"
          >
            {/* The Ambient Workspace Video */}
            <video 
              src="/images/12085858_3840_2160_30fps.mp4" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover object-center scale-105"
            />
            
            {/* Inner Darkening Overlay to dim the bright white monitor slightly */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            
            {/* Inner Shadow to blend edges & add reflection */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.8)] pointer-events-none rounded-t-[16rem] rounded-b-[2rem]"></div>
            <div className="absolute inset-0 border border-white/5 rounded-t-[16rem] rounded-b-[2rem] pointer-events-none"></div>
          </motion.div>

          {/* Ambient "Live" Badge overlay breaking the boundary */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute bottom-16 right-4 md:-right-12 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3.5 rounded-full flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] z-20"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-whatsapp animate-pulse shadow-[0_0_12px_#25D366]"></div>
            <span className="font-inter font-bold text-white tracking-widest uppercase text-xs">Studio Active</span>
          </motion.div>
        </div>

        {/* Right: The Studio Manifesto */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center relative z-10 lg:pl-10">
          <motion.h2 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[5rem] tracking-tight text-white mb-10 flex flex-col gap-1 leading-none"
          >
            <span className="font-fraunces italic font-light text-gray-400">Crafted with</span>
            <span className="font-inter font-bold">obsession.</span>
          </motion.h2>
          
          <div className="space-y-6 mb-14 max-w-xl">
             <motion.p 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="font-inter text-gray-400 text-lg md:text-xl leading-relaxed"
             >
               We don't assemble drag-and-drop templates. We are a team of obsessed engineers and designers who write every single line of code by hand.
             </motion.p>
             
             <motion.p 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="font-inter text-gray-400 text-lg md:text-xl leading-relaxed"
             >
               The result? Digital experiences that load instantly, rank flawlessly on search engines, and feel entirely unique to your brand.
             </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex gap-16 md:gap-24 border-t border-gray-800 pt-10"
          >
            <div className="flex flex-col gap-2">
              <span className="font-inter font-bold text-5xl md:text-6xl text-white tracking-tight">
                100<span className="text-whatsapp">%</span>
              </span>
              <span className="font-fraunces italic text-gray-400 text-xl">In-house</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-inter font-bold text-5xl md:text-6xl text-white tracking-tight">
                Zero
              </span>
              <span className="font-fraunces italic text-gray-400 text-xl">Templates</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
