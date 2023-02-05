const stailwc = require("stailwc/install")
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const stailwcConfig = {
  experimental: {
    swcPlugins: [stailwc()],
  },
  compiler: { styledComponents: true },
}
const svgrConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          //svgoという最適化ツールで線が一部表示されないなどSVGが想定通りに表示されないことがあるので、無効にする
          options: {
            svgo: false, // 圧縮無効
          },
        },
      ],
    });
    return config;
  },
  images: {
    disableStaticImages: true, // importした画像の型定義設定を無効にする
  },
}
module.exports = {
  ...nextConfig,
  ...stailwcConfig,
  ...svgrConfig,
}
