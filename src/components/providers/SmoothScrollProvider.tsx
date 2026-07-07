"use client";

import React from "react";
import useLenis from "@/hooks/useLenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Single application-wide Lenis instance and RAF ticker
  useLenis();

  return <>{children}</>;
}
