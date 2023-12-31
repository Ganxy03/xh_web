const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 31015,
    client: {
      webSocketURL: 'ws://0.0.0.0:31015/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    allowedHosts: "all"
    // proxy: {
    //   '/motto': {
    //     target: 'http://localhost:31014', // 将目标URL修改为接口的地址
    //     changeOrigin: true
    //   }
    // }
  }
})
