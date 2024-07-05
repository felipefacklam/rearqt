/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/api/:path*',
          has: [
            {
              type: 'header',
              key: 'authorization',
              value: 'Bearer .*',
            },
          ],
          destination: '/api/auth/redirect?path=:path*',
          permanent: false,
        },
      ];
    },
    async rewrites() {
      return [
        {
          source: '/api/projetos/:path*',
          destination: '/api/projetos/:path*',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  