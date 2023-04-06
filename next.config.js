/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const path = require('path')
require('dotenv').config()
const nextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: ['@svgr/webpack'],
      }
    )
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  env: {
    SENDINBLUE_API_URL: process.env.NEXT_PUBLIC_SENDINBLUE_API_URL,
    SENDINBLUE_API_KEY: process.env.NEXT_PUBLIC_SENDINBLUE_API_KEY,
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
