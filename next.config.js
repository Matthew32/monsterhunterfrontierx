/** @type {import('next').NextConfig} */
const nextConfig = {
        assetPrefix: '/mhfz',
        rewrites() {
          return [
            { source: '/mhfz/_next/:path*', destination: '/_next/:path*' }
          ]
        }
}

module.exports = nextConfig
