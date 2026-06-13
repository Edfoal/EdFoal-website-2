"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ParticleBrain from "./ParticleBrain";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);

  // Mutable animation state passed to R3F canvas via ref
  // brainX = fraction of 3D viewport width (+0.25 → -0.20)
  const animState = useRef({
    brainX: 0.25,
    brainY: 0.0,
    brainZ: 0.0,
    brainScale: 1.0,
    rotYOffset: 0.0,
    cameraZ: 3.6,
    cameraX: 0.0,
    cameraY: 0.0,
    lookAtX: 0.0,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: canvasContainerRef.current,
          pinSpacing: false,
          scrub: 0.5,
        },
      });

      // Lateral brain slide only — no zoom, no camera pan, no scale change
      tl.to(animState.current, {
        brainX: -0.20,
        brainScale: 1.0,
        duration: 1,
        ease: "power1.inOut",
      }, 0);

      // Fade out hero content (0% → 60% scroll)
      tl.to(".hero-content", {
        opacity: 0,
        y: -40,
        duration: 0.6,
        ease: "power1.inOut",
      }, 0);

      // Fade in second content (40% → 100% scroll)
      tl.fromTo(
        ".second-content",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power1.inOut" },
        0.4
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[130vh] bg-[#080808]">
      {/* Pinned canvas layer */}
      <div
        ref={canvasContainerRef}
        className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <ParticleBrain animState={animState} />
        </div>
      </div>

      {/* Scrolling text content */}
      <div className="relative z-10 w-full">
        {/* Section 1: Text Left, Brain Right */}
        <section className="w-full h-[65vh] flex items-center pointer-events-none select-text">
          <div
            className="hero-content flex flex-col justify-center pointer-events-auto"
            style={{ paddingLeft: "7%" }}
          >
            <h1
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: "clamp(58px, 7.2vw, 94px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 0.96,
                letterSpacing: "-3px",
                marginBottom: "26px",
              }}
            >
              Unlock
              <br />
              collective
              <br />
              wisdom.
            </h1>

            <div
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "10.5px",
                fontWeight: 800,
                color: "#d4860a",
                letterSpacing: "2.5px",
                textTransform: "uppercase" as const,
                marginBottom: "20px",
              }}
            >
              Stop managing knowledge. Start using it.
            </div>

            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.7,
                maxWidth: "305px",
                marginBottom: "34px",
              }}
            >
              Plug into your team&apos;s shared brainpower. Ask Dala to instantly
              find anything or anyone from any workplace system. Focus on doing
              your best work with context, conviction and clarity.
            </p>

            <button
              className="hover:bg-[#6d28d9] transition-colors duration-300 shadow-[0_0_20px_rgba(124,58,237,0.3)]"
              style={{
                display: "inline-block",
                background: "#7c3aed",
                color: "#fff",
                fontFamily: "Arial, sans-serif",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                textTransform: "uppercase" as const,
                padding: "14px 28px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              Request Access
            </button>
          </div>
        </section>

        {/* Section 2: Brain Left, New Content Right */}
        <section className="w-full h-[65vh] flex items-center justify-end pointer-events-none select-text">
          <div
            className="second-content flex flex-col justify-center pointer-events-auto"
            style={{ paddingRight: "7%", maxWidth: "440px" }}
          >
            <h2
              style={{
                fontFamily: "'Arial Black', Arial, sans-serif",
                fontSize: "clamp(34px, 4.5vw, 52px)",
                fontWeight: 900,
                color: "#fff",
                lineHeight: 1.05,
                letterSpacing: "-2px",
                marginBottom: "22px",
              }}
            >
              Make decisions
              <br />
              with confidence
            </h2>

            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "15px",
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.7,
                maxWidth: "340px",
              }}
            >
              Dala&apos;s bleeding-edge AI search tool automates extracting
              knowledge from across your organisation so that you can take the
              guesswork out of your work.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
