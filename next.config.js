const withCss = require('@zeit/next-css')

module.exports = withCss({
  webpack: config => {
    config.plugins = config.plugins || []

    // Important: return the modified config
    return config
  }
})