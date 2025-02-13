import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // basePath: "/mini-portfolio",
  // assetPrefix: "/mini-portfolio/out",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
