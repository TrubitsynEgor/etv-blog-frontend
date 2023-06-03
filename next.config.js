/** @type {import('next').NextConfig} */

const nextConfig = {}

module.exports = nextConfig

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'full-stack-mern-blog.onrender.com',
      },
    ],
  },
}
