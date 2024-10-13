import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          primary: '#a94064',           //main color for app/
          primarytext: '#ffffff',       //primary color connected to main background | primary text= text-slate-600
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
