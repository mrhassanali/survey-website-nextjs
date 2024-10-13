/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
  images: {
    domains: ['hassanali.pk'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hassanali.pk',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
