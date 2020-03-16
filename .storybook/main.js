const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async config => {
    // do mutation to the config
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });

    return config;
  }
};
