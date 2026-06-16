"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer/Footer";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import useLenis from "@/hooks/useLenis";

// Detailed static case study data dictionary
const caseStudiesData = {
  "1": {
    title: "AI IVR Automation for Mortgage Verification",
    industry: "Mortgage · India",
    subtitle: "How we cut verification calls from 20-30 minutes to under 5 minutes with zero human involvement.",
    stat: "80% faster · 60% cost reduction",
    overview: "Our client, a leading mortgage lender in India, was experiencing massive friction in verifying borrower credentials. The manual process took between 20 to 30 minutes per call, leading to long queues and high operational costs. We deployed a voice-based Conversational AI system to automate borrower identity verification.",
    challenge: "The borrower verification process required manual validation of complex document trails, credit profiles, and loan application details. Call center agents spent significant time asking repetitive questions, verifying identity, and cross-referencing databases. This created a bottleneck that limited transaction volume and increased personnel costs during peak periods.",
    solution: "We designed and implemented a custom Conversational Voice AI integrated directly with the client's Core Banking and Loan Origination Systems. The system uses natural language processing (NLP) to converse naturally with borrowers, securely authenticate their identities, retrieve files, and confirm critical application details without human intervention.",
    results: [
      "Reduced average verification cycle time by over 80%, from 25 minutes down to less than 5 minutes.",
      "Achieved a 60% reduction in total operational costs associated with borrower verification.",
      "Handled 100% of standard inbound verification calls autonomously with zero human agent escalation.",
      "Offered 24/7 availability, eliminating queue backlogs during off-hours and holidays."
    ],
    milestones: [
      { label: "Identity Verification Time", value: "< 5 mins" },
      { label: "Automation Rate", value: "95%+" },
      { label: "Customer Satisfaction", value: "4.8 / 5" }
    ]
  },
  "2": {
    title: "AI Web Scraping for Foreclosure Lead Discovery",
    industry: "Foreclosure · US",
    subtitle: "Replacing 6 hours of daily manual data collection with a 5-minute automated pipeline.",
    stat: "6 hours → 5 minutes daily",
    overview: "For real estate investment firms, finding foreclosure listings early is a massive competitive advantage. Our US-based client relied on manual analysts browsing court records and public notices, taking hours daily. We built a semantic scraping and categorization pipeline that automates this workflow completely.",
    challenge: "Foreclosure notices in the US are highly fragmented across hundreds of county court websites, local newspapers, and municipal portals. Analysts spent up to 6 hours daily searching, copying, and pasting lists into spreadsheets. The data was often unstructured, duplicate, and prone to entry errors, leading to missed investment opportunities.",
    solution: "We engineered an intelligent web scraping pipeline powered by LLMs to navigate diverse web layouts, bypass anti-scraping protections, and extract foreclosure data in real-time. A semantic filter processes the records to extract key parameters (dates, addresses, loan balances, owner details) and automatically flags high-yield properties.",
    results: [
      "Condensed 6 hours of daily manual research into a fully automated 5-minute scraping run.",
      "Increased the discovery rate of high-potential leads by 35% due to broader coverage.",
      "Eliminated manual entry errors, ensuring 100% accurate property record storage.",
      "Created instant Slack and email alerts for newly listed foreclosure properties matching specific buy boxes."
    ],
    milestones: [
      { label: "Data Extraction Time", value: "5 mins" },
      { label: "Lead Discovery Increase", value: "+35%" },
      { label: "Data Accuracy", value: "100%" }
    ]
  },
  "3": {
    title: "Enterprise AI Strategy for a UK Insurance Firm",
    industry: "Insurance · UK",
    subtitle: "Delivering a board-ready AI adoption roadmap with a three-horizon framework in two months.",
    stat: "Full AI roadmap · Board-ready",
    overview: "A mid-sized UK insurance firm wanted to incorporate generative AI across its operations but lacked a clear, compliant strategy. We assessed their business functions and delivered a robust, executive-ready roadmap that balances quick wins with long-term technological transformations.",
    challenge: "The insurance firm faced a dual challenge: pressure to innovate with AI to stay competitive, balanced against strict compliance requirements (FCA regulations and GDPR). Without a structured strategy, individual departments were experimenting with unapproved, risky tools, creating security vulnerabilities and wasted budgets.",
    solution: "We conducted a comprehensive audit of all operational workflows (underwriting, claims, customer service, IT). We designed a three-horizon AI strategy framework: Horizon 1 (low-risk, immediate productivity tools), Horizon 2 (AI-assisted underwriting and claims processing), and Horizon 3 (fully autonomous policy customization engines).",
    results: [
      "Delivered a complete, board-ready AI adoption roadmap, governance policy, and risk matrix within 8 weeks.",
      "Identified and prioritized over 15 high-impact AI use cases across the enterprise.",
      "Standardized data security guidelines to block unauthorized tool usage while fostering secure experimentation.",
      "Protected the firm against compliance penalties by aligning all AI initiatives with current FCA standards."
    ],
    milestones: [
      { label: "Strategy Timeline", value: "8 weeks" },
      { label: "Prioritized Use Cases", value: "15+" },
      { label: "Board Approval Rate", value: "100%" }
    ]
  },
  "4": {
    title: "AI Product Strategy for Gen AI Startups",
    industry: "Tech Startups · Global",
    subtitle: "Helping founders validate concepts, reduce product risk, and create investor-ready roadmaps.",
    stat: "Concept → validated roadmap",
    overview: "Early-stage Gen AI startups often struggle to bridge the gap between technical models and product-market fit. We partner with founders globally to design product architectures, optimize cost-per-query structures, and create clear roadmap strategies that attract investment.",
    challenge: "Many AI startups build products that are easily replicated or suffer from unsustainable API consumption costs. Founders struggle to define their unique data moat, structure their pricing models, or demonstrate concrete value to investors beyond basic wrappers.",
    solution: "We audit startup concept architectures to optimize model selections (combining open-source and proprietary models), design robust vector search / RAG pipelines to protect data privacy, and structure user flows to maximize engagement. We translate technical features into investor-ready roadmaps.",
    results: [
      "Helped 4 startups transition from initial concepts to validated, scalable MVP architectures.",
      "Reduced API queries and hosting costs by an average of 40% using intelligent semantic caching.",
      "Developed investor-ready documentation and technical plans that helped founders secure pre-seed funding.",
      "Defined clear data moats that shield the startup's core value proposition from generic competitor models."
    ],
    milestones: [
      { label: "API Cost Reduction", value: "40%" },
      { label: "Time-to-Market Saved", value: "3 months" },
      { label: "Funding Secured", value: "Pre-seed/Seed" }
    ]
  },
  "5": {
    title: "Automating Data Entry for a 200-Person Team",
    industry: "Enterprise Ops · India",
    subtitle: "Identifying the right 50% of tasks to automate — saving $1M annually while avoiding wasteful AI spend.",
    stat: "$1M annual cost savings",
    overview: "A massive operations department with 200 workers was bogged down by manual data entry across disparate enterprise applications. Instead of a costly, blanket AI integration, we analyzed their processes and automated the most critical 50%, maximizing ROI.",
    challenge: "The company was prepared to spend millions on custom AI models to automate their entire operations. However, our process mining revealed that half of the manual tasks were highly irregular or required human judgment, meaning a full AI replacement would yield negative ROI due to error correction costs.",
    solution: "We mapped and analyzed all workflows. We designed custom document-processing pipelines using Optical Character Recognition (OCR) and semantic extraction models to automate the structured, repetitive data entry tasks (like invoice matching and order booking), while keeping humans in the loop for edge cases.",
    results: [
      "Saved over $1M in annual operational costs by automating 50% of repetitive data entry tasks.",
      "Achieved a payback period of under 4 months, avoiding wasteful spend on unnecessary AI integrations.",
      "Reduced data processing cycle times from 2 days down to less than 1 hour.",
      "Retrained and shifted 80 manual workers to high-value analytical roles, boosting employee satisfaction."
    ],
    milestones: [
      { label: "Annual Savings", value: "$1M+" },
      { label: "Process Cycle Time", value: "< 1 hour" },
      { label: "Payback Period", value: "4 months" }
    ]
  },
  "6": {
    title: "AI-Powered Lead Generation Bot on Telegram",
    industry: "Crypto / Sales · Global",
    subtitle: "Building a human-sounding AI bot that 5× outreach volume with a 25% lead qualification rate.",
    stat: "5× outreach · 25% qualification rate",
    overview: "A global sales organization needed to scale outreach to prospective leads across messaging channels. We developed a highly personalized Telegram bot powered by LLMs that handles natural business discovery conversations and qualifies prospective buyers.",
    challenge: "Manual outreach is slow, expensive, and difficult to scale across global time zones. Automated email sequences have low response rates. The client needed a way to conduct interactive, natural-sounding conversations on messaging apps at scale, without sounding like a generic spam bot.",
    solution: "We built an advanced conversational Telegram bot. Powered by fine-tuned models, it maintains context, dynamically references user profiles and community histories, answers questions naturally, and qualifies prospects through subtle, guided sales discovery scripts.",
    results: [
      "Multiplied daily outreach and response handling capabilities by 5× without adding sales staff.",
      "Achieved an outstanding 25% qualification rate for cold-outreach chats.",
      "Engaged leads instantly 24/7 across multiple time zones, improving conversion rates.",
      "Integrated qualified lead profiles automatically with the client's CRM for sales team follow-up."
    ],
    milestones: [
      { label: "Outreach Volume", value: "5× Increase" },
      { label: "Qualification Rate", value: "25%" },
      { label: "Response Delay", value: "< 2 seconds" }
    ]
  }
};

function CaseStudyDetailContent() {
  // Initialize Lenis scroll
  useLenis();

  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "1";

  // Retrieve the correct study or fallback to ID 1
  const study = caseStudiesData[id as keyof typeof caseStudiesData] || caseStudiesData["1"];

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden">
      <BackgroundEffects />
      <Navbar />

      {/* Hero Banner Section */}
      <section
        style={{ paddingTop: "190px" }}
        className="relative pb-20 md:pb-28 px-6 md:px-12 flex flex-col items-center text-center overflow-hidden"
      >
        {/* Glow overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 via-transparent to-transparent pointer-events-none" />

        {/* Grid Overlay */}
        <div className="absolute inset-0 grid-overlay opacity-35 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          {/* Back button */}
          <motion.a
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            href="/usecases"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 hover:text-white transition-colors mb-8 cursor-pointer group"
          >
            <FiArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase mb-4"
          >
            Case Study Detail / {study.industry}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-3xl"
          >
            {study.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {study.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="w-full max-w-7xl mx-auto relative py-12 md:py-20 px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Block: Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-10 md:gap-12">

            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold text-white tracking-wide border-l-2 border-blue-500 pl-4">
                Project Overview
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-normal">
                {study.overview}
              </p>
            </motion.div>

            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold text-white tracking-wide border-l-2 border-blue-500 pl-4">
                The Challenge
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-normal">
                {study.challenge}
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-4"
            >
              <h3 className="text-xl font-bold text-white tracking-wide border-l-2 border-blue-500 pl-4">
                Our Custom Solution
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed font-normal">
                {study.solution}
              </p>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-white tracking-wide border-l-2 border-blue-500 pl-4">
                Key Business Outcomes
              </h3>
              <ul className="flex flex-col gap-4">
                {study.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3.5 text-zinc-300 text-base leading-relaxed">
                    <FiCheckCircle className="w-5.5 h-5.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>

          {/* Right Block: Sidebar Stats */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-8">

            {/* Stats Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-panel rounded-3xl p-8 border border-white/5 flex flex-col gap-6"
            >
              <h4 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
                Key Metrics
              </h4>

              <div className="flex flex-col gap-6">
                {study.milestones.map((milestone, idx) => (
                  <div key={idx} className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                      {milestone.value}
                    </span>
                    <span className="text-xs text-zinc-500 font-semibold tracking-wide mt-1">
                      {milestone.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-panel rounded-3xl p-8 border border-white/5 bg-gradient-to-br from-blue-950/15 via-transparent to-transparent flex flex-col gap-6"
            >
              <h4 className="text-lg font-bold text-white tracking-wide">
                Ready for similar results?
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Connect with our team to discover how we can design and build a custom AI solution for your specific business constraints.
              </p>
              <div>
                <HoverBorderGradient
                  as="a"
                  href="/#contact"
                  containerClassName="rounded-full w-full h-[46px]"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center justify-center text-sm font-semibold w-full h-full"
                >
                  Connect with us
                </HoverBorderGradient>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function UsecaseDetailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
            Loading Case Study...
          </span>
        </div>
      </div>
    }>
      <CaseStudyDetailContent />
    </Suspense>
  );
}
