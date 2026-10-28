import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // thatguycodes.github.io is a root GitHub Pages site, so basePath is empty
};

export default nextConfig;
