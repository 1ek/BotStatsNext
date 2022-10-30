/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GOOGLE_URL: process.env.GOOGLE_URL,
  }
}

module.exports = nextConfig
