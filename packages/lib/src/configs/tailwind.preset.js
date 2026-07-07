/**
 * Design System — Central Tailwind CSS Preset Engine (Layer 3)
 * File: packages/lib/src/configs/tailwind.preset.js
 * 
 * This file serves as the Single Source of Truth (SSOT) for all applications
 * in the monorepo (generic, aviation, property, pvandterrorism, and cs_ui_kit).
 * 
 * It merges raw palettes, semantic aliases, typography scales, and spacing tokens
 * into the Tailwind CSS theme engine.
 */

const colors = require('../constants/colors');
const semantic = require('../constants/semantic');
const typography = require('../constants/typography');
const spacing = require('../constants/spacing');

module.exports = {
  theme: {
    extend: {
      // 1. Raw Palettes (enables bg-navy-blue-800, etc. when raw precision is required)
      colors: {
        ...colors,
      },

      // 2. Semantic Text Colors (enables text-primary, text-secondary, text-negative, etc.)
      textColor: {
        ...semantic.textColor,
      },

      // 3. Semantic Border & Stroke Colors (enables border-primary, border-error, etc.)
      borderColor: {
        ...semantic.stroke,
      },
      stroke: {
        ...semantic.stroke,
      },

      // 4. Semantic Background Colors (enables bg-primary, bg-secondary, bg-dark-primary, etc.)
      backgroundColor: {
        ...semantic.backgroundColors,
        ...semantic.stateColors,
      },

      // 5. Semantic Ring Colors (enables ring-focus, etc.)
      ringColor: {
        ...semantic.stateColors,
      },

      // 6. Typography Stacks (enables font-inter, font-outfit, and default sans fallback)
      fontFamily: {
        sans: typography.fontFamily.inter,
        inter: typography.fontFamily.inter,
        outfit: typography.fontFamily.outfit,
        system: typography.fontFamily.system,
        mono: typography.fontFamily.monospace,
      },

      // 7. Pixel-Indexed Font Sizes (enables text-12, text-14, text-20, text-86)
      fontSize: {
        ...typography.fontSize,
      },

      // 8. Numeric Font Weights (enables font-300, font-400, font-500, font-600)
      fontWeight: {
        ...typography.fontWeight,
      },

      // 9. Spacing & Border Radius Tokens (enables rounded-4, rounded-8, etc.)
      borderRadius: {
        ...spacing.borderRadius,
      },
      spacing: {
        ...spacing.spacing,
      },
    },
  },
};
