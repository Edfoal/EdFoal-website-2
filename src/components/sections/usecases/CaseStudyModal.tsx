"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import { OriginButton } from "@/components/ui/OriginButton";
import { caseStudiesData } from "@/data/case-studies";


interface CaseStudyModalProps {
  caseStudyId: string | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudyId,
  onClose,
}) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (caseStudyId) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [caseStudyId]);

  const study = caseStudyId ? (caseStudiesData[caseStudyId] || caseStudiesData["1"]) : null;

  return (
    <AnimatePresence>
      {caseStudyId && study && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-2 sm:p-4 md:p-6">
          
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
          />

          {/* Modal dialog box */}
          <motion.div
            initial={{ scale: 0, rotate: "180deg" }}
            animate={{
              scale: 1,
              rotate: "0deg",
              transition: {
                type: "spring",
                bounce: 0.25,
              },
            }}
            exit={{ scale: 0, rotate: "180deg" }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 flex h-[92dvh] w-full max-w-5xl flex-col overflow-y-auto rounded-3xl bg-white text-zinc-900 shadow-2xl pointer-events-auto sm:h-[90dvh] md:h-[85vh] md:rounded-[2.5rem]"
            data-lenis-prevent
          >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close case study modal"
            className="absolute right-4 top-4 z-30 cursor-pointer rounded-full bg-zinc-100 p-2.5 text-zinc-600 shadow-sm transition-colors hover:bg-zinc-200/80 hover:text-zinc-950 md:right-8 md:top-8 md:p-3"
          >
            <FiX className="w-5 h-5" />
          </button>

          {/* Scrolling Modal Content */}
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 md:p-12" data-lenis-prevent>
            
            {/* Mockup Banner Image */}
            <div className="relative mb-8 mt-8 aspect-4/3 overflow-hidden rounded-3xl border border-zinc-200/50 bg-zinc-50 shadow-md sm:aspect-video md:mb-10 md:mt-6 md:aspect-21/9 md:rounded-4xl">
              <img 
                src={study.heroImage} 
                alt={study.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Badges Row */}
            <div className="mb-5 flex flex-wrap justify-start gap-2 md:mb-6">
              {study.badges.map((badge, idx) => {
                let badgeStyle = "bg-zinc-100 text-zinc-600";
                if (idx === 0) badgeStyle = "bg-zinc-100/80 text-zinc-500 font-bold border border-zinc-200/30";
                if (idx === 1) badgeStyle = "bg-blue-50 text-blue-600 font-bold border border-blue-100/50";
                if (idx === 2) badgeStyle = "bg-emerald-50 text-emerald-600 font-bold border border-emerald-100/50";
                return (
                  <span 
                    key={idx} 
                    className={`rounded-full px-3 py-1.5 text-[9px] uppercase tracking-wider sm:px-4 sm:text-[10px] ${badgeStyle}`}
                  >
                    {badge}
                  </span>
                );
              })}
            </div>

            {/* Main Title & Subtitle */}
            <h1 className="mb-4 pr-10 text-2xl font-black leading-tight tracking-tight text-zinc-900 sm:pr-12 md:text-4xl">
              {study.title}
            </h1>
            <p className="mb-8 max-w-4xl text-sm leading-relaxed text-zinc-600 sm:text-base md:mb-10 md:text-lg">
              {study.subtitle}
            </p>

            {/* 3-Column Metrics Block */}
            <div className="mb-10 grid grid-cols-1 divide-y divide-zinc-800 rounded-3xl bg-[#0a1224] p-5 text-center shadow-lg sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mb-12 md:rounded-4xl md:p-10">
              {study.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center px-2 py-4 first:pt-0 last:pb-0 sm:py-0 md:px-4 md:first:pl-0 md:last:pr-0">
                  <span className="mb-1.5 text-2xl font-black tracking-tight text-white md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-[10px] font-medium tracking-wide text-zinc-400 md:text-xs">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Structured Content Sections */}
            <div className="flex max-w-4xl flex-col gap-10 md:gap-12">

              {/* Section 1: The Problem */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0" />
                  <h2 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                    {study.sections.problem.title}
                  </h2>
                </div>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  {study.sections.problem.text}
                </p>

                {study.sections.problem.boxBullets && study.sections.problem.boxBullets.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch mt-2">
                    {/* Red warning box */}
                      <div className="flex flex-col justify-start rounded-3xl border border-red-100 bg-red-50/40 p-5 md:col-span-7 md:p-6">
                      <span className="text-[10px] font-black tracking-widest text-red-600 uppercase block mb-4">
                        {study.sections.problem.boxTitle}
                      </span>
                      <ul className="flex flex-col gap-3">
                        {study.sections.problem.boxBullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-700 leading-relaxed font-medium">
                            <span className="text-red-500 text-base font-bold shrink-0 mt-0">×</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Problem Image */}
                    {study.sections.problem.image && (
                      <div className="relative min-h-[220px] overflow-hidden rounded-3xl border border-zinc-200/50 shadow-sm md:col-span-5">
                        <img 
                          src={study.sections.problem.image} 
                          alt="Problem Context" 
                          className="w-full h-full object-cover object-center absolute inset-0"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Section 2: What We Built / Our Approach */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0" />
                  <h2 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                    {study.sections.solution.title}
                  </h2>
                </div>
                <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                  {study.sections.solution.text}
                </p>

                {study.sections.solution.boxBullets && study.sections.solution.boxBullets.length > 0 && (
                  <div className="mt-2 rounded-3xl border border-emerald-100/70 bg-emerald-50/40 p-5 md:p-6">
                    <span className="text-[10px] font-black tracking-widest text-emerald-700 uppercase block mb-4">
                      {study.sections.solution.boxTitle}
                    </span>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {study.sections.solution.boxBullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-700 leading-relaxed font-medium">
                          <span className="text-emerald-600 text-sm font-bold shrink-0 mt-0.5">✓</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Section 3: Results / The Outcome */}
              {study.sections.results && (study.sections.results.table || study.sections.results.text) && (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0" />
                    <h2 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                      {study.sections.results.title}
                    </h2>
                  </div>
                  {study.sections.results.text && (
                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                      {study.sections.results.text}
                    </p>
                  )}

                  {study.sections.results?.table && study.sections.results.table.length > 0 && (
                    <div className="mt-2 overflow-x-auto rounded-2xl border border-zinc-200/60 shadow-sm">
                      <table className="w-full min-w-[560px] border-collapse text-left">
                        <thead>
                          <tr className="bg-[#0a1224] text-white">
                            {study.sections.results?.cols === 3 ? (
                              <>
                                <th className="py-3 px-4 md:px-5 font-bold text-[10px] md:text-xs uppercase tracking-wider">Metric</th>
                                <th className="py-3 px-4 md:px-5 font-bold text-[10px] md:text-xs uppercase tracking-wider">Before</th>
                                <th className="py-3 px-4 md:px-5 font-bold text-[10px] md:text-xs uppercase tracking-wider">After</th>
                              </>
                            ) : (
                              <>
                                <th className="py-3 px-4 md:px-5 font-bold text-[10px] md:text-xs uppercase tracking-wider">Metric</th>
                                <th className="py-3 px-4 md:px-5 font-bold text-[10px] md:text-xs uppercase tracking-wider">Outcome</th>
                              </>
                            )}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200/60 bg-white">
                          {study.sections.results?.table?.map((row, idx) => (
                            <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                              {study.sections.results?.cols === 3 ? (
                                <>
                                  <td className="py-3.5 px-4 md:px-5 text-zinc-850 text-xs md:text-sm font-semibold">{row.metric}</td>
                                  <td className="py-3.5 px-4 md:px-5 text-zinc-500 text-xs md:text-sm font-medium">{row.before}</td>
                                  <td className="py-3.5 px-4 md:px-5 text-emerald-600 text-xs md:text-sm font-black">{row.after}</td>
                                </>
                              ) : (
                                <>
                                  <td className="py-3.5 px-4 md:px-5 text-zinc-850 text-xs md:text-sm font-semibold">{row.metric}</td>
                                  <td className="py-3.5 px-4 md:px-5 text-emerald-600 text-xs md:text-sm font-black">{row.outcome}</td>
                                </>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {/* Section 4: Client Feedback / Philosophy */}
              {study.sections.extra && (
                <div className="flex flex-col gap-4">
                  {study.sections.extra.type === "quote" ? (
                    <div className="bg-blue-50/40 border-l-4 border-blue-600 rounded-r-3xl p-6 md:p-8 shadow-sm">
                      <p className="text-blue-900 text-base md:text-lg font-bold italic leading-relaxed mb-3">
                        {study.sections.extra.text}
                      </p>
                      <span className="text-[10px] md:text-xs text-zinc-500 font-bold uppercase tracking-wider block">
                        — {study.sections.extra.author}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-6 bg-blue-600 rounded-full shrink-0" />
                        <h2 className="text-xl font-extrabold text-zinc-900 tracking-tight">
                          {study.sections.extra.title}
                        </h2>
                      </div>
                      <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                        {study.sections.extra.text}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Section 5: Bottom CTA Block */}
              {study.sections.cta && (
                <div className="mt-2 flex flex-col items-center justify-between gap-5 rounded-3xl bg-[#0a1224] p-5 sm:p-6 md:flex-row md:gap-6 md:rounded-4xl md:p-10">
                  <div className="flex flex-col gap-1.5 text-left">
                    <h3 className="text-white text-base md:text-lg font-bold leading-normal">
                      {study.sections.cta.text}
                    </h3>
                  </div>
                  <Link href={study.sections.cta.href} className="w-full md:w-auto shrink-0" onClick={onClose}>
                    <OriginButton
                      className="h-12 w-full rounded-full border-[0.5px] px-8 text-sm font-semibold tracking-wide"
                      style={{
                        "--ic-card": "#ffffff",
                        "--ic-card-foreground": "#000000",
                        "--ic-border": "#ffffff",
                        "--ic-foreground": "#000000",
                        "--ic-background": "#ffffff",
                      } as React.CSSProperties}
                    >
                      {study.sections.cta.buttonText}
                    </OriginButton>
                  </Link>
                </div>
              )}

            </div>

          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
};
