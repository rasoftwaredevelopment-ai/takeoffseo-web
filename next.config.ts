import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [{ source: "/ops", destination: "/ops/index.html" }];
  },
  async redirects() {
    return [
      {
        source: "/services/visibility-snapshot",
        destination: "/free-check",
        permanent: true,
      },
      {
        source: "/services/visibility-audit",
        destination: "/pricing",
        permanent: true,
      },
      {
        source: "/services/90-day-foundation",
        destination: "/fix-up",
        permanent: true,
      },
      {
        source: "/services/ninety-day-foundation",
        destination: "/fix-up",
        permanent: true,
      },
      {
        source: "/services/monthly-retainer",
        destination: "/monthly",
        permanent: true,
      },
      {
        source: "/industries/pool-landscape",
        destination: "/who-its-for",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
