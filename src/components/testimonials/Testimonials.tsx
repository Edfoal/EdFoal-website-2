"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alex Rivera",
    company: "Synthesia Core",
    quote: "Edfoal consolidated our engineering context instantly. We stopped asking 'where is that specification' and started asking our workspace core.",
    initials: "AR",
    bg: "from-purple-600/30 to-violet-600/20",
  },
  {
    name: "Sarah Jenkins",
    company: "Linear Labs",
    quote: "The trace logs are a game changer. Knowing exactly which Slack thread or specification document backed an AI synthesis saves weeks of audit.",
    initials: "SJ",
    bg: "from-blue-600/30 to-indigo-600/20",
  },
  {
    name: "Marcus Vance",
    company: "Cognitive Scale",
    quote: "We deployed specialist agents in minutes using their sub-agent routing. Edfoal is the ultimate enterprise automation middleware.",
    initials: "MV",
    bg: "from-violet-600/30 to-indigo-600/20",
  },
  {
    name: "Elena Rostova",
    company: "Perplexity Inc",
    quote: "Sub-10ms response sync is not marketing speak—it actually delivers real-time concept synthesis at scale with zero hydration issues.",
    initials: "ER",
    bg: "from-fuchsia-600/30 to-purple-600/20",
  },
  {
    name: "Devon Zhao",
    company: "Arc Software",
    quote: "The user experience feels like it was crafted in 2030. Glassmorphism panels, noise overlays, and smooth scrolling match our standard.",
    initials: "DZ",
    bg: "from-indigo-600/30 to-purple-600/20",
  },
];

// Duplicate for marquee loop
const marqueeTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black border-y border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4 block">
          Endorsements
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Validated by Global Operators
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          See how leading operations trust Edfoal to drive system decisions and automations.
        </p>
      </div>

      {/* Carousel Marquee Container */}
      <div className="relative flex w-full overflow-hidden py-4 select-none">
        
        {/* Soft edge masking blurs */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-44 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-44 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        {/* Marquee Motion Wrapper */}
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex gap-6 w-max px-4"
        >
          {marqueeTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="w-[290px] sm:w-[370px] flex-shrink-0 glass-panel rounded-2xl p-6 md:p-8 border border-white/5 flex flex-col justify-between"
            >
              {/* Quote */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal italic mb-6">
                "{t.quote}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${t.bg} border border-white/10 flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold tracking-wide">
                    {t.name}
                  </h4>
                  <p className="text-gray-500 text-xs font-mono">
                    {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
