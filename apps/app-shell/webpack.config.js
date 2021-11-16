const nrwlConfig = require('@nrwl/react/plugins/webpack.js');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('../../package.json').dependencies;

module.exports = (config) => {
  nrwlConfig(config);

  config.optimization.runtimeChunk = 'single';

  return {
    ...config,
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'hostApp',
        filename: 'remoteEntry.js',
        remotes: {
          mfShop: 'mfShop@http://localhost:3001/remoteEntry.js',
        },
        // exposes: {
        //   './app': './src/app/app',
        // },
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
