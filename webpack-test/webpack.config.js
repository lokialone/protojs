const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const DashboardPlugin = require('webpack-dashboard/plugin');
module.exports = {
    // mode: 'development',
    mode: 'production',
    module: {
        // configuration regarding modules
        rules: [
          // rules for modules (configure loaders, parser options, etc.)
          {
            test: /\.js?$/,
            include: [
                path.resolve(__dirname, "src")
            ],
            loader: "babel-loader"
          }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};