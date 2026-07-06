"use client";

import React, { useState } from "react";
import { WovenLightHero } from "@/components/ui/woven-light-hero";
import { Gallery4 } from "@/components/ui/gallery4";
import { CaseStudyModal } from "@/components/sections/usecases/CaseStudyModal";

export default function UsecasesContent() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const caseStudies = [
    {
      id: "1",
      title: "AI IVR Automation for Mortgage Verification",
      description: "Cut verification calls from 20–30 minutes to under 5 minutes with zero human involvement.",
      href: "/usecases/detail?id=1",
      image: "https://ik.imagekit.io/edfoalwork/Edfoal-Images/image_y04y5U6-4.png",
    },
    {
      id: "2",
      title: "AI Web Scraping for Foreclosure Lead Discovery",
      description: "Replaced 6 hours of daily manual data collection with a 5-minute automated pipeline.",
      href: "/usecases/detail?id=2",
      image: "https://ik.imagekit.io/edfoalwork/Edfoal-Images/image_oiI6Lz1Ty.png",
    },
    {
      id: "3",
      title: "Enterprise AI Strategy for a UK Insurance Firm",
      description: "Delivered a board-ready AI adoption roadmap with a three-horizon framework in two months.",
      href: "/usecases/detail?id=3",
      image: "https://ik.imagekit.io/edfoalwork/Edfoal-Images/image.png",
    },
    {
      id: "4",
      title: "AI Product Strategy for Gen AI Startups",
      description: "Helped founders validate concepts, reduce product risk, and create investor-ready roadmaps.",
      href: "/usecases/detail?id=4",
      image: "https://ik.imagekit.io/edfoalwork/Edfoal-Images/image_tzgfHoUqT.png",
    },
    {
      id: "5",
      title: "Automating Data Entry for a 200-Person Team",
      description: "Identified the right 50% of tasks to automate — saving $1M annually while avoiding wasteful AI spend.",
      href: "/usecases/detail?id=5",
      image: "https://ik.imagekit.io/edfoalwork/Edfoal-Images/image_716Qg8M-Y.png",
    },
    {
      id: "6",
      title: "AI-Powered Lead Generation Bot on Telegram",
      description: "Built a human-sounding AI bot that 5× outreach volume with a 25% lead qualification rate.",
      href: "/usecases/detail?id=6",
      image: "https://ik.imagekit.io/edfoalwork/Edfoal-Images/image_zJ6-VBV2A.png",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <WovenLightHero />

      {/* Case Studies Card Grid Section */}
      <div data-theme="light">
        <Gallery4
          title="Our Case Studies"
          description="Each project below represents a real engagement with measurable outcomes. Click to explore the full story."
          items={caseStudies}
          onItemClick={(id) => setActiveId(id)}
        />
      </div>

      {/* Case Study Detail Modal Overlay */}
      <CaseStudyModal caseStudyId={activeId} onClose={() => setActiveId(null)} />
    </>
  );
}
