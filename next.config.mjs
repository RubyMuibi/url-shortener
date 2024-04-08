/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  experimental: {
    serverComponentsExternalPackages: ["sequelize", "pino", "pino-pretty"],
  },
};

export default nextConfig;
