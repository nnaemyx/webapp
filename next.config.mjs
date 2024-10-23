/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/:path*',
            destination: 'http://localhost:5000/:path*' // Proxy to Backend
          }
        ]
      }
};
const productionNextConfig = {}

export default  process.env.NEXT_PUBLIC_NEXT_ENV === "development" ? nextConfig : productionNextConfig;

