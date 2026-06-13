"use client";

import React from "react";
import { motion } from "framer-motion";
import CanvasBrain from "./CanvasBrain";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen lg:h-screen overflow-hidden bg-[#080808] flex items-center">
      {/* Background canvas brain and float triangles */}
      <CanvasBrain />

      {/* Hero content overlays the canvases. 
          Use pointer-events-none on the grid and pointer-events-auto on the elements to allow canvas interaction if needed while keeping button clicks working. */}
      <div className="relative z-10 w-full lg:absolute lg:left-0 lg:top-0 lg:bottom-0 lg:w-[43%] flex flex-col justify-center px-6 md:px-12 lg:px-0 lg:pl-[7%] py-24 lg:py-0 pointer-events-none">
        <div className="pointer-events-auto flex flex-col justify-center">
          
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
          </motion.h1>

          {/* Dala Subheading Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "10.5px",
              fontWeight: 800,
              color: "#d4860a",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            Stop managing knowledge. Start using it.
          </motion.div>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "15px",
              color: "rgba(255, 255, 255, 0.68)",
              lineHeight: 1.70,
              maxWidth: "305px",
              marginBottom: "34px",
            }}
          >
            Plug into your team's shared brainpower. Ask Dala to instantly find anything or anyone from any workplace system. Focus on doing your best work with context, conviction and clarity.
          </motion.p>

          {/* CTA Action button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
                textTransform: "uppercase",
                padding: "14px 28px",
                borderRadius: "50px",
                border: "none",
                cursor: "pointer",
                width: "fit-content",
              }}
              onClick={() => {
                const contactElem = document.getElementById("contact");
                if (contactElem) {
                  contactElem.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Request Access
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

