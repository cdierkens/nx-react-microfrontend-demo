const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

module.exports = (config) => {
  nrwlConfig(config);

  return {
    ...config,
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
    },
    output: {
      uniqueName: 'mfShop',
      publicPath: 'auto',
      clean: true,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'mfShop',
        library: { type: 'var', name: 'mfShop' },
        filename: 'remoteEntry.js',
        exposes: {
          './app': './src/app/app',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            eager: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
    ],
  };
};
