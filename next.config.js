/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

// module.exports = withRSPack({
//   rspackConfigPath: "./rspack.config.js",
//   nextConfig,
//   // Add any additional Next.js configuration options here
// });
