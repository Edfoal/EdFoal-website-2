import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edfoal | Transform Learning Into Intelligence",
  description: "Edfoal helps students, educators, and organizations unlock knowledge through AI-powered learning experiences and intelligent insights.",
};

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/home/Hero";
import LogoTicker from "@/components/sections/home/LogoTicker";
import OurServices from "@/components/sections/home/OurServices";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import Footer from "@/components/layout/Footer";
import ElevateSection from "@/components/sections/home/ElevateSection";
import IndustriesHoverExpand from "@/components/sections/home/IndustriesHoverExpand";
import HowWeWork from "@/components/sections/home/HowWeWork";
import BackgroundEffects from "@/components/ui/BackgroundEffects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200">
      {/* Premium fixed background gradients, noise and grids */}
      <BackgroundEffects />

      {/* Floating glass navbar */}
      <Navbar />

      {/* Main scroll-storytelling hero section */}
      <HeroSection />

      {/* Infinite scrolling logo ticker */}
      <LogoTicker />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Our Services Section */}
      <OurServices />

      {/* Industries Hover Expand Section */}
      <IndustriesHoverExpand />

      {/* How We Work Section */}
      <HowWeWork />

      {/* Elevate Section */}
      <ElevateSection />

      {/* Redesigned Premium Footer */}
      <Footer />
    </main>
  );
}
