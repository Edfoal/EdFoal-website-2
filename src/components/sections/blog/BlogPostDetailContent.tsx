"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, Sparkles } from "lucide-react";
import { BlogPostData } from "@/data/blogPosts";

interface BlogPostDetailContentProps {
  post: BlogPostData;
}

export default function BlogPostDetailContent({ post }: BlogPostDetailContentProps) {
  return (
    <article 
      style={{ paddingTop: "190px" }}
      className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pb-28"
    >
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-400 hover:text-white transition-colors mb-12 group cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      {/* Post Metadata Header */}
      <header className="flex flex-col gap-6 mb-12 border-b border-white/5 pb-10">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
          <Sparkles className="w-4 h-4" />
          {post.category}
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white">
          {post.title}
        </h1>

        <div className="flex items-center gap-6 text-xs text-zinc-500 font-semibold">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Content Body */}
      <section className="flex flex-col gap-6 text-zinc-300 text-base md:text-lg leading-relaxed font-normal mb-16">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      {/* Footer share */}
      <footer className="flex items-center justify-between border-t border-white/5 pt-8">
        <span className="text-xs text-zinc-500 font-semibold">Written by EdFoal AI Team</span>
        <button className="flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-400 hover:text-white transition-colors">
          <Share2 className="w-4 h-4" />
          Share Post
        </button>
      </footer>
    </article>
  );
}
