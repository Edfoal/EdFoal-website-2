"use client";

import React from "react";
import { motion } from "framer-motion";
import { OriginButton } from "@/components/ui/OriginButton";

const avatars = [
  "https://assets.aceternity.com/avatars/1.webp",
  "https://assets.aceternity.com/avatars/2.webp",
  "https://assets.aceternity.com/avatars/3.webp",
  "https://assets.aceternity.com/avatars/4.webp",
];

export default function ElevateSection() {
  return (
    <section style={{paddingBottom:"2rem"}} className="relative w-full flex justify-center px-4 sm:px-6 lg:px-8 py-10 bg-white">
      <div
        className="relative w-full max-w-[1400px] h-[400px] rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(to bottom, #ec4899, #8b5cf6, #3b82f6)",
        }}
      >
        {/* Floating animated ambient light glows that keep the base gradient colors completely static */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none filter blur-[90px]"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 70%)",
            top: "-200px",
            left: "-200px",
          }}
          animate={{
            x: [0, 250, 120, 0],
            y: [0, 120, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full pointer-events-none filter blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
            bottom: "-150px",
            right: "-150px",
          }}
          animate={{
            x: [0, -180, -40, 0],
            y: [0, -70, 70, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Subtle dark overlay on the left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-[1]" />

        {/* Content — positioned via absolute to match red-box layout */}
        <div className="absolute z-10 inset-0">
          {/* Trust Badge — top-left */}
          <div
            className="absolute flex items-center gap-3"
            style={{ top: "32px", left: "48px" }}
          >
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Trusted over 5,000+
            </span>
            <div className="flex -space-x-2.5">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`User ${i + 1}`}
                  className="w-8 h-8 rounded-full border-2 border-white/80 object-cover"
                />
              ))}
            </div>
          </div>

          {/* Heading — below trust badge, left-aligned */}
          <h2
            className="absolute text-4xl sm:text-[2.75rem] lg:text-[2.85rem] font-extrabold text-white leading-[1.15] tracking-tight"
            style={{ top: "85px", left: "48px", maxWidth: "560px" }}
          >
            How Can We Elevate
            <br />
            Your Success?
          </h2>

          {/* Description — below heading, left-aligned */}
          <p
            className="absolute text-[14px] sm:text-[15px] leading-relaxed"
            style={{
              
              bottom: "9rem",
              left: "48px",
              maxWidth: "480px",
              color: "#fff",
            }}
          >
           Let us unlock new opportunities and drive your business forward with our expert solutions! 
          </p>

          {/* CTA Button — positioned where arrow points (right-center) */}
          <div
            className="absolute"
            style={{ bottom: "50%", right: "120px", transform: "translateY(50%)" }}
          >
            <OriginButton
              className="rounded-full px-6 w-[210px] h-[43px] text-sm font-semibold tracking-wide border-[0.5px] group"
              style={{
                "--ic-card": "#ffffff",
                "--ic-card-foreground": "#1a1a1a",
                "--ic-border": "#ffffff",
                "--ic-foreground": "#1a1a1a",
                "--ic-background": "#ffffff",
              } as React.CSSProperties}
              onClick={() => {
                const contactElem = document.getElementById("contact");
                if (contactElem) {
                  contactElem.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Our Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </OriginButton>
          </div>
        </div>
      </div>
    </section>
  );
}
