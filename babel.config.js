const path = require("path");
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".android.js", ".ios.js", ".web.js"],
          alias: {
            navigation: path.resolve(__dirname, "src/navigation"),
            screens: path.resolve(__dirname, "src/screens"),
            i18n: path.resolve(__dirname, "src/i18n"),
            config: path.resolve(__dirname, "src/config"),
            components: path.resolve(__dirname, "src/components"),
            actions: path.resolve(__dirname, "src/actions"),
            api: path.resolve(__dirname, "src/api"),
            forms: path.resolve(__dirname, "src/forms"),
          },
        },
      ],
    ],
  };
};
