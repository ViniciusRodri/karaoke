/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_API_FILE: process.env.NEXT_PUBLIC_API_FILE,
    NEXT_PUBLIC_RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_API_FILE],
  },
};
