/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static page generation
  output: 'standalone',
  // Configure page revalidation periods based on sitemap
  async generateStaticParams() {
    return {
      '/': { revalidate: 604800 }, // weekly
      '/about': { revalidate: 2592000 }, // monthly
      '/contact': { revalidate: 2592000 }, // monthly
      '/faq': { revalidate: 2592000 }, // monthly
      '/gradex': { revalidate: 604800 }, // weekly
      '/courses': { revalidate: 604800 }, // weekly
      '/courses/*': { revalidate: 604800 }, // weekly for all course pages
    };
  },
};

module.exports = nextConfig;