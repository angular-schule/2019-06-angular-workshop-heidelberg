module.exports = {
    entry: "./index.ts",
    output: { filename: "bundle.js" },
    resolve: {
      extensions: [".ts"]
    },
    module: {
      rules: [
        { test: /\.ts$/, loader: "ts-loader" }
      ]
    },
    mode: "development",
    devtool: "inline-source-map"
  };