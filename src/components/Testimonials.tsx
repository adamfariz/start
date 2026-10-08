"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] relative z-10 overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-whatsapp/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight text-white font-inter font-bold">
            Trusted by local businesses
          </h2>
          <p className="text-gray-400 mt-6 max-w-xl mx-auto text-lg">
            We help local businesses dominate their market with fast, conversion-optimized websites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Jenkins",
              business: "The Local Bean",
              initial: "S",
              color: "bg-orange-500/20 text-orange-500",
              quote: "Our new website loads instantly and the WhatsApp integration has doubled our catering inquiries. Highly recommended!",
            },
            {
              name: "Mike Thompson",
              business: "ProFlow Plumbing",
              initial: "M",
              color: "bg-blue-500/20 text-blue-500",
              quote: "They understand exactly what service businesses need. No fluff, just a fast site that gets the phone ringing.",
            },
            {
              name: "Emma Richards",
              business: "Bloom Florals",
              initial: "E",
              color: "bg-pink-500/20 text-pink-500",
              quote: "I was skeptical, but the difference in mobile speed and customer contacts is night and day. It looks beautiful too.",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#0a0a0a] border border-gray-800 hover:border-gray-600 transition-all duration-300 p-8 rounded-[2rem] flex flex-col group relative overflow-hidden"
            >
              {/* Large background quote icon */}
              <div className="absolute top-4 right-6 text-[8rem] text-white/[0.02] font-serif leading-none select-none pointer-events-none group-hover:text-whatsapp/[0.05] transition-colors duration-500">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8 relative z-10">
                {[...Array(5)].map((_, index) => (
                  <svg key={index} className="w-5 h-5 text-whatsapp drop-shadow-[0_0_8px_rgba(37,211,102,0.4)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-10 flex-grow relative z-10 font-inter">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.color}`}>
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-bold text-white font-inter tracking-tight">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 font-inter mt-0.5">{testimonial.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
