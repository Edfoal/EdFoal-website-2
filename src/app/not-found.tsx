import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import NotFoundContent from "@/components/ui/NotFoundContent";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden flex flex-col justify-between">
      <BackgroundEffects />
      <Navbar />

      {/* Main Cosmic 404 Section */}
      <section className="relative z-10 flex-1 flex items-center justify-center px-6 py-24 text-center">
        <NotFoundContent />
      </section>

      <Footer />
    </main>
  );
}
