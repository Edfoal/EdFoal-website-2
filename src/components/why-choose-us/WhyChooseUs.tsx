"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiSlack, FiGithub, FiHardDrive, FiCpu, FiCheck } from "react-icons/fi";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Continuous Synthesis",
      desc: "Our engine continuously monitors and clusters changes from your development channels and documents in real time, keeping system memory updated.",
    },
    {
      title: "Algorithmic Traceability",
      desc: "Every AI inference maps directly back to the original database entry or conversation thread, guaranteeing full corporate compliance.",
    },
    {
      title: "Micro-Agent Routing",
      desc: "Spin up autonomous specialist subagents instantly to resolve multi-system data queries without complex engineering.",
    },
  ];

  return (
    <section id="about" className="w-full max-w-7xl mx-auto relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Content Block */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4">
            Architecture
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
            Designed for the Cognitive Enterprise
          </h2>
          
          <div className="flex flex-col gap-8 w-full">
            {points.map((point, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 mt-1">
                  <FiCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-normal">{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Framer Motion Animated Graphic */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full h-[400px]">
          {/* Soft background light */}
          <div className="absolute w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] -z-10" />

          {/* Animating Glass Canvas */}
          <div className="w-full max-w-[450px] aspect-square relative glass-panel rounded-2xl border border-white/5 p-6 overflow-hidden flex items-center justify-center">
            
            {/* Source Node 1: Slack */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-10 top-16 w-14 h-14 rounded-xl border border-white/10 bg-black/60 flex items-center justify-center text-white shadow-lg z-10"
            >
              <FiSlack className="w-6 h-6 text-[#E01E5A]" />
              <span className="absolute -bottom-6 text-[10px] text-gray-500 font-mono">SLACK</span>
            </motion.div>

            {/* Source Node 2: GitHub */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute left-10 bottom-20 w-14 h-14 rounded-xl border border-white/10 bg-black/60 flex items-center justify-center text-white shadow-lg z-10"
            >
              <FiGithub className="w-6 h-6 text-gray-300" />
              <span className="absolute -bottom-6 text-[10px] text-gray-500 font-mono">GITHUB</span>
            </motion.div>

            {/* Source Node 3: Drive */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute left-32 bottom-8 w-14 h-14 rounded-xl border border-white/10 bg-black/60 flex items-center justify-center text-white shadow-lg z-10"
            >
              <FiHardDrive className="w-6 h-6 text-[#34A853]" />
              <span className="absolute -bottom-6 text-[10px] text-gray-500 font-mono">DRIVE</span>
            </motion.div>

            {/* Target Core Node */}
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-12 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-purple-500/30 bg-purple-950/20 flex flex-col items-center justify-center text-white shadow-[0_0_35px_rgba(139,92,246,0.3)] z-10"
            >
              <FiCpu className="w-8 h-8 text-purple-400 animate-pulse" />
              <span className="absolute -bottom-6 text-[10px] text-purple-400 font-mono tracking-widest font-semibold">CORE</span>
            </motion.div>

            {/* Visual Synapse Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
              {/* Path 1: Slack to Core */}
              <path d="M 78 104 Q 180 80 280 200" fill="none" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="2" strokeDasharray="4 4" />
              
              {/* Path 2: Github to Core */}
              <path d="M 78 296 Q 180 320 280 200" fill="none" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="2" strokeDasharray="4 4" />

              {/* Path 3: Drive to Core */}
              <path d="M 162 322 Q 220 320 280 200" fill="none" stroke="rgba(139, 92, 246, 0.12)" strokeWidth="2" strokeDasharray="4 4" />
            </svg>

            {/* Animating Data Packets */}
            {/* Packet 1 */}
            <motion.div
              animate={{
                left: [78, 180, 270],
                top: [104, 75, 190],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#8b5cf6]"
            />

            {/* Packet 2 */}
            <motion.div
              animate={{
                left: [78, 180, 270],
                top: [296, 315, 210],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }}
              className="absolute w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#8b5cf6]"
            />

            {/* Packet 3 */}
            <motion.div
              animate={{
                left: [162, 220, 270],
                top: [322, 290, 210],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
              className="absolute w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_#8b5cf6]"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
