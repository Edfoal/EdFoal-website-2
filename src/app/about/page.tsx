"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import AboutHero from "@/components/sections/about/AboutHero";
import Team from "@/components/sections/about/Team";
import AboutUs from "@/components/sections/about/AboutUs";
import useLenis from "@/hooks/useLenis";

export default function AboutPage() {
  useLenis();

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden">
      {/* Premium fixed background gradients, noise and grids */}
      <BackgroundEffects />

      {/* Floating glass navbar */}
      <Navbar />

      {/* Hero Section */}
      <AboutHero />

      {/* About Us — 3D Spline Section */}
      <AboutUs />

      {/* Team Section */}
      <Team />

      {/* Footer */}
      <Footer />
    </main>
  );
}
