import localFont from "next/font/local";

export const CaveatFont = localFont({
  src: [
    {
      path: "../../public/fonts/Caveat/Caveat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Caveat/Caveat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Caveat/Caveat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Caveat/Caveat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["sans-serif"],
});
