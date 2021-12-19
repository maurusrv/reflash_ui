const custom = require('../webpack.config.js')

module.exports = {
  "stories": ["../src/components/**/stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials"],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  },
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: { ...config.resolve, alias: { ...config.resolve.alias, ...custom.resolve.alias },fallback: {
        path: false,
      } },
      module: { ...config.module, rules: custom.module.rules },
    }
  },
};