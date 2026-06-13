"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black -z-50 pointer-events-none select-none">
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-25" />

      {/* Noise overlay */}
      <div className="noise-overlay" />

      {/* Aurora glow at the top */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.08),transparent_50%)]" />

      {/* Floating blur gradient blobs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-purple-500/8 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -90, 70, 0],
          y: [0, 80, -60, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-indigo-500/6 blur-[150px]"
      />

      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, 90, -40, 0],
          scale: [1, 1.2, 0.85, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[50%] left-[45%] w-[300px] h-[300px] rounded-full bg-violet-600/5 blur-[110px]"
      />

      {/* Drifting background dust particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => {
          const delay = i * 0.4;
          const duration = 12 + (i % 5) * 4;
          const left = `${(i * 7.7) % 100}%`;
          const top = `${(i * 13.3) % 100}%`;
          const size = 1 + (i % 3);

          return (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-0"
              style={{
                left,
                top,
                width: size,
                height: size,
                boxShadow: size > 1 ? "0 0 8px rgba(255, 255, 255, 0.8)" : "none",
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
