import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A202C",
        secondary: "#2D3748",
        lightBlue: "#3182CE",
        darkBlue: "#2B6CB0",
        textPrimary: "#E2E8F0",
        textSecondary: "#A0AEC0",
        textAccent: "#63B3ED",
        hoverPrimary: "#63B3ED",
        hoverSecondary: "#4299E1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
