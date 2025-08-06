/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // SEO优化 - 性能优化
  compress: true,
  poweredByHeader: false,
  
  // 图片优化
  images: {
    domains: [
      'genie3.top',
      'cdn.genie3.top',
      'images.unsplash.com',
      'cdn.sanity.io'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  
  // 重定向和重写规则
  async redirects() {
    return [
      {
        source: '/genie2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/genie-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
  
  // 自定义头部
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0'
          },
        ],
      },
    ]
  },
  
  // 环境变量
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://genie3.top',
    NEXT_PUBLIC_SITE_NAME: 'Genie3',
    NEXT_PUBLIC_SITE_DESCRIPTION: 'Genie3 - Transform images into interactive 3D worlds with AI',
  },
  
  // Webpack优化
  webpack: (config, { isServer }) => {
    // 支持SVG作为组件
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    
    return config
  },
}

module.exports = nextConfig