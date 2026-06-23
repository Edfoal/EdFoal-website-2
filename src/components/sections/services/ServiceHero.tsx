"use client";

import React from "react";
import { RobotHero } from "@/components/ui/RobotHero";

export default function ServiceHero() {
  return (
    <RobotHero
      kicker="Our Services"
      title={
        <>
          Custom AI Solutions <br />
          For Your Needs
        </>
      }
      subtitle="Tailored technologies designed to drive your business forward and address your unique challenges!"
    />
  );
}
