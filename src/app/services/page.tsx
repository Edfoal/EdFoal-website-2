import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesContent from "@/components/sections/services/ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Edfoal",
  description: "Explore our comprehensive range of AI services designed to enhance business operations, drive innovation, and deliver customized solutions.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white text-zinc-900 selection:bg-purple-500/20 selection:text-purple-900 overflow-hidden">
      <Navbar />
      <ServicesContent />
      <Footer />
    </main>
  );
}
