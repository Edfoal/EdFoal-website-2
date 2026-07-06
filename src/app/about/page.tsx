import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Edfoal",
  description: "Learn about Edfoal's mission, our 3D interactive capabilities, and how we transform learning into intelligence.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import AboutUs from "@/components/sections/about/AboutUs";
import AboutUsSection from "@/components/ui/about-us-section";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden">
      {/* Premium fixed background gradients, noise and grids */}
      <BackgroundEffects />

      {/* Floating glass navbar */}
      <Navbar />

      {/* About Us — 3D Spline Section */}
      <AboutUs />

      {/* Interactive Capabilities & Stats Section */}
      <AboutUsSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
