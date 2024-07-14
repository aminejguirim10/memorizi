/** @type {import('next').NextConfig} */

import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(nextConfig);
