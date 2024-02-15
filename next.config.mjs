/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/trace",
        destination: "http://localhost:4318/v1/traces",
      },
      {
        source: "/api/metrics",
        destination: "http://localhost:4318/v1/metrics",
      },
      {
        source: "/api/logs",
        destination: "http://localhost:4318/v1/logs",
      },
    ];
  },
};

export default nextConfig;
