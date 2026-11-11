/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  // Sales team's restaurant cost comparison (app/deal-calculator): unlisted,
  // kept out of search results.
  async headers() {
    return [
      { source: '/deal-calculator', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
    ]
  }
}

export default nextConfig
