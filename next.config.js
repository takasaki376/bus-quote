/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["page.tsx", "page.ts"],
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig;
