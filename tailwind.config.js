/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cyberpunkBg: '#0f1021',
        cyberpunkPanel: '#23243a',
        neonPink: '#ff00ea',
        neonBlue: '#00eaff',
        neonGreen: '#39ff14',
        neonYellow: '#fff700',
        neonOrange: '#ff9900',
        neonPurple: '#a020f0',
        neonRed: '#ff3131',
        neonGlow: '#00fff7',
      },
      fontFamily: {
        cyberpunk: ['Orbitron', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 8px #00eaff, 0 0 16px #ff00ea',
        neonPink: '0 0 8px #ff00ea, 0 0 16px #ff00ea',
        neonBlue: '0 0 8px #00eaff, 0 0 16px #00eaff',
        neonGreen: '0 0 8px #39ff14, 0 0 16px #39ff14',
      },
    },
  },
  plugins: [],
}
