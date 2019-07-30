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
  title: "React Instagram UI Kit",
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    webpackConfig.output.filename = "build/bundle.js";
    webpackConfig.output.chunkFilename = "build/[name].js";
    return webpackConfig;
  },
  sections: [
    {
      name: "Introduction",
      content: "src/index.md"
    },
    {
      name: "Components",
      components: "src/components/**/*.js",
      exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand" // 'hide' | 'collapse' | 'expand'
    }
  ]
};
