
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ✅ Skip ESLint checks during builds (local + Vercel)
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

