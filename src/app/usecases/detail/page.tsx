import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudyDetailContent from "@/components/sections/usecases/CaseStudyDetailContent";
import { caseStudiesData } from "@/data/caseStudies";

interface UsecaseDetailProps {
  searchParams: Promise<{ id?: string }>;
}

export async function generateMetadata({ searchParams }: UsecaseDetailProps): Promise<Metadata> {
  const { id } = await searchParams;
  const studyId = id || "1";
  const study = caseStudiesData[studyId] || caseStudiesData["1"];
  return {
    title: `${study.title} | Edfoal Case Studies`,
    description: study.subtitle,
  };
}

export default async function UsecaseDetailPage({ searchParams }: UsecaseDetailProps) {
  const { id } = await searchParams;
  const studyId = id || "1";
  const study = caseStudiesData[studyId] || caseStudiesData["1"];

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

      <Navbar />
      <CaseStudyDetailContent study={study} />
      <Footer />
    </main>
  );
}
