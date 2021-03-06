const path = require("path");

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
  ignore: ["src/components/**/index.js"],
  title: "React Instagram UI Kit",
  dangerouslyUpdateWebpackConfig(webpackConfig) {
    webpackConfig.output.filename = "build/bundle.js";
    webpackConfig.output.chunkFilename = "build/[name].js";
    return webpackConfig;
  },
  sections: [
    {
      name: "Introduction",
      content: "docs/index.md"
    },
    {
      name: "Components",
      components: "src/components/**/*.js",
      exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand" // 'hide' | 'collapse' | 'expand'
    },
    {
      name: "Source (GitHub)",
      external: true,
      href: "https://github.com/tfiechowski/react-instagram-ui-kit"
    }
  ],
  moduleAliases: {
    "react-instagram-ui-kit": path.resolve(__dirname, "src"),
    utils: path.resolve(__dirname, "src/utils")
  },
  styleguideDir: "dist-gh-pages"
};
