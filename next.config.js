/** @type {import('next').NextConfig} */

const path = require("path");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    disableStaticImages: true,
    domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
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

module.exports = withMDX(nextConfig);
