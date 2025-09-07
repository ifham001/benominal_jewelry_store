


/** @type {import('next').NextConfig} */
const nextConfig = {
  // crossOrigin: 'anonymous',
  headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'unsafe-none',
          },
        ],
      },
    ]
  }
,  
experimental: {
  serverActions: {
    bodySizeLimit: '10mb',
  },
},
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'storage.googleapis.com',
            pathname: '/benominal/products/**',
          },
          {
            protocol: 'https',
            hostname: 'storage.cloud.google.com',
            pathname: '/benominal/benominal_mains/**',
          },
        ],
      },  
      
};

export default nextConfig;

