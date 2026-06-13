"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface ScrollRevealProps {
  progress: MotionValue<number>;
  range: [number, number, number];
  opacityRange: [number, number, number];
  translateRange: [number, number, number];
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "none";
}

export default function ScrollReveal({
  progress,
  range,
  opacityRange,
  translateRange,
  children,
  className = "",
  direction = "up",
}: ScrollRevealProps) {
  // Linearly map the scroll progress to opacity using the provided range and opacity range, clamping values
  const opacity = useTransform(progress, range, opacityRange, { clamp: true });

  // Linearly map the scroll progress to translation offsets using the provided range and translate range, clamping values
  const offset = useTransform(progress, range, translateRange, { clamp: true });

  // Generate CSS transform strings dynamically from the animated offset value
  const transform = useTransform(offset, (val) => {
    if (direction === "up") return `translateY(${val}px)`;
    if (direction === "left") return `translateX(${-val}px)`;
    if (direction === "right") return `translateX(${val}px)`;
    return "none";
  });

  return (
    <motion.div style={{ opacity, transform }} className={className}>
      {children}
    </motion.div>
  );
}
