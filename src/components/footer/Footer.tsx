"use client";

import React from "react";
import { FiGithub, FiTwitter, FiSlack, FiCpu } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Product",
      links: [
        { label: "Console", href: "#solutions" },
        { label: "Live Synapses", href: "#solutions" },
        { label: "Model Adapters", href: "#features" },
        { label: "Security", href: "#features" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Manifesto", href: "#manifesto" },
        { label: "About Us", href: "#about" },
        { label: "Careers", href: "#careers" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "API Reference", href: "#docs" },
        { label: "Changelog", href: "#changelog" },
        { label: "System Status", href: "#status" },
      ],
    },
  ];

  return (
    <footer className="relative bg-black pt-20 pb-12 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Ambient background soft light */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[150px] bg-purple-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center gap-2.5 text-white font-bold text-xl tracking-wider select-none">
              <svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="url(#dalaFooterLogoGrad)" />
                <path d="M16 9L23.5 13.5V22.5L16 27L8.5 22.5V13.5L16 9Z" fill="#000000" fillOpacity="0.25" />
                <defs>
                  <linearGradient id="dalaFooterLogoGrad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-semibold bg-gradient-to-r from-white via-white to-purple-200 bg-clip-text text-transparent">
                Dala
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-normal">
              Continuous context synthesis, deep conceptual clustering, and real-time predictive synapses. Accelerating enterprise decision loops.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              <a href="#github" aria-label="Github" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-950/15 transition-all duration-300">
                <FiGithub className="w-4.5 h-4.5" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-950/15 transition-all duration-300">
                <FiTwitter className="w-4.5 h-4.5" />
              </a>
              <a href="#slack" aria-label="Slack" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-950/15 transition-all duration-300">
                <FiSlack className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Links Section Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4 className="text-white text-xs font-bold uppercase tracking-widest font-semibold">
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white hover:translate-x-1.5 inline-block transition-all duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Divider hairline line */}
        <div className="w-full h-[1px] bg-white/5 mb-8" />

        {/* Copyright & Subbar Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            &copy; {currentYear} Dala Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-white transition-colors">Security Specs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
