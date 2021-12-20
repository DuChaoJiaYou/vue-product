/**
 * @author duchao
 * @description vue项目配置跨域
 * 使用module.exports来导出，
 * 注意点是 target 要写完成，加上http头
 * pathRewrite是在跨域代理时，是否要改变请求内容
 */
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        pathRewrite: {
          "/api": "/api",
        },
      },
    },
  },
};
