"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Deep backing radial purple light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Glass CTA Panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass-panel rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden flex flex-col items-center text-center max-w-5xl mx-auto shadow-[0_20px_50px_rgba(139,92,246,0.1)]"
      >
        {/* Dynamic corner spotlights */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-600/10 rounded-full blur-[70px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-indigo-600/10 rounded-full blur-[70px] pointer-events-none" />

        {/* Content Wrapper */}
        <div className="max-w-2xl mx-auto relative z-10">
          <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4 block">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Accelerate Your Cognitive Workflows Today
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-10 leading-relaxed font-normal">
            Join the next cohort of data-driven enterprises building autonomous reasoning engines. Start free, scale as your synapses grow.
          </p>

          {/* Form / Success Switch */}
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-semibold"
            >
              <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Access Request Registered. Check your inbox soon!</span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 items-center w-full max-w-lg mx-auto"
            >
              <div className="relative w-full">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4.5 h-4.5" />
                <input
                  type="email"
                  placeholder="Enter your corporate email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/10 hover:border-white/20 focus:border-purple-500 focus:bg-black/60 rounded-full pl-11 pr-5 py-3.5 text-sm text-white placeholder-gray-500 outline-none transition-all duration-300"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto flex-shrink-0 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 glow-btn"
              >
                Join Waitlist
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
