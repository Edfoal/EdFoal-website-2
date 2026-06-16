"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import OurServices from "@/components/services/OurServices";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import Footer from "@/components/footer/Footer";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import { CircularTestimonialsDemo } from "@/components/ui/circular-testimonials-demo";
import useLenis from "@/hooks/useLenis";

export default function Home() {
  // Initialize Lenis scroll smoothing on layout mount
  useLenis();

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

      {/* Interactive Capabilities / Services Detail Showcase */}
      <section id="solutions" className="w-full bg-[#030712] py-20 px-6 md:px-16 lg:px-24 flex flex-col items-center justify-center relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-[20%] w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4 block">
              Core Capabilities
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Explore Our Solutions
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
              Click through our custom AI frameworks and integration services.
            </p>
          </div>
          <CircularTestimonialsDemo />
        </div>
      </section>

      {/* Redesigned Premium Footer */}
      <Footer />
    </main>
  );
}


