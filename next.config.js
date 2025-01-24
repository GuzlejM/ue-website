/**
 * @type {import('next').NextConfig}
 */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@config': path.resolve(__dirname, './config'),
      '@layouts': path.resolve(__dirname, './layouts'),
      '@components': path.resolve(__dirname, './components'),
      '@styles': path.resolve(__dirname, './styles'),
      '@context': path.resolve(__dirname, './context'),
      '@hooks': path.resolve(__dirname, './hooks'),
      '@lib': path.resolve(__dirname, './lib')
    };
    config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx', ...config.resolve.extensions];
    return config;
  }
};

module.exports = nextConfig;
