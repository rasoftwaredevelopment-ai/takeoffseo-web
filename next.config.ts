import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/services/ninety-day-foundation",
        destination: "/services/90-day-foundation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
