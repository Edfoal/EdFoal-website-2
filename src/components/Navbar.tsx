"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const EdfoalLogo = () => (
  <div className="flex items-center gap-2.5 text-white font-bold text-xl tracking-wide select-none">
    {/* Clean geometric premium logo mark for Edfoal */}
    <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform hover:scale-105 transition-transform duration-200">
      <path d="M6 4H26V8H10V14H22V18H10V28H6V4Z" fill="url(#logoGrad)" />
      <path d="M10 14H26V18H10V14Z" fill="url(#logoGradSecondary)" />
      <defs>
        <linearGradient id="logoGrad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#c084fc" /> {/* Purple */}
          <stop offset="50%" stopColor="#8b5cf6" /> {/* Indigo */}
          <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
        </linearGradient>
        <linearGradient id="logoGradSecondary" x1="10" y1="14" x2="26" y2="18" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#fbbf24" /> {/* Gold */}
        </linearGradient>
      </defs>
    </svg>
    <span className="font-bold tracking-tight text-white font-sans text-xl">Edfoal</span>
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
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 bg-black/65 backdrop-blur-md border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#">
            <EdfoalLogo />
          </a>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-white transition-colors duration-200 tracking-widest font-semibold py-1 uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA button */}
            <a
              href="#get-started"
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#8b5cf6] hover:bg-[#7c3aed] text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none p-1.5 rounded-lg border border-white/10 bg-white/5"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-widest text-gray-300 hover:text-white transition-colors py-2 border-b border-white/5 uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="#get-started"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#8b5cf6] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
