const { resolve } = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: resolve(__dirname, "src/index.js"),
    output: {
        path: resolve(__dirname, "dist"),
        filename: "example.js",
        library: "example_pg",
    },
    plugins: [
        new UglifyJsPlugin({
            exclude: [/\.min\.js$/gi], // skip pre-minified libs
        }),
    ],
};
