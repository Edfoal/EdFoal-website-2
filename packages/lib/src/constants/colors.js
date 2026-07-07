/**
 * Design System — Raw Color Palette (Layer 1)
 * File: packages/lib/src/constants/colors.js
 * 
 * Each color is a named scale with numeric steps (25–800).
 * Every step represents a specific hex value in the brightness hierarchy.
 * 
 * IMPORTANT: Components should NOT import or use these raw hex scales directly!
 * Instead, use semantic aliases defined in semantic.js (e.g., text-primary, bg-secondary).
 */

module.exports = {
  'cloud-grey': {
    25: '#F8FAFC',
    50: '#F1F5F9',
    100: '#E2E8F0',
    200: '#CBD5E1',
    300: '#94A3B8',
    400: '#64748B',
    500: '#475569',
    600: '#334155',
    700: '#1E293B',
    800: '#0F172A',
  },
  'stone-grey': {
    25: '#FAFAF9',
    50: '#F5F5F4',
    100: '#E7E5E4',
    200: '#D6D3D1',
    300: '#A8A29E',
    400: '#78716C',
    500: '#57534E',
    600: '#44403C',
    700: '#292524',
    800: '#1C1917',
  },
  'navy-blue': {
    25: '#F0F4F8',
    50: '#D9E2EC',
    100: '#BCCCDC',
    200: '#9FB3C8',
    300: '#829AB1',
    400: '#627D98',
    500: '#486581',
    600: '#334E68',
    700: '#243B53',
    800: '#101826', // UI chrome, sidebars, borders
  },
  'midnight-blue': {
    25: '#E4E5E7',
    50: '#C9CBCF',
    100: '#A3A6AD',
    200: '#7D818A',
    300: '#575C66',
    400: '#3B404D', // Muted text (text-secondary)
    500: '#2C303B',
    600: '#20232B',
    700: '#16181E',
    800: '#101826', // Darkest — primary text color (text-primary)
  },
  'ice-blue': {
    25: '#F0F9FF',
    50: '#E0F2FE',
    100: '#BAE6FD',
    200: '#7DD3FC',
    300: '#38BDF8',
    400: '#0EA5E9',
    500: '#0284C7',
    600: '#0369A1',
    700: '#075985',
    800: '#0C4A6E', // Accent highlights
  },
  'hot-pink': {
    25: '#FDF2F8',
    50: '#FCE7F3',
    100: '#FBCFE8',
    200: '#F9A8D4',
    300: '#F472B6',
    400: '#EC4899',
    500: '#DB2777',
    600: '#BE185D',
    700: '#9D174D',
    800: '#831843', // Brand color
  },
  'safety-orange': {
    25: '#FFF7ED',
    50: '#FFEDD5',
    100: '#FED7AA',
    200: '#FDBA74',
    300: '#FB923C',
    400: '#F97316',
    500: '#EA580C',
    600: '#C2410C',
    700: '#9A3412',
    800: '#7C2D12', // Warnings, status
  },
  'lime-green': {
    25: '#F7FEE7',
    50: '#ECFCCB',
    100: '#D9F99D',
    200: '#BEF264',
    300: '#A3E635',
    400: '#84CC16',
    500: '#65A30D',
    600: '#4D7C0F',
    700: '#3F6212',
    800: '#365314', // Highlights
  },
  'red': {
    25: '#FEF2F2', // Error box background
    50: '#FEE2E2',
    100: '#FECACA',
    200: '#FCA5A5',
    300: '#F87171',
    400: '#EF4444',
    500: '#DC2626',
    600: '#B91C1C',
    700: '#991B1B',
    800: '#7F1D1D', // Errors, negative states (text-negative, border-error)
  },
  'blue': {
    25: '#EFF6FF',
    50: '#DBEAFE',
    100: '#BFDBFE',
    200: '#93C5FD',
    300: '#60A5FA',
    400: '#3B82F6',
    500: '#2563EB',
    600: '#1D4ED8',
    700: '#1E40AF',
    800: '#1E3A8A', // Links, interactive elements (text-clickable)
  },
  'green': {
    25: '#F0FDF4', // Success notice background
    50: '#DCFCE7',
    100: '#BBF7D0',
    200: '#86EFAC',
    300: '#4ADE80',
    400: '#22C55E',
    500: '#16A34A',
    600: '#15803D',
    700: '#166534',
    800: '#14532D', // Success states
  },
  'white': {
    0: '#FFFFFF', // Pure white
  },
  'background-blue': {
    0: '#F8FAFC', // Page background
  },
};
