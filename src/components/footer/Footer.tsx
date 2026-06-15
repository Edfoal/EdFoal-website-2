"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020b18] text-white pt-16 pb-8 border-t-4 border-[#0066cc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Logo & Description Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex flex-col items-start gap-4">
            <a href="#" className="flex items-center select-none mb-2">
              <img
                src="https://ik.imagekit.io/edfoalImage/assets/image/footerlogo.png"
                alt="Edfoal Logo"
                className="h-[28px] w-auto object-contain"
              />
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-normal">
              At EdFoal AI, we create tailored AI solutions to reduce costs, save time, and enhance business efficiency for growth.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-blue-400 transition-colors mt-2 text-sm"
            >
              LinkedIn
            </a>
          </div>

          {/* Our Pages Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 lg:col-start-6 flex flex-col gap-4">
            <h4 className="text-white text-base font-bold tracking-wide">
              Our Pages
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-white text-base font-bold tracking-wide">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#solutions" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Automation
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  Tailored AI Solutions
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
                  AI Consultancy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-white text-base font-bold tracking-wide">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-sm">
              <div>
                <span className="text-zinc-500 block mb-1">Send Mail</span>
                <a href="mailto:info@edfoal.com" className="text-zinc-400 hover:text-white transition-colors">
                  info@edfoal.com
                </a>
              </div>
              <div>
                <span className="text-zinc-500 block mb-1">Opening Hours</span>
                <span className="text-zinc-400 font-bold">
                  Mon - Fri, 9:00 - 20:00
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider hairline line */}
        <div className="w-full h-[1px] bg-white/10 my-6" />

        {/* Copyright */}
        <div className="text-center text-xs text-zinc-500 py-2">
          &copy; 2025 Edfoal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
