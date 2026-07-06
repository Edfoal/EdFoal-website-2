"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Essential cognitive layer for individual operators and small teams.",
    features: [
      "5 Connected Source Integrations",
      "10,000 Predictions / Month",
      "Standard Keyword Search",
      "8-hour Sync Frequencies",
      "Community Support",
    ],
    isPopular: false,
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    price: "79",
    description: "Advanced model coordination and real-time decision synthesis.",
    features: [
      "Unlimited Data Integrations",
      "150,000 Predictions / Month",
      "Deep Semantic Concept Scanning",
      "Sub-10ms Core Synapses",
      "Autonomous Sub-Agent Orchestration",
      "Priority Email SLA Support",
    ],
    isPopular: true,
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "249",
    description: "Fully isolated infrastructure with custom adapters and keys.",
    features: [
      "Unlimited Predictions & Queries",
      "Dedicated Client Edge Clusters",
      "Zero-Trust Vault Key Isolation",
      "Custom Model Training Adapters",
      "24/7 Telephone SLA Support",
      "Personal Solutions Engineer",
    ],
    isPopular: false,
    cta: "Contact Sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto relative py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      {/* Background soft purple light */}
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Pricing Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-4 block">
          Investment
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
          Predictable Scaled Plans
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
          Choose the cognitive depth that fits your team&apos;s structural requirements.
        </p>
      </div>

      {/* Plans Columns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              plan.isPopular
                ? "glass-panel border-purple-500/30 shadow-[0_0_35px_rgba(139,92,246,0.15)] bg-purple-950/5 lg:-translate-y-4"
                : "glass-panel border-white/5 hover:border-white/10"
            }`}
          >
            {/* Middle Popular Badge */}
            {plan.isPopular && (
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-purple-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                Most Popular
              </div>
            )}

            {/* Plan Headings */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-xs font-normal mb-6 min-h-[32px]">{plan.description}</p>
              
              <div className="flex items-baseline mb-6">
                <span className="text-gray-400 text-xl font-normal">$</span>
                <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-2">/ month</span>
              </div>

              {/* Spacer divider line */}
              <div className="w-full h-[1px] bg-white/5 mb-6" />

              {/* Plan Benefits Checklist */}
              <ul className="flex flex-col gap-4 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-gray-300 font-normal">
                    <FiCheck className={`w-4 h-4 flex-shrink-0 ${plan.isPopular ? "text-purple-400" : "text-gray-400"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Plan Call to Action */}
            <a
              href={`#${plan.name.toLowerCase()}`}
              className={`w-full text-center py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                plan.isPopular
                  ? "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:-translate-y-0.5 glow-btn"
                  : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 hover:-translate-y-0.5"
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
