/** @type {import('next').NextConfig} */
import path from "node:path";

const nextConfig = {
  outputFileTracingRoot: path.resolve(process.cwd()),
  output: "standalone",
  turbopack: {
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
