const path = require("path");

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: {
            prependData: `@import "~@/styles/env.scss";`,
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    return config;
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
};
