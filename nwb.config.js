module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'InstagramUIKit',
      externals: {
        react: 'React'
      }
    }
  }
}
