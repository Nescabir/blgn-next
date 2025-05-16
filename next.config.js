const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import 'utils/utils';`,
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  }
};
