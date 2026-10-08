"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      customIcon: (
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className="w-4 h-4 bg-whatsapp rounded-full animate-ping absolute opacity-70"></div>
          <div className="w-4 h-4 bg-whatsapp rounded-full relative z-10 shadow-[0_0_15px_#25D366]"></div>
        </div>
      ),
      title: "Direct to WhatsApp",
      description: "Contact forms get ignored. We integrate direct WhatsApp buttons so your customers can start a conversation with you in one tap, directly from their phone.",
    },
    {
      customIcon: (
        <div className="w-6 h-10 border-2 border-gray-300 rounded-xl p-1 flex items-start justify-center group-hover:border-whatsapp transition-colors shadow-lg">
          <div className="w-2 h-1 bg-gray-300 rounded-full group-hover:bg-whatsapp transition-colors mt-0.5"></div>
        </div>
      ),
      title: "Built for Mobile",
      description: "Over 80% of local business traffic comes from smartphones. We design your site for thumbs first.",
    },
    {
      customIcon: (
        <div className="flex items-center justify-center group-hover:scale-110 transition-transform pl-1">
          <span className="font-inter font-black italic text-3xl text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 group-hover:from-whatsapp group-hover:to-green-500 transition-all leading-none">
            99
          </span>
          <span className="font-inter font-bold text-xl text-gray-500 group-hover:text-whatsapp leading-none -translate-y-1.5 ml-0.5">+</span>
        </div>
      ),
      title: "Fast by Default",
      description: "We code sites by hand using modern React. No heavy templates. This guarantees a 95+ performance score.",
    },
    {
      customIcon: (
        <div className="font-fraunces italic font-light text-4xl text-gray-300 group-hover:text-whatsapp transition-colors flex items-center">
          Aa
          <span className="w-0.5 h-8 bg-whatsapp ml-1 animate-pulse"></span>
        </div>
      ),
      title: "Clear, Plain Copy",
      description: "We write your website text like a normal person speaks. No corporate jargon, just clear explanations of what you do, how much it costs, and why they should choose you over the competition.",
    }
  ];

  return (
    <section className="pt-16 pb-32 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6 flex flex-col items-center justify-center gap-2">
          <span className="font-fraunces italic font-light text-gray-400">A practical approach</span>
          <span className="font-inter font-bold">to your website.</span>
        </h2>
        <p className="font-inter text-gray-400 max-w-xl mx-auto text-lg">
          No bloated code or endless meetings. We focus on the things that actually get you customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, i) => {
          const isWide = i === 0 || i === 3;
          
          return (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-[#060606] border border-gray-800 rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl hover:border-gray-600 transition-all duration-500 ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,211,102,0.03),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className={`flex flex-col h-full ${isWide ? 'md:flex-row md:items-start gap-8 md:gap-12' : 'gap-8'}`}>
                
                {/* Custom UI Icon Container */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-whatsapp/10 group-hover:border-whatsapp/30 transition-all duration-500 relative z-10 shadow-lg">
                  {feature.customIcon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-inter font-bold text-white mb-4 relative z-10 tracking-tight group-hover:text-whatsapp transition-colors">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-gray-400 leading-relaxed text-lg relative z-10">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
