"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiActivity, FiLayers, FiTrendingUp, FiCpu, FiMaximize2 } from "react-icons/fi";

export default function Showcase() {
  return (
    <section id="solutions" className="w-full max-w-7xl mx-auto relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Radial purple lighting backdrop */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Showcase Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4"
        >
          Product Console
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6"
        >
          Your Cognitive Command Center
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto"
        >
          Monitor models, orchestrate automations, and analyze real-time metrics with our unified glass command center.
        </motion.p>
      </div>

      {/* Main Glass Dashboard Layout */}
      <motion.div
        initial={{ opacity: 0, y: 45, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-2xl border border-white/10 shadow-[0_12px_45px_rgba(0,0,0,0.65)] overflow-hidden w-full"
      >
        {/* Mockup Top Window Bar */}
        <div className="h-12 border-b border-white/5 bg-black/40 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="text-xs text-gray-500 font-mono ml-4 select-none">edfoal-console-v2.1</span>
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <FiMaximize2 className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Dashboard Grid Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Mockup Left Sidebar */}
          <div className="lg:col-span-3 border-r border-white/5 bg-black/20 p-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase mb-1">
                Navigation
              </span>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-purple-500/10 text-purple-300 text-sm font-medium">
                <FiLayers className="w-4 h-4" />
                Control Room
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white text-sm font-medium transition-all">
                <FiActivity className="w-4 h-4" />
                Live Synapses
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white text-sm font-medium transition-all">
                <FiCpu className="w-4 h-4" />
                Model Adapters
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-semibold text-gray-500 tracking-wider uppercase mb-1">
                Cognitive Agents
              </span>
              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg border border-purple-500/20 bg-purple-500/5 text-xs text-purple-300">
                <span>Eng-Billing-Agent</span>
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </div>
              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-xs text-gray-400">
                <span>Compliance-Scanner</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              </div>
            </div>
          </div>

          {/* Mockup Center Dashboard Panel */}
          <div className="lg:col-span-9 p-6 md:p-8 flex flex-col gap-6 bg-black/10">
            {/* Core Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-panel-light p-4 rounded-xl border border-white/5">
                <div className="text-gray-400 text-xs font-medium mb-1">Model Accuracy</div>
                <div className="text-2xl font-bold text-white mb-2">99.98%</div>
                <div className="text-[10px] text-purple-400 flex items-center gap-1 font-semibold">
                  <FiTrendingUp /> +0.02% vs yesterday
                </div>
              </div>
              <div className="glass-panel-light p-4 rounded-xl border border-white/5">
                <div className="text-gray-400 text-xs font-medium mb-1">Token Throughput</div>
                <div className="text-2xl font-bold text-white mb-2">84.2k/s</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                  <FiActivity /> Optimal health load
                </div>
              </div>
              <div className="glass-panel-light p-4 rounded-xl border border-white/5">
                <div className="text-gray-400 text-xs font-medium mb-1">Active Clusters</div>
                <div className="text-2xl font-bold text-white mb-2">1,402</div>
                <div className="text-[10px] text-gray-500 font-mono">Semantic neural nodes</div>
              </div>
            </div>

            {/* Performance Graph & Live Insight Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Animated Latency SVG Graph */}
              <div className="lg:col-span-7 glass-panel-light p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-white">Decision Synapse Latency</span>
                  <span className="text-xs text-gray-500 font-mono">14ms Average</span>
                </div>
                <div className="w-full h-36 relative mt-4">
                  <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Glowing Area Fill */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M0 25 C10 18, 20 22, 30 14 C40 6, 50 18, 60 10 C70 2, 80 14, 90 8 C95 5, 100 4, 100 4 L100 30 L0 30 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* SVG Line Trace */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                      d="M0 25 C10 18, 20 22, 30 14 C40 6, 50 18, 60 10 C70 2, 80 14, 90 8 C95 5, 100 4, 100 4"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="1.2"
                    />
                  </svg>
                  {/* Subtle horizontal grid guide lines */}
                  <div className="absolute inset-0 border-b border-white/5 flex flex-col justify-between py-2 pointer-events-none">
                    <div className="w-full border-t border-white/2" />
                    <div className="w-full border-t border-white/2" />
                  </div>
                </div>
              </div>

              {/* AI Insight Box */}
              <div className="lg:col-span-5 glass-panel-light p-5 rounded-xl border border-white/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3 text-purple-400">
                    <FiCpu className="w-4 h-4 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider">AI Insight Feed</span>
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-2">Automated Optimization Detected</h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-normal">
                    Compliance-Scanner successfully rotated Vault keys and synchronized API scopes across 18 Notion docs. Network routing latency decreased by 4.2ms.
                  </p>
                </div>
                <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between text-[10px] text-gray-500 font-mono select-none">
                  <span>SYSTEM LOAD: 12.4%</span>
                  <span className="text-emerald-400 font-semibold">STABLE SHIELD ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Bottom Real-time Logs Feed */}
            <div className="glass-panel-light rounded-xl border border-white/5 overflow-hidden">
              <div className="bg-white/2 px-5 py-3 border-b border-white/5 flex items-center justify-between">
                <span className="text-xs font-semibold text-white">Live Execution Logs</span>
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
              </div>
              <div className="divide-y divide-white/2 text-[11px] font-mono text-gray-400">
                <div className="px-5 py-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-purple-400">[RESOLVED]</span> Sync Notion Roadmap Archive
                  </span>
                  <span className="text-gray-600">8ms ago</span>
                </div>
                <div className="px-5 py-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-purple-400">[Ingested]</span> Ingestion from Slack #eng-billing
                  </span>
                  <span className="text-gray-600">14ms ago</span>
                </div>
                <div className="px-5 py-2.5 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400">[COMPILED]</span> Neural weight optimization
                  </span>
                  <span className="text-gray-600">32ms ago</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
