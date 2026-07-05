"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useLenis from "@/hooks/useLenis";
import Link from "next/link";
import { OriginButton } from "@/components/ui/OriginButton";
import { caseStudiesData } from "@/data/case-studies";


function CaseStudyDetailContent() {
  // Initialize Lenis scroll
  useLenis();

  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "1";

  // Retrieve the correct study or fallback to ID 1
  const study = caseStudiesData[id as keyof typeof caseStudiesData] || caseStudiesData["1"];

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 selection:bg-purple-500/10 selection:text-purple-900 overflow-hidden">
      {/* Light Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-white -z-50 pointer-events-none select-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.03),transparent_50%)]" />
        <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] rounded-full bg-purple-400/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-indigo-400/5 blur-[140px]" />
      </div>

      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative overflow-hidden px-4 pb-12 pt-28 sm:px-6 sm:pt-32 md:pb-16 lg:px-8">
        <div className="usecase-banner-grid-overlay" />
        
        {/* Back button container */}
        <div className="relative z-20 mx-auto mb-6 flex w-full max-w-7xl justify-start">
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="/usecases"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-blue-600 hover:text-blue-800 transition-colors cursor-pointer group"
          >
            <FiArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to all case studies
          </motion.a>
        </div>

        {/* Big Mockup Banner Image */}
        <div className="relative z-10 mx-auto mb-8 mt-2 w-full max-w-7xl">
          <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-zinc-200/60 bg-zinc-50 shadow-xl sm:aspect-video md:aspect-21/9 md:rounded-4xl">
            <img 
              src={study.heroImage} 
              alt={study.title} 
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
          {/* Badge Row */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-6">
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

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl text-[clamp(2.25rem,9vw,5rem)] font-black leading-[0.98] tracking-tight text-zinc-950"
            id="hero-title"
          >
            {study.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-4xl text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg"
            id="hero-subtitle"
          >
            {study.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Dynamic Content Area */}
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 md:px-8 lg:px-12 lg:pb-24" id="cs-detail-content">
        
        {/* Three Columns Key Metric Highlight block */}
        <div className="mb-12 grid grid-cols-1 divide-y divide-zinc-800 rounded-3xl bg-[#0a1224] p-5 text-center shadow-lg sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:mb-16 md:rounded-4xl md:p-12">
          {study.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-4 py-4 first:pt-0 last:pb-0 sm:py-2 sm:first:pl-0 sm:last:pr-0">
              <span className="mb-2 text-3xl font-black tracking-tight text-white md:text-5xl">
                {stat.value}
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-400 md:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content Sections Stack */}
        <div className="flex flex-col gap-12 md:gap-16">

          {/* Section 1: The Problem / The Situation */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-8 bg-blue-600 rounded-full shrink-0" />
              <h2 className="text-xl font-extrabold tracking-tight text-zinc-900 sm:text-2xl">
                {study.sections.problem.title}
              </h2>
            </div>
            
            <p className="max-w-5xl text-sm font-normal leading-relaxed text-zinc-600 sm:text-base md:text-lg">
              {study.sections.problem.text}
            </p>

            {/* Split layout for problem boxes and illustration images */}
            {study.sections.problem.boxBullets && study.sections.problem.boxBullets.length > 0 && (
              <div className="mt-4 grid grid-cols-1 items-stretch gap-6 md:grid-cols-12 md:gap-8">
                
                {/* Red warning box */}
                <div className="flex flex-col justify-start rounded-3xl border border-red-100 bg-red-50/40 p-5 md:col-span-6 md:p-8">
                  <span className="text-xs font-black tracking-widest text-red-600 uppercase block mb-6">
                    {study.sections.problem.boxTitle}
                  </span>
                  <ul className="flex flex-col gap-3.5 md:gap-4">
                    {study.sections.problem.boxBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-zinc-700 md:gap-3.5 md:text-base">
                        <span className="text-red-500 text-lg font-bold shrink-0 mt-0">×</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problem Illustration Image */}
                {study.sections.problem.image && (
                  <div className="relative min-h-[220px] overflow-hidden rounded-3xl border border-zinc-200/50 shadow-sm md:col-span-6 md:min-h-[300px]">
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

          {/* Section 2: What We Built / Our Approach / What We Found */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-8 bg-blue-600 rounded-full shrink-0" />
              <h2 className="text-xl font-extrabold tracking-tight text-zinc-900 sm:text-2xl">
                {study.sections.solution.title}
              </h2>
            </div>
            
            <p className="max-w-5xl text-sm font-normal leading-relaxed text-zinc-600 sm:text-base md:text-lg">
              {study.sections.solution.text}
            </p>

            {/* Green system details checkmarks box */}
            {study.sections.solution.boxBullets && study.sections.solution.boxBullets.length > 0 && (
              <div className="mt-2 max-w-5xl rounded-3xl border border-emerald-100/70 bg-emerald-50/40 p-5 md:p-8">
                <span className="text-xs font-black tracking-widest text-emerald-700 uppercase block mb-6">
                  {study.sections.solution.boxTitle}
                </span>
                <ul className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-4">
                  {study.sections.solution.boxBullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium leading-relaxed text-zinc-700 md:gap-3.5 md:text-base">
                      <span className="text-emerald-600 text-base font-bold shrink-0 mt-0.5">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Section 3: Results / The Outcome */}
          {study.sections.results && (study.sections.results.table && study.sections.results.table.length > 0 || study.sections.results.text) && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-8 bg-blue-600 rounded-full shrink-0" />
                <h2 className="text-xl font-extrabold tracking-tight text-zinc-900 sm:text-2xl">
                  {study.sections.results.title}
                </h2>
              </div>
              
              {study.sections.results.text && (
                <p className="max-w-5xl text-sm font-normal leading-relaxed text-zinc-600 sm:text-base md:text-lg">
                  {study.sections.results.text}
                </p>
              )}

              {/* Responsive Results Data Table */}
              {study.sections.results?.table && study.sections.results.table.length > 0 && (
                <div className="mt-2 max-w-5xl overflow-x-auto rounded-3xl border border-zinc-200/60 shadow-sm">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#0a1224] text-white">
                        {study.sections.results?.cols === 3 ? (
                          <>
                            <th className="py-4 px-6 font-bold text-xs md:text-sm uppercase tracking-wider">Metric</th>
                            <th className="py-4 px-6 font-bold text-xs md:text-sm uppercase tracking-wider">Before</th>
                            <th className="py-4 px-6 font-bold text-xs md:text-sm uppercase tracking-wider">After</th>
                          </>
                        ) : (
                          <>
                            <th className="py-4 px-6 font-bold text-xs md:text-sm uppercase tracking-wider">Metric</th>
                            <th className="py-4 px-6 font-bold text-xs md:text-sm uppercase tracking-wider">Outcome</th>
                          </>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200/60 bg-white">
                      {study.sections.results?.table?.map((row, idx) => (
                        <tr key={idx} className="hover:bg-zinc-50/50 transition-colors">
                          {study.sections.results?.cols === 3 ? (
                            <>
                              <td className="py-4.5 px-6 text-zinc-800 text-sm md:text-base font-semibold">{row.metric}</td>
                              <td className="py-4.5 px-6 text-zinc-500 text-sm md:text-base font-medium">{row.before}</td>
                              <td className="py-4.5 px-6 text-emerald-600 text-sm md:text-base font-black">{row.after}</td>
                            </>
                          ) : (
                            <>
                              <td className="py-4.5 px-6 text-zinc-800 text-sm md:text-base font-semibold">{row.metric}</td>
                              <td className="py-4.5 px-6 text-emerald-600 text-sm md:text-base font-black">{row.outcome}</td>
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

          {/* Section 4: Extra Section (Quote, Text or Philosophy block) */}
          {study.sections.extra && (
            <div className="flex flex-col gap-6">
              {study.sections.extra.type === "quote" ? (
                <div className="my-2 max-w-5xl rounded-r-3xl border-l-4 border-blue-600 bg-blue-50/40 p-5 shadow-sm sm:p-6 md:p-10">
                  <p className="mb-4 text-base font-bold italic leading-relaxed text-blue-900 md:text-xl">
                    {study.sections.extra.text}
                  </p>
                  <span className="text-xs md:text-sm text-zinc-500 font-bold uppercase tracking-wider block">
                    — {study.sections.extra.author}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-6 max-w-5xl">
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-8 bg-blue-600 rounded-full shrink-0" />
                    <h2 className="text-xl font-extrabold tracking-tight text-zinc-900 sm:text-2xl">
                      {study.sections.extra.title}
                    </h2>
                  </div>
                  <p className="text-sm font-normal leading-relaxed text-zinc-600 sm:text-base md:text-lg">
                    {study.sections.extra.text}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Section 5: Bottom CTA Block */}
          {study.sections.cta && (
            <div className="mt-4 flex max-w-5xl flex-col items-center justify-between gap-5 rounded-3xl bg-[#0a1224] p-5 shadow-xl sm:p-8 md:flex-row md:gap-8 md:rounded-4xl md:p-12">
              <div className="flex flex-col gap-2 max-w-xl text-left">
                <h3 className="text-base font-bold leading-normal text-white md:text-xl">
                  {study.sections.cta.text}
                </h3>
              </div>
              <Link href={study.sections.cta.href} className="w-full md:w-auto shrink-0">
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

      </main>

      <Footer />
    </main>
  );
}

export default function UsecaseDetailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white text-zinc-900 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-blue-600 text-xs font-semibold tracking-widest uppercase">
            Loading Case Study...
          </span>
        </div>
      </div>
    }>
      <CaseStudyDetailContent />
    </Suspense>
  );
}
