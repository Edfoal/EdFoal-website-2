"use client";

import React from "react";
import Globe3DDemoSecond from "@/components/ui/Globe3D-demo-2";

export default function OurServices() {
  return (
    <section
      id="services"
      data-theme="light"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-primary px-4 py-12 sm:px-6 sm:py-14 md:px-12 md:py-16 lg:px-18 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-360 flex-col items-center text-center">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-quaternary bg-secondary px-4 py-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            <span className="text-14 font-600 leading-none tracking-widest text-secondary">
              Our Services
            </span>
          </div>
        </div>
        <p className="mt-4 max-w-5xl text-center text-[clamp(2rem,8vw,3rem)] font-600 leading-[0.98] tracking-[-0.06em] text-primary sm:mt-3 md:leading-[0.95] lg:text-[36px]">
          <span className="block">
            Tailored AI Solutions to Drive <br className="hidden sm:block" />Your Business Forward
          </span>
        </p>
        <p className="mx-auto mb-8 mt-4 max-w-4xl text-14 font-500 leading-relaxed text-secondary md:text-[16px] lg:mb-6">
          From automation to custom AI systems, our solutions are designed to optimize operations, elevate customer interactions, and enhance overall business performance.
        </p>
        <div className="flex w-full justify-center">
          <Globe3DDemoSecond />
        </div>
      </div>
    </section>
  );
}

