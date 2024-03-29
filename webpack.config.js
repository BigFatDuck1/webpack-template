const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(
        {
            hash: true, //Cache busting
            title: "Title",
            header: "Header",
            metaDesc: "Description",
            template: "./src/index.html", //This line tells webpack to use a template html instead of generating its own and putting it into /dist
            filename: "./index.html", //Filename for the output file in /dist
            inject: "body", //Inject js script in <body> instead of <head>
        }
    )
  ],

  mode: 'development', //Change to mode: 'production' when ready to deploy
};