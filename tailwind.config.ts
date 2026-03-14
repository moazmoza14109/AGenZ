import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
