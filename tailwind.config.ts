import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["ui-sans-serif","system-ui","Segoe UI","Roboto","Arial"] },
      boxShadow: { soft: "0 12px 40px rgba(0,0,0,0.10)" }
    },
  },
  plugins: [],
};
export default config;
