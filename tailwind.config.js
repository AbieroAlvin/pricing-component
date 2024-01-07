/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Manrope", "sans-serif"],
      },
      colors: {
        // (Full Slider Bar)
        SoftCyan: "hsl(174, 77%, 80%)",
        // (Slider Backround)
        StrongCyan: "hsl(174, 86%, 45%)",
        // (Discount Background)
        LightGrayishRed: "hsl(14, 92%, 95%)",
        // (Discount Text)
        LightRed: "hsl(15, 100%, 70%)",
        // (CTA Text)
        PaleBlue: "hsl(226, 100%, 87%)",
        // (Pricing Component Background)
        White: "hsl (0, 0%, 100%)",
        // (Main Background)
        VeryPaleBlue: "hsl(230, 100%, 99%)",
        // (Empty Slider Bar)
        LightGrayishBlue: "hsl(224, 65%, 95%)",
        // (Toggle Background)
        Toggle: "hsl(223, 50%, 87%)",
        // (Text)
        GrayishBlue: "hsl(225, 20%, 60%)",
        // (Text & CTA Background)
        DarkDesaturatedBlue: "hsl(227, 35%, 25%)",
      },
    },
  },
  plugins: [],
};
