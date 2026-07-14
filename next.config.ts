import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/guet-im",
  assetPrefix: "/guet-im",
};

export default nextConfig;
