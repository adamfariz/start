"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", contact: "", url: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    
    setStatus("submitting");
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl tracking-tight text-white mb-6 flex flex-col gap-2">
            <span className="font-fraunces italic font-light text-gray-300">Get your</span>
            <span className="font-inter font-bold">free site audit.</span>
          </h2>
          <p className="text-gray-400 font-inter text-lg mb-8 max-w-md leading-relaxed">
            Send us your current website URL. We'll manually review your performance, mobile usability, and copy, then send you a plain-English summary of what can be improved.
          </p>
          
          <div className="p-6 bg-[#0a0a0a] border border-gray-800 rounded-xl font-inter text-sm text-gray-400">
            <strong className="block text-white mb-3 text-base">What happens next?</strong>
            <ul className="list-disc pl-5 space-y-3">
              <li>You fill out the form (takes 30 seconds).</li>
              <li>We reply via email or WhatsApp within 24 hours.</li>
              <li>We send you a short, actionable report. No hard sell.</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl">
          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-whatsapp/10 text-whatsapp rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-inter font-bold text-2xl text-white mb-3">Request received</h3>
              <p className="font-inter text-gray-400">We'll be in touch within 24 hours.</p>
            </motion.div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block font-inter text-sm font-medium text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block font-inter text-sm font-medium text-gray-300 mb-2">WhatsApp Number or Email</label>
                <input 
                  type="text" 
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block font-inter text-sm font-medium text-gray-300 mb-2">Website URL (Optional)</label>
                <input 
                  type="url" 
                  value={formData.url}
                  onChange={(e) => setFormData({...formData, url: e.target.value})}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-gray-500 transition-colors"
                  placeholder="https://yoursite.com"
                />
              </div>
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-white text-black px-8 py-4 rounded-xl font-inter font-bold text-sm hover:bg-gray-200 transition-colors disabled:opacity-70 mt-4"
              >
                {status === "submitting" ? "Sending..." : "Request free audit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
