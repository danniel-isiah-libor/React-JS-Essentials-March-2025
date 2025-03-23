/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "openweathermap.org",
      },
    ],
  },
};

export default nextConfig;
