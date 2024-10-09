import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "bg-sidebar": "var(--bg-sidebar)",
        "sidebar-hover": "var(--bg-sidebar-hover)",
        "sidebar-text": "var(--text-sidebar)",
        "sidebar-text-hover": "var(--text-sidebar-hover)",
      },
    },
  },
  plugins: [],
};
export default config;
