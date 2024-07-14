/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.timbu.cloud'],
  },
  async rewrites() {
    return [
      {
        source: '/api/products',
        destination: 'https://api.timbu.cloud/products?organization_id=80aafd82afd5454c965591bb966f4011&reverse_sort=false&page=1&size=10&Appid=6T1T1ZB0FSJSWC1&Apikey=cabe8777a2e643ea8559e4cfe84ce1ac20240712141543542147',
      },
    ];
  },
};

export default nextConfig;
