import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin';

import { myCustomTheme } from './custom-theme.js'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,svelte,ts}",
    join(require.resolve(
      '@skeletonlabs/skeleton'
    ), '../**/*.{html,js,svelte,ts}')
  ],

  theme: {
    extend: { fontFamily: ["Bodoni Moda", "sans-serif"], rotate: { '-15': '-15deg' } }
  },

  plugins: [require("@tailwindcss/typography"), skeleton({
    themes: { preset: ["vintage", "sahara"], custom: [myCustomTheme] }
  })]
};
