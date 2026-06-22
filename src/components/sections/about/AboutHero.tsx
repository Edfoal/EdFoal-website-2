"use client";

import React from "react";
import HeroMinimalism from "@/components/ui/HeroMinimalism";

export default function AboutHero() {
  return (
    <HeroMinimalism
      kicker="About Us"
      title={<span className="text-[#f5e1b8]">Get to Know EdFoal</span>}
      subtitle="We're transforming businesses with custom AI solutions that drive efficiency, innovation, and growth. Let's unlock your potential with AI built just for you."
      showFooter={false}
    />
  );
}
