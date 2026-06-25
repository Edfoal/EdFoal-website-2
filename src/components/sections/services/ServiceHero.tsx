"use client";

import React from "react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

export default function ServiceHero() {
  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ padding: "10px 10px 0px 10px" }}
    >
      <div
        className="w-full mx-auto relative"
        style={{ maxWidth: "1460px" }}
      >
        <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[675px] overflow-hidden rounded-t-xl bg-black/[0.96]">
          <div className="flex flex-col lg:flex-row w-full h-full items-center">
            {/* Left content — Text */}
            <div className="w-full lg:w-[45%] p-6 md:p-8 relative z-10 flex flex-col justify-center" style={{ margin: "0 0 5rem 5rem" }}>
              <span className="text-xs font-semibold tracking-widest text-purple-400 uppercase block mb-4">
                Our Services
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-4 mt-6 lg:mt-8" style={{ margin: "2rem 0 1rem 0" }}>
                Custom AI Solutions <br />
                For Your Needs
              </h1>
              <p className="text-neutral-400 max-w-xl text-base md:text-lg leading-relaxed">
                Tailored technologies designed to drive your business forward and address your unique challenges!
              </p>
            </div>

            {/* Right content — 3D Spline Robot */}
            <div className="w-full lg:w-[55%] h-[300px] md:h-[400px] lg:h-[550px] relative flex items-center justify-center overflow-visible">
              <InteractiveRobotSpline
                scene={ROBOT_SCENE_URL}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Bottom gradient fade to white */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none z-20" />
        </div>
      </div>
    </section>
  );
}
