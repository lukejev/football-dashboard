import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  publicRuntimeConfig: {
    footballApiKey: process.env.FOOTBALL_API_KEY,
  }
};

export default nextConfig;
