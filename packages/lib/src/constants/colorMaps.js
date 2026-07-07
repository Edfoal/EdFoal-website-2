/**
 * Design System — Runtime Color Mapping (Layer 2)
 * File: packages/lib/src/constants/colorMaps.js
 * 
 * Maps backend database hex color codes to safe Tailwind CSS utility classes.
 * This is critical for domain workflows (such as aviation status badges) to avoid
 * unsafe inline style bindings (style="background-color: #FF69C2") and maintain CSP compliance.
 */

const AVIATION_COLOR_MAP = {
  '#383F4C': 'bg-navy-blue-800',
  '#FF69C2': 'bg-hot-pink-800',
  '#0084CB': 'bg-blue-800',
  '#101826': 'bg-midnight-blue-800',
  '#EF4444': 'bg-red-500',
  '#22C55E': 'bg-green-400',
  '#F97316': 'bg-safety-orange-400',
  '#38BDF8': 'bg-ice-blue-300',
};

/**
 * Resolves a runtime hex color string to its corresponding Tailwind background utility class.
 * 
 * @param {string} hexColor - The hexadecimal color code from backend APIs.
 * @param {string} [defaultClass='bg-primary'] - Fallback class if hex is not mapped.
 * @returns {string} Tailwind background utility class name.
 */
function getColorClass(hexColor, defaultClass = 'bg-primary') {
  if (!hexColor) return defaultClass;
  const normalizedHex = hexColor.toUpperCase();
  return AVIATION_COLOR_MAP[normalizedHex] || defaultClass;
}

module.exports = {
  AVIATION_COLOR_MAP,
  getColorClass,
};
