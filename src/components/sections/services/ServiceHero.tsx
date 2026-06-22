"use client";

import React from "react";
import HeroMinimalism from "@/components/ui/HeroMinimalism";

export default function ServiceHero() {
  return (
    <HeroMinimalism
      kicker="Our Services"
      title={
        <>
          Custom AI Solutions <br />
          For Your Needs
        </>
      }
      subtitle="Tailored technologies designed to drive your business forward and address your unique challenges!"
      isLight={false}
    />
  );
}
