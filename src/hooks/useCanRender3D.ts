"use client";

import { useState, useEffect } from "react";

/**
 * Returns `true` only when the device can handle 3D WebGL content:
 *  1. Viewport ≥ 768px
 *  2. User has NOT enabled `prefers-reduced-motion: reduce`
 *  3. WebGL 2 is available
 *
 * Defaults to `false` during SSR / first render to avoid hydration mismatch
 * and ensure mobile-first: no 3D until we confirm the device can handle it.
 */
export function useCanRender3D(): boolean {
  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // 1. Viewport check
    const isWideEnough = window.matchMedia("(min-width: 768px)").matches;

    // 2. Reduced-motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 3. WebGL 2 availability
    let hasWebGL2 = false;
    try {
      const canvas = document.createElement("canvas");
      hasWebGL2 = !!canvas.getContext("webgl2");
    } catch {
      hasWebGL2 = false;
    }

    setCanRender(isWideEnough && !prefersReducedMotion && hasWebGL2);

    // Listen for viewport changes (e.g. device rotation, window resize)
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setCanRender(
        mediaQuery.matches && !motionQuery.matches && hasWebGL2
      );
    };

    mediaQuery.addEventListener("change", update);
    motionQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
      motionQuery.removeEventListener("change", update);
    };
  }, []);

  return canRender;
}

export default useCanRender3D;
