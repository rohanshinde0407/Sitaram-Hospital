import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/treatments",
        destination: "/proctology",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
