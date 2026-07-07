/**
 * Design System — Typography & Fonts Token File (Layer 1)
 * File: packages/lib/src/constants/typography.js
 * 
 * Defines three core typographic dimensions:
 * 1. fontFamily — Font stacks (Inter, Outfit, System, Monospace)
 * 2. fontSize — Pixel-indexed sizes (12..86) paired with line-height and letter-spacing
 * 3. fontWeight — Numeric weights (300..600)
 * 
 * RULE: Do NOT use Tailwind default t-shirt sizing (text-sm, text-lg) or named weights (font-bold)!
 */

module.exports = {
  fontFamily: {
    inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    outfit: ['Outfit', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    system: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
    monospace: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
  },

  // Naming convention: pixel value -> class name text-{N}
  fontSize: {
    '12': ['0.75rem', { lineHeight: '1rem', letterSpacing: '-0.24px' }],      // 12px
    '14': ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '-0.28px' }],  // 14px (Body default)
    '16': ['1rem', { lineHeight: '1.5rem', letterSpacing: '-0.32px' }],       // 16px
    '20': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.4px' }],    // 20px (Section headings / Card titles)
    '24': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.48px' }],       // 24px
    '32': ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.64px' }],       // 32px
    '40': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.8px' }],        // 40px
    '86': ['5.375rem', { lineHeight: '6rem', letterSpacing: '-1.72px' }],     // 86px (Hero / Display)
  },

  // Naming convention: numeric value -> class name font-{N}
  fontWeight: {
    '300': '300', // Light
    '400': '400', // Regular
    '500': '500', // Medium
    '600': '600', // Semibold
  },
};
