"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { useCanRender3D } from "@/hooks/useCanRender3D";
import { useInView } from "framer-motion";

function GlobeFallbackPlaceholder() {
  return (
    <div className="relative my-4 flex min-h-[960px] w-full max-w-[1400px] flex-col items-start justify-start overflow-hidden rounded-3xl bg-white p-4 shadow-sm shadow-black/5 sm:my-6 sm:min-h-[980px] sm:p-6 md:min-h-[940px] md:p-8 lg:my-8 lg:h-[800px] lg:min-h-0 lg:p-12 xl:p-16">
      {/* Top Row: Left card + Right circular testimonials */}
      <div className="relative z-10 flex w-full flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:gap-8 w-full">
        {/* Left: Realtime Tracking Card */}
        <div className="relative z-10 flex min-h-[320px] w-full max-w-88 shrink-0 flex-col items-center justify-center gap-y-5 overflow-hidden rounded-3xl border border-neutral-200/80 bg-white/95 p-5 text-center text-gray-900 shadow-2xl backdrop-blur-sm sm:h-[360px] sm:max-w-92 sm:p-6 lg:h-95 lg:max-w-95">
          <div className="relative z-20 flex flex-col items-center">
            {/* Globe icon badge */}
            <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="mb-1 text-[clamp(1.5rem,7vw,1.75rem)] font-extrabold leading-tight tracking-tight text-gray-900">
              Realtime tracking
            </h3>
            <p className="max-w-[280px] text-sm font-normal leading-relaxed text-zinc-600 sm:text-base">
              Watch visitors arrive and interact with your site as it happens.
            </p>
          </div>
          <div className="relative z-20 mx-auto flex w-fit flex-col items-start space-y-2.5 text-left">
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>AI-Driven Automation</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>Custom AI Systems</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>Customer Feedback Intelligence</span>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>Knowledge Base Optimization</span>
            </div>
          </div>
        </div>

        {/* Right: Mock Testimonial Card */}
        <div className="relative z-10 flex min-h-[330px] w-full flex-1 items-start justify-center overflow-visible rounded-2xl sm:min-h-[360px] md:min-h-[380px] lg:justify-end lg:pr-12">
          <div className="relative flex w-full max-w-full flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-900 text-white p-6 shadow-2xl md:p-8 lg:ml-auto lg:max-w-[550px] lg:translate-x-[30px] xl:translate-x-[82px] h-95">
            <div className="flex flex-col gap-4">
              <div className="h-6 w-3/4 rounded bg-zinc-800 animate-pulse" />
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-zinc-800 animate-pulse" />
                <div className="h-4 w-5/6 rounded bg-zinc-800 animate-pulse" />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <div className="h-10 w-10 rounded-full bg-zinc-800 animate-pulse" />
              <div className="flex flex-col gap-1.5 flex-1">
                <div className="h-4 w-1/3 rounded bg-zinc-800 animate-pulse" />
                <div className="h-3 w-1/4 rounded bg-zinc-800 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static map placeholder */}
      <div className="absolute bottom-[-90px] left-0 z-10 flex h-[340px] w-full items-center justify-center sm:bottom-[-120px] sm:h-[420px] md:bottom-[-180px] md:h-[600px] lg:bottom-[-220px] lg:h-168">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/world-map.svg"
          alt="Global reach"
          className="h-full w-full object-contain opacity-[0.07]"
        />
      </div>
    </div>
  );
}

const ServicesGlobeSection = dynamic(() => import("./ServicesGlobeSection"), {
  ssr: false,
  loading: () => <GlobeFallbackPlaceholder />,
});

export default function OurServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canRender3D = useCanRender3D();
  // Trigger when section is within 300px of the viewport — gives the Globe
  // time to initialise its Canvas before the user actually scrolls to it.
  const isInView = useInView(sectionRef, { once: true, margin: "300px" });

  return (
    <section
      id="services"
      ref={sectionRef}
      data-theme="light"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-12 md:py-16 lg:px-18 xl:px-24"
    >
      <div className="mx-auto flex w-full max-w-360 flex-col items-center text-center">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E2076D]" />
            </span>
            <span className="text-sm font-semibold leading-none tracking-widest text-gray-600">
              Our Services
            </span>
          </div>
        </div>
        <p className="mt-4 max-w-5xl text-center text-[clamp(2rem,8vw,3rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-gray-950 sm:mt-3 md:leading-[0.95] lg:text-[36px]">
          <span className="block">
            Tailored AI Solutions to Drive <br className="hidden sm:block" />Your Business Forward
          </span>
        </p>
        <p className="mx-auto mb-8 mt-4 max-w-4xl text-sm font-medium leading-relaxed text-gray-500 md:text-[16px] lg:mb-6">
          From automation to custom AI systems, our solutions are designed to optimize operations, elevate customer interactions, and enhance overall business performance.
        </p>
        <div className="flex w-full justify-center">
          {isInView ? (
            <ServicesGlobeSection enabled={canRender3D} />
          ) : (
            <GlobeFallbackPlaceholder />
          )}
        </div>
      </div>
    </section>
  );
}
