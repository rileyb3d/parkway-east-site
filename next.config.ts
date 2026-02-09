import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 1024],
    minimumCacheTTL: 31536000,
    // Keep images at original quality - don't compress further
    // Source images are already low quality, we don't want to make them worse
    unoptimized: true,
  },
}

export default nextConfig
