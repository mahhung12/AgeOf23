/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    disableStaticImages: true,
    domains: ["images.unsplash.com", "lh3.googleusercontent.com"],
    imageSizes: [300, 600, 900],
    deviceSizes: [375, 720, 1080],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async rewrites() {
    return [
      {
        source: "/app",
        destination: "/src/app",
      },
    ];
  },
};

module.exports = nextConfig;
