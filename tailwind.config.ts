import type { Config } from "tailwindcss";

const config: Config = {
  // 1. CONTENT: This is required! It tells Tailwind where to find your classes.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  // 2. THEME: This is where your custom animations go.
  theme: {
    extend: {
      animation: {
        photoReveal: 'photoReveal 1.2s 0.4s forwards',
      },
      keyframes: {
        photoReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  
  // 3. PLUGINS: Usually empty unless you use extra plugins like typography or forms.
  plugins: [],
};

export default config;