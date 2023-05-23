/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
    domains: ["images.unsplash.com"],
    deviceSizes: [375, 720, 1080],
    imageSizes: [300, 600, 900],
  },
};

module.exports = nextConfig;
