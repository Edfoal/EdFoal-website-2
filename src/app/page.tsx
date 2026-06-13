"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import useLenis from "@/hooks/useLenis";

export default function Home() {
  // Initialize Lenis scroll smoothing on layout mount
  useLenis();

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200">
      {/* Floating glass navbar */}
      <Navbar />

      {/* Main scroll-storytelling hero section */}
      <HeroSection />
    </main>
  );
}

