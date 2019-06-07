const HappyPack = require("happypack");
const resolve = require("path").resolve;
const os = require("os");

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  configureWebpack: {
    optimization: {
      // 分离chunks
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            name: "vendor",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial" // 只打包初始时依赖的第三方
          }
        }
      }
    }
  }
};
