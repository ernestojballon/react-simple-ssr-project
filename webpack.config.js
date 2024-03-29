const nodeExternals = require('webpack-node-externals')
const path = require('path')

const rules = [{
  test : /\.(tsx|ts)$/,
  use: 'ts-loader',
  exclude: /node_modules/
}]

const client = {
  entry :'./src/client.tsx',
  output: {
    path: path.resolve(__dirname, './dist/public'),
    filename: 'bundle.js',
  },
  module: { rules },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'], // Add .ts and .tsx as well as .js and .jsx
  },
}

const server = {
  entry: './src/server.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
    publicPath: '/'
  },
  module: { rules },
  target: 'node',
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.tsx', '.js','.json']
  }
}

module.exports = [client, server]