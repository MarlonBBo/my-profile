import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#18181B',
        'text-muted': '#6a6a74',
      },
      animation: {
        cursor: 'cursor 0.8s infinite',
        digitando: 'digitando 30s steps(18) infinite',
        palavras: 'palavras 30s infinite',
      },
      keyframes: {
        cursor: {
          '0%': { borderLeft: '2px solid #18181B' },
        },
        digitando: {
          '10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95%': {
            width: '0',
          },
          '5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85%': {
            width: 'calc(100% + 10px)',
          },
        },
        palavras: {
          '0%, 100%': { content: `"Hi, I'm Marlon Barreto"` },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
