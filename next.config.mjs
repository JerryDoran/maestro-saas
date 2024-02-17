/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'oaidalleapiprodscus.blob.core.windows.net',
  //       port: '',
  //       pathname: '/images/**',
  //     },
  //   ],
  // },
  images: {
    domains: ['oaidalleapiprodscus.blob.core.windows.net'],
  },
};

export default nextConfig;
