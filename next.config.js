/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Configure page revalidation periods
  async rewrites() {
    return [];
  }
};

module.exports = nextConfig;