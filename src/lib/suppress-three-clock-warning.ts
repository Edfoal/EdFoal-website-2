"use client";

/**
 * Suppresses the `THREE.Clock` deprecation warning from @react-three/fiber.
 *
 * R3F v9.6.1 (latest) hardcodes `new THREE.Clock()` in its store initialisation
 * (node_modules/@react-three/fiber/dist/events-*.esm.js:1016). Three.js r184+
 * deprecated Clock in favour of Timer, but R3F hasn't migrated yet.
 *
 * This patch intercepts the specific console.warn call so it doesn't pollute
 * the browser console. It's scoped to the exact message string to avoid
 * hiding other warnings.
 *
 * Remove this file once @react-three/fiber ships a version using THREE.Timer.
 */

if (typeof window !== "undefined") {
  const _origWarn = console.warn;
  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("THREE.Clock") &&
      args[0].includes("deprecated")
    ) {
      return; // suppress known upstream R3F warning
    }
    _origWarn.apply(console, args);
  };
}

export {};
