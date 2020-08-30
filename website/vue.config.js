module.exports = {
  productionSourceMap:false,
  devServer: {
    host: 'localhost',
    port: 8080,
    },
  outputDir: __dirname + '/../backend/admin',    //这边是导出的目录，默认为dist
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin'    //这边是项目里面所有文件路径的前缀，默认为/
    : '/'

}
