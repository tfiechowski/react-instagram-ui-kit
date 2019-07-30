module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "InstagramUIKit",
      externals: {
        react: "React",
        "@emotion/styled": "styled"
      }
    }
  },
  babel: {
    plugins: ["emotion"]
  }
};
