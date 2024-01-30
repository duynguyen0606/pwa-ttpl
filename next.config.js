const prod = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  // disable: process.env.NODE_ENV === 'development',
  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
  //...
});

module.exports = withPWA({
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //     // https://github.com/webpack-contrib/mini-css-extract-plugin#recommended
  //     // For production builds it's recommended to extract the CSS from your bundle being able to use parallel loading of CSS/JS resources later on.
  //     // For development mode, using style-loader because it injects CSS into the DOM using multiple <style></style> and works faster.
  //     if (!dev) {
  //         config.plugins.push(new MiniCssExtractPlugin({
  //             filename: 'static/chunks/[name].[fullhash].css',
  //             ignoreOrder: true
  //         }));
  //     }
  //     config.module.rules.push(
  //         {
  //             test: /\.(sa|sc|c)ss$/,
  //             use: [
  //                 isServer ? { loader: 'file-loader' } : (dev ? { loader: 'style-loader' } : { loader: MiniCssExtractPlugin.loader }),
  //                 { loader: 'css-loader' },
  //                 { loader: 'sass-loader' }
  //             ]
  //         }
  //     );
  //     return config;
  // },
  experimental: {
    appDir: true,
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    importLoaders: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
});
