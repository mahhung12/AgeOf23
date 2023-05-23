/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    disableStaticImages: true,
    domains: ["images.unsplash.com"],
    deviceSizes: [375, 720, 1080],
    imageSizes: [300, 600, 900],
  },
  experimental: {
    serverComponents: true,
  },
  pagesDir: "src/app",
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/src/:any*",
      },
    ];
  },
};

module.exports = nextConfig;
