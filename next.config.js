/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
