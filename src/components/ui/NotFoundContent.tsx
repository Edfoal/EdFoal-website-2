"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { OriginButton } from "@/components/ui/OriginButton";

export default function NotFoundContent() {
  const router = useRouter();

  return (
    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
      {/* Animated 3D/Cosmic Globe Graphic */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12 flex items-center justify-center">
        {/* Outer glowing orbital rings */}
        <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_12s_linear_infinite] shadow-[0_0_50px_rgba(168,85,247,0.15)]" />
        <div className="absolute inset-4 rounded-full border border-indigo-400/30 animate-[spin_8s_linear_infinite_reverse] border-dashed" />
        <div className="absolute inset-10 rounded-full border border-blue-400/20 animate-[spin_16s_linear_infinite]" />

        {/* Core Glowing Planet */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full bg-linear-to-tr from-indigo-950 via-purple-900 to-blue-600 shadow-[0_0_80px_rgba(139,92,246,0.5)] flex items-center justify-center overflow-hidden border border-white/20">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-black/40 rounded-full blur-md" />

          {/* Holographic 404 text inside the sphere */}
          <span className="text-4xl md:text-5xl font-black tracking-tighter text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] z-10 select-none animate-pulse">
            404
          </span>
        </div>

        {/* Orbiting Satellites / Data Nodes */}
        <div className="absolute top-4 left-10 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa] animate-ping" />
        <div className="absolute bottom-8 right-12 w-2.5 h-2.5 bg-purple-400 rounded-full shadow-[0_0_10px_#c084fc]" />
        <div className="absolute top-1/2 -right-2 w-2 h-2 bg-pink-400 rounded-full shadow-[0_0_8px_#f472b6]" />
      </div>

      {/* Messaging */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase text-purple-300 mb-6 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
        Anomaly Detected
      </div>

      <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-none">
        Lost in the <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-indigo-300 to-blue-400">AI Cosmos</span>
      </h1>

      <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg mb-10 font-normal">
        The neural pathway or destination you are searching for does not exist in our current space-time continuum or has been decommissioned.
      </p>

      {/* Interactive Back / Home CTA */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        <OriginButton
          onClick={() => router.push("/")}
          className="h-12 w-full sm:w-64 rounded-full border text-sm font-semibold tracking-wide cursor-pointer shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-shadow"
          style={{
            "--ic-card": "#ffffff",
            "--ic-card-foreground": "#000000",
            "--ic-border": "#ffffff",
            "--ic-foreground": "#000000",
            "--ic-background": "#ffffff",
          } as React.CSSProperties}
        >
          Return to Earth (Home)
        </OriginButton>
      </div>
    </div>
  );
}
