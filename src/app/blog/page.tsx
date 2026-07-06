import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import HeroMinimalism from "@/components/ui/HeroMinimalism";
import { BRAND_NAME } from "@/lib/constants";
import BlogList from "@/components/sections/blog/BlogList";

export const metadata: Metadata = {
  title: `Blog & Insights | ${BRAND_NAME}`,
  description: `Stay up to date with the latest innovations, strategies, and technical insights from our expert ${BRAND_NAME} consultants.`,
};

export default function BlogPage() {

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden">
      <BackgroundEffects />
      <Navbar />

      {/* Hero Section */}
      <HeroMinimalism
        kicker="Insights & Strategy"
        title={
          <span className="text-[#f5e1b8]">The {BRAND_NAME} Blog</span>
        }
        subtitle="Stay up to date with the latest innovations, strategies, and technical insights from our expert AI consultants."
        showFooter={false}
      />

      {/* Blog Post Grid Section */}
      <BlogList />

      <Footer />
    </main>
  );
}
