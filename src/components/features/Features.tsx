"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { FiTrendingUp, FiSliders, FiSearch, FiCode, FiShield, FiZap } from "react-icons/fi";

const features = [
  {
    title: "Predictive Analytics",
    description: "Deep neural networks analyze workspace behaviors and trends to forecast critical outcomes before they occur.",
    icon: FiTrendingUp,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Cognitive Automation",
    description: "Autonomous agentic loops execute sophisticated multi-step workflows across your chats, wikis, and databases.",
    icon: FiSliders,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Semantic Scanning",
    description: "Query document silos by conceptual intent and conceptual relationships rather than primitive keywords.",
    icon: FiSearch,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Multi-Modal Brain",
    description: "Natively process, connect, and analyze text files, code, design images, and system databases in real time.",
    icon: FiCode,
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    title: "Zero-Trust Security",
    description: "Enterprise grade, zero-trust end-to-end encryption ensures that your proprietary workspace context stays isolated.",
    icon: FiShield,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Sub-10ms Synapses",
    description: "Globally distributed serverless infrastructure delivers lightning-fast concepts synthesis with zero hydration delay.",
    icon: FiZap,
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function Features() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4"
        >
          Capabilities
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6"
        >
          Engineered for Cognitive Velocity
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto"
        >
          Our platform integrates foundational cognitive technologies directly into your business stack.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl p-8 transition-all duration-300 relative group overflow-hidden border border-white/5 hover:border-purple-500/20"
            >
              {/* Inner Gradient border overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

              {/* Hover radial glowing dot */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              {/* Icon container */}
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/30 group-hover:bg-purple-950/20 text-gray-400 group-hover:text-purple-400 transition-all duration-300">
                <Icon className="w-5.5 h-5.5 transform group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3 tracking-wide">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed font-normal">
                {feature.description}
              </p>

              {/* Subtle hover arrow */}
              <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-purple-400 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                Learn more <span className="text-sm">→</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
