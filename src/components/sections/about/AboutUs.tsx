'use client'

import React from "react";
import { RobotHero } from "@/components/ui/RobotHero";
import { BRAND_NAME } from "@/lib/constants";

export default function AboutUs() {
  return (
    <RobotHero
      id="about-us"
      title={
        <>
          About US
          <br />
          <span className="text-xl md:text-3xl text-neutral-300 font-semibold mt-2 block">
            Get to Know {BRAND_NAME}
          </span>
        </>
      }
      subtitle="We’re transforming businesses with custom AI solutions that drive efficiency, innovation, and growth. Let’s unlock your potential with AI built just for you."
    />
  );
}
