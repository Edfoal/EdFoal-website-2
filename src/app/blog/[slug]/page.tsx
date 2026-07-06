import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackgroundEffects from "@/components/ui/BackgroundEffects";
import { BRAND_NAME } from "@/lib/constants";
import BlogPostDetailContent from "@/components/sections/blog/BlogPostDetailContent";
import { postsData } from "@/data/blogPosts";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData[slug];
  return {
    title: post ? `${post.title} | ${BRAND_NAME} Blog` : `Article Not Found | ${BRAND_NAME}`,
    description: post ? post.content[0] : "The requested article could not be found.",
  };
}

export default async function BlogPostDetail({ params }: BlogPostProps) {
  const { slug } = await params;

  const post = postsData[slug] || {
    title: "Article Not Found",
    category: "System",
    date: "N/A",
    readTime: "0 min read",
    content: ["The requested article could not be found. Please return to the blog list."]
  };

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <BlogPostDetailContent post={post} />
      <Footer />
    </main>
  );
}
