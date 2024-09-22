/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1DD100",
        secondaryColor: "rgb(247, 248, 248)",
        accentColor: "rgb(3, 7, 18)",
        accentBlue: "rgba(29, 209, 0, 0.15)",
        fontColor: "rgba(3, 7, 18, 0.7)",

        // transparent
        transparentColor: "rgba(3, 7, 18, 0.6)",
        infoColor: "rgba(3, 7, 18, 0.05)",
        // divider color
        dividerColor: "rgba(3, 7, 18, 0.3)",
      },
      fontFamily: {
        railway: ["Raleway", "system-ui"],
        inter: ["Inter", "system-ui"],
      },
    },
  },
  plugins: [require("daisyui")],
};
