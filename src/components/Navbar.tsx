"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const EdfoalLogo = () => (
  <div className="flex items-center select-none group cursor-pointer">
    <img
      src="https://ik.imagekit.io/edfoalImage/assets/image/footerlogo.png"
      alt="Edfoal"
      width={150}
      height={22}
      className="h-[22px] w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
      style={{marginLeft: "20px"}}
    />
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 transition-all duration-300 flex items-center rounded-full border shadow-lg ${
          scrolled
            ? "h-16 bg-black/70 backdrop-blur-md border-white/10 shadow-black/25"
            : "h-20 bg-black/30 backdrop-blur-sm border-white/5 shadow-black/10"
        }`}
      >
        <div className="w-full px-12 flex items-center justify-between">
          
          {/* 1. Left Column: Brand Logo */}
          <div className="flex-1 md:flex-initial md:w-1/3 flex justify-start items-center">
            <a href="#" className="flex items-center">
              <EdfoalLogo />
            </a>
          </div>

          {/* 2. Middle Column: Centered links (Desktop only) */}
          <div className="hidden md:flex md:w-1/3 justify-center items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] text-gray-400 hover:text-white transition-colors duration-200 tracking-[0.22em] font-bold uppercase py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 3. Right Column: CTA Button (Desktop) / Hamburger (Mobile) */}
          <div 
          style={{marginRight:"20px"}}
          className="flex-1 md:flex-initial md:w-1/3 flex justify-end items-center gap-4 ">
            
            <HoverBorderGradient
              as="a"
              href="#contact"
              containerClassName="hidden md:inline-flex rounded-full w-[160px] h-[40px]"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center text-sm font-medium w-full h-full"
            >
              Contact Us
            </HoverBorderGradient>

            {/* Mobile Menu Toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white focus:outline-none p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-28 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold tracking-[0.2em] text-gray-300 hover:text-white transition-colors py-3.5 border-b border-white/5 uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="flex flex-col gap-4">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-4 rounded-full text-[11px] font-black uppercase tracking-[0.18em] bg-[#d4ff3f] text-black shadow-[0_0_20px_rgba(212,255,63,0.3)]"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
