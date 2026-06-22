'use client'

import React from "react";
import { SplineScene } from "@/components/ui/Splite";
import { Card } from "@/components/ui/Card";
import { Spotlight } from "@/components/ui/Spotlight";

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="w-full h-full relative overflow-hidden bg-white"
      style={{ padding: "10px 10px" }}
    >
      <div
        className="w-full mx-auto"
        style={{ maxWidth: "1460px" }}
      >
        {/* Section header */}
        <div className="text-center mb-12">
          {/* Pill badge */}
          {/* <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
            </span>
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase leading-none">
              About Us
            </span>
          </div> */}


        </div>

        {/* 3D Spline Card */}
        <Card className="w-full h-auto bg-black/[0.96] relative overflow-hidden border-white/10">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex flex-col lg:flex-row min-h-[600px] md:min-h-[750px] lg:min-h-[850px] w-full relative">
            {/* Left content */}
            <div className="w-full lg:w-[50%] p-8 md:p-12 lg:p-16 relative z-10 flex flex-col justify-center lg:ml-12" style={{margin:"0 0 0 5rem"}}>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight mb-8 mt-12 lg:mt-16" style={{margin:"5rem 0 2rem 0"}}>
                About Us
                <br />
                <span className="text-xl md:text-3xl text-neutral-300 font-semibold mt-2 block">
                  Who We Are at EdFoal AI
                </span>
              </h3>

              <div className="space-y-6 text-neutral-400 max-w-xl text-base md:text-lg leading-relaxed">
                <p>
                  At EdFoal AI, we are passionate about leveraging the transformative power of artificial intelligence to help businesses succeed. Founded with the vision of making AI accessible and impactful, we specialize in designing tailored AI solutions that reduce costs, save time, and enhance overall efficiency.
                </p>
                <p>
                  Our mission is simple: to empower businesses with intelligent tools that solve their unique challenges and create new opportunities for growth. We understand that no two businesses are the same, which is why we take a personalized approach to every project.
                </p>
                <p>
                  Our team of AI experts works closely with clients to understand their specific needs, design innovative AI systems, and implement seamless solutions that integrate perfectly into existing operations.
                </p>
                <p>
                  Whether you&apos;re looking to automate processes, gain actionable insights from data, or develop a completely custom AI solution, EdFoal AI is your trusted partner in driving results. We help companies of all sizes unlock their full potential and stay competitive in today&apos;s rapidly evolving marketplace.
                </p>
              </div>
            </div>

            {/* Right content — 3D Spline Scene (positioned absolutely on desktop to prevent clipping and overlap text background) */}
            <div className="w-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[58%] min-h-[350px] md:min-h-[500px] lg:min-h-full z-0 overflow-visible">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full scale-100 lg:scale-105"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
