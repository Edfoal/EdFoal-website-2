/**
 * Design System — Spacing, Border Radius & Icon Sizes (Layer 1)
 * File: packages/lib/src/constants/spacing.js
 * 
 * Standardizes layout primitives across all applications and UI components.
 */

module.exports = {
  // Border radius tokens (rounded-{N})
  borderRadius: {
    '4': '0.25rem',   // 4px  -> Buttons, inputs, badges, tooltips
    '8': '0.5rem',    // 8px  -> Cards, panels, modals
    '12': '0.75rem',  // 12px -> Large containers
    '16': '1rem',     // 16px -> Feature sections
    'full': '9999px', // Circular avatars, pills
  },

  // Icon dimension tokens
  iconSizes: {
    '12': '0.75rem',  // 12px
    '14': '0.875rem', // 14px
    '16': '1rem',     // 16px
    '20': '1.25rem',  // 20px
    '24': '1.5rem',   // 24px
    '32': '2rem',     // 32px
  },

  // Custom spacing scale increments
  spacing: {
    '4': '0.25rem',   // 4px
    '8': '0.5rem',    // 8px
    '12': '0.75rem',  // 12px
    '16': '1rem',     // 16px
    '20': '1.25rem',  // 20px
    '24': '1.5rem',   // 24px
    '32': '2rem',     // 32px
    '40': '2.5rem',   // 40px
    '48': '3rem',     // 48px
    '64': '4rem',     // 64px
  },
};
