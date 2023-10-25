/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'de-york': {
          '50': 'oklch(97.34% 0.01 152.61)',
          '100': 'oklch(93.74% 0.04 151.39)',
          '200': 'oklch(87.60% 0.06 153.39)',
          '300': 'oklch(79.14% 0.10 154.02)',
          '400': 'oklch(71.73% 0.12 153.95)',
          '500': 'oklch(60.01% 0.13 152.75)',
          '600': 'oklch(50.93% 0.11 153.35)',
          '700': 'oklch(43.62% 0.09 154.80)',
          '800': 'oklch(37.62% 0.08 155.06)',
          '900': 'oklch(33.09% 0.06 156.43)',
          '950': 'oklch(23.23% 0.04 157.52)',
        },
        'blue-ribbon': {
          '50': 'oklch(97.10% 0.02 241.77)',
          '100': 'oklch(93.34% 0.03 245.47)',
          '200': 'oklch(88.63% 0.06 243.22)',
          '300': 'oklch(82.00% 0.10 240.28)',
          '400': 'oklch(73.35% 0.15 246.09)',
          '500': 'oklch(64.67% 0.19 254.75)',
          '600': 'oklch(57.61% 0.23 260.54)',
          '700': 'oklch(52.32% 0.24 262.44)',
          '800': 'oklch(44.38% 0.20 262.98)',
          '900': 'oklch(39.46% 0.15 262.03)',
          '950': 'oklch(28.94% 0.10 263.51)',
        },
        'malachite': {
          '50': 'oklch(98.21% 0.02 147.30)',
          '100': 'oklch(96.22% 0.06 145.83)',
          '200': 'oklch(92.50% 0.11 145.77)',
          '300': 'oklch(87.60% 0.18 145.01)',
          '400': 'oklch(81.07% 0.24 143.74)',
          '500': 'oklch(74.03% 0.24 143.18)',
          '600': 'oklch(64.39% 0.21 143.05)',
          '700': 'oklch(53.96% 0.17 143.22)',
          '800': 'oklch(45.79% 0.14 143.67)',
          '900': 'oklch(40.03% 0.12 144.20)',
          '950': 'oklch(27.01% 0.08 145.04)',
        },

      }
    },
  },
  plugins: [],
}
