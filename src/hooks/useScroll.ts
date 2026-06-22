"use client";

import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      
      setScrollY(currentScrollY);
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setScrollDirection(direction);
      }
      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, scrollDirection };
}
export default useScroll;
