"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

interface CounterProps {
  value: number;
  decimals?: number;
  duration?: number;
}

function Counter({ value, decimals = 0, duration = 2.5 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    const node = ref.current;
    if (!node) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Smooth ease-out cubic
      onUpdate(val) {
        node.textContent = val.toFixed(decimals);
      },
    });

    return () => controls.stop();
  }, [inView, value, decimals, duration]);

  return <span ref={ref}>0</span>;
}

const stats = [
  {
    target: 10,
    decimals: 0,
    suffix: "M+",
    label: "Predictions",
    sub: "Automated decisions hourly"
  },
  {
    target: 500,
    decimals: 0,
    suffix: "K+",
    label: "Active Users",
    sub: "Enterprise workspace accounts"
  },
  {
    target: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Accuracy Rate",
    sub: "Zero-latency data synthesis"
  },
  {
    target: 120,
    decimals: 0,
    suffix: "+",
    label: "Countries",
    sub: "Global edge routing nodes"
  }
];

export default function Stats() {
  return (
    <section className="relative py-20 bg-black overflow-hidden border-y border-white/5">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Stat target value */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3 flex items-baseline">
                <Counter value={stat.target} decimals={stat.decimals} />
                <span className="text-purple-400 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {stat.suffix}
                </span>
              </div>
              
              {/* Stat Name */}
              <div className="text-sm font-semibold text-gray-200 uppercase tracking-widest mb-1.5 group-hover:text-purple-300 transition-colors duration-300">
                {stat.label}
              </div>
              
              {/* Context label */}
              <div className="text-xs text-gray-500 font-normal">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
