"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const blogPosts = [
  {
    slug: "transforming-learning-through-generative-ai",
    title: "Transforming Learning Through Generative AI",
    excerpt: "Discover how customized generative AI solutions are accelerating knowledge transfer and skill acquisition in enterprises.",
    date: "June 20, 2026",
    readTime: "5 min read",
    category: "AI & Education",
  },
  {
    slug: "building-secure-enterprise-ai-integrations",
    title: "Building Secure Enterprise AI Integrations",
    excerpt: "Best practices on data governance, semantic filters, and secure LLM routing when scaling internal AI tools.",
    date: "June 15, 2026",
    readTime: "8 min read",
    category: "Security",
  },
  {
    slug: "the-future-of-automated-knowledge-discovery",
    title: "The Future of Automated Knowledge Discovery",
    excerpt: "How vector search, RAG pipeline optimizations, and structured metadata filters are saving enterprise teams hours daily.",
    date: "June 08, 2026",
    readTime: "6 min read",
    category: "Productivity",
  },
];

export default function BlogList() {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 pb-28 -mt-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group border border-white/5 rounded-3xl p-6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Meta details */}
              <div className="flex items-center justify-between text-xs text-zinc-500 font-semibold mb-4">
                <span className="text-blue-400">{post.category}</span>
                <span>{post.readTime}</span>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 tracking-wide text-white group-hover:text-blue-400 transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>

              {/* Excerpt */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                {post.excerpt}
              </p>
            </div>

            {/* Date & link */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <span className="text-xs text-zinc-500 font-normal">{post.date}</span>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-blue-400 transition-colors"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
