"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from "react-icons/fi";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  links: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Rivera",
    role: "Chief Executive Officer & Founder",
    bio: "AI strategist with 10+ years of enterprise automation experience.",
    imageUrl: "https://ik.imagekit.io/edfoalImage/assets/image/service1.jpg",
    links: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Dr. Sarah Chen",
    role: "Head of AI Research",
    bio: "Former research lead at top AI labs specializing in custom RAG pipelines.",
    imageUrl: "https://ik.imagekit.io/edfoalImage/assets/image/service2.jpg",
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Marcus Vance",
    role: "Director of Enterprise Engineering",
    bio: "Specialist in high-performance cloud infrastructure and agent orchestration.",
    imageUrl: "https://ik.imagekit.io/edfoalImage/assets/image/service3.jpg",
    links: { linkedin: "#", twitter: "#", github: "#" },
  },
];

export default function Team() {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-white/5">
      <div className="text-center max-w-xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase mb-4 block">
          Our Team
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          The Minds Behind EdFoal
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group glass-panel rounded-3xl p-6 border border-white/5 hover:border-white/10 transition-all flex flex-col items-center text-center"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border border-white/10 bg-zinc-900">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
            <p className="text-xs text-blue-400 font-semibold mb-3">{member.role}</p>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal max-w-xs">{member.bio}</p>

            <div className="flex gap-4">
              {member.links.linkedin && (
                <a href={member.links.linkedin} className="text-zinc-500 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {member.links.twitter && (
                <a href={member.links.twitter} className="text-zinc-500 hover:text-white transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {member.links.github && (
                <a href={member.links.github} className="text-zinc-500 hover:text-white transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
