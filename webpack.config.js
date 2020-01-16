
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const browserConfig = env => {
  return {
    entry: "./src/index.js",
    mode: env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      historyApiFallback: true,
      hot: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: false,
        template: require('html-webpack-template'),
        appMountId: 'app',
        bodyHtmlSnippet: '<noscript>You need to enable JavaScript to run this app.</noscript>',
        title: 'React Mentoring',
        minify: env.NODE_ENV === 'development'
          ? false
          : {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          }
      })
    ]
  }
};

const serverConfig = env => {
  return {
    entry: "./src/server/index.js",
    target: "node",
    output: {
      path: __dirname,
      filename: "server.js",
      libraryTarget: "commonjs2"
    },
    mode: env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] }
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
            "css-loader",
            {
              loader: "sass-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: ["css-loader", "style-loader"]
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      hot: true,
      historyApiFallback: true
    },
    plugins: [
      /*new webpack.DefinePlugin({
        'process.env.NODE_ENV': env.NODE_ENV ? '"development"' : '"production"',
        'process.env.BROWSER': JSON.stringify(true),
        __DEV__: env.NODE_ENVHtmlWebPackPlugin
      }),*/
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        inject: false,
        template: require('html-webpack-template'),
        appMountId: 'app',
        bodyHtmlSnippet: '<noscript>You need to enable JavaScript to run this app.</noscript>',
        title: 'React Mentoring',
        minify: env.NODE_ENV === 'development'
          ? false
          : {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            useShortDoctype: true
          }
      })
    ]
  };
};
module.exports = [browserConfig, serverConfig];
