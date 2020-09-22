module.exports = {
    filenameHashing: false,
    publicPath: './dist/',
    configureWebpack: {
      optimization: {
      splitChunks: false
      }
    }
  }
