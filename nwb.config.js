module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactNwbTest',
      externals: {
        react: 'React',
      },
    },
  },
  webpack: {
    extra: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
      module: {
        rules: [{test: /\.tsx|.js$/, loader: 'ts-loader'}],
      },
    },
  },
}
