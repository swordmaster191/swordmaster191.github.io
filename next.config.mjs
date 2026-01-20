/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables Static HTML Export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export (Next.js Image Optimization API doesn't work on static hosts)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
      },
    ],
  },
};

export default nextConfig;
