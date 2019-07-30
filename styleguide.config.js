module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    webpackConfig.output.filename = "build/bundle.js";
    webpackConfig.output.chunkFilename = "build/[name].js";
    return webpackConfig;
  }
};
