/**
 * Design System — Semantic Color Aliases (Layer 2)
 * File: packages/lib/src/constants/semantic.js
 * 
 * Maps raw color scales from colors.js to meaningful functional names.
 * This ensures developers do NOT need to memorize hex codes or raw palette steps.
 * 
 * RULE: Never use text-error or text-warning! Use text-negative instead.
 */

const colors = require('./colors');

module.exports = {
  // Text colors (text-*)
  textColor: {
    primary: colors['midnight-blue'][800],    // text-primary -> #101826
    secondary: colors['midnight-blue'][400],  // text-secondary -> #3B404D
    tertiary: colors['navy-blue'][100],       // text-tertiary -> #BCCCDC
    disabled: colors['stone-grey'][200],      // text-disabled -> #D6D3D1
    clickable: colors['blue'][800],           // text-clickable -> #1E3A8A
    negative: colors['red'][800],             // text-negative -> #7F1D1D
    white: colors['white'][0],                // text-white -> #FFFFFF
    brand: colors['hot-pink'][800],           // text-brand -> #831843
  },

  // Border / stroke colors (border-*, stroke-*)
  stroke: {
    primary: colors['navy-blue'][800],        // border-primary
    secondary: colors['stone-grey'][400],     // border-secondary
    tertiary: colors['cloud-grey'][200],      // border-tertiary
    quaternary: colors['cloud-grey'][100],    // border-quaternary
    disabled: colors['stone-grey'][200],      // border-disabled
    aqua: colors['ice-blue'][300],            // border-aqua
    error: colors['red'][800],                // border-error
    brand: colors['hot-pink'][800],           // border-brand
  },

  // Background colors (bg-*)
  backgroundColors: {
    primary: colors['white'][0],              // bg-primary (white)
    secondary: colors['cloud-grey'][50],      // bg-secondary (cloud-grey-50)
    tertiary: colors['cloud-grey'][400],      // bg-tertiary (cloud-grey-400)
    'dark-primary': colors['midnight-blue'][800], // bg-dark-primary (midnight-blue-800)
    'dark-secondary': colors['navy-blue'][700],   // bg-dark-secondary (navy-blue-700)
    'dark-tertiary': colors['navy-blue'][100],    // bg-dark-tertiary (navy-blue-100)
    aqua: colors['ice-blue'][25],             // bg-aqua
    danger: colors['red'][25],                // bg-danger
    brand: colors['hot-pink'][800],           // bg-brand
  },

  // State colors (hover, focus, active, etc.)
  stateColors: {
    hover: colors['cloud-grey'][100],         // hover:bg-hover
    active: colors['cloud-grey'][200],        // bg-active
    focus: colors['blue'][400],               // ring-focus, focus:ring-focus
    selected: colors['blue'][50],             // bg-selected
    disabled: colors['stone-grey'][100],      // bg-disabled
  },
};
