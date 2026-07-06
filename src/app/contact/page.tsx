import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BRAND_NAME } from "@/lib/constants";
import ContactContent from "@/components/sections/contact/ContactContent";

export const metadata: Metadata = {
  title: `Contact Us | ${BRAND_NAME}`,
  description: `Get in touch with our ${BRAND_NAME} AI strategy and engineering team to explore cutting-edge AI solutions tailored just for you.`,
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-900 selection:bg-purple-500/10 selection:text-purple-900 overflow-hidden">
      {/* Light Background Gradients & Grid */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-white -z-50 pointer-events-none select-none">
        <div className="absolute inset-0 opacity-70 bg-size-[50px_50px] bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)]" />
        <div className="noise-overlay" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.04),transparent_50%)]" />
        <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-purple-400/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[140px]" />
      </div>

      {/* Floating Navbar */}
      <Navbar />

      {/* Interactive Contact Hero & Form Content */}
      <ContactContent />

      {/* Footer inside light theme wrapper */}
      <div data-theme="light">
        <Footer />
      </div>
    </main>
  );
}
