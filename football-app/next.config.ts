// const nextConfig = {
//   // publicRuntimeConfig: {
//   //   footballApiKey: process.env.FOOTBALL_API_KEY,
//   // }
//   env: {
//     // BASE_URL: process.env.BASE_URL,
//     footballApiKey: process.env.FOOTBALL_API_KEY,
//   }
// };

import { NextConfig } from "next";

// module.exports = {
//   reactStrictMode: true,
//   env: {
//     // BASE_URL: process.env.BASE_URL,
//     footballApiKey: process.env.FOOTBALL_API_KEY,
//   }
// }

// export default nextConfig;

// module.exports = nextConfig;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    FOOTBALL_API_URL: process.env.NEXT_FOOTBALL_API_URL,
  },
};

module.exports = nextConfig;
