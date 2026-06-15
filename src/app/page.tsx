"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Stats from "@/components/stats/Stats";
import Features from "@/components/features/Features";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import Showcase from "@/components/showcase/Showcase";
import Testimonials from "@/components/testimonials/Testimonials";
import Pricing from "@/components/pricing/Pricing";
import CTA from "@/components/ui/CTA";
import Footer from "@/components/footer/Footer";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
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

      {/* Stats Section */}
      <Stats />

      {/* Capabilities / Features Section */}
      <Features />

      {/* Interactive Showcase Section */}
      <Showcase />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Section */}
      <Pricing />

      {/* Get Started CTA Waitlist Section */}
      <CTA />

      {/* Redesigned Premium Footer */}
      <Footer />
    </main>
  );
}

