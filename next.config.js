// // next.config.js
// const withLess = require('@zeit/next-less')

// module.exports = withLess({
//   lessLoaderOptions: {
//     /* less-loader 配置项 */
//     javascriptEnabled: true, // 设置为true，使Less支持JavaScript表达式
//   },
//   /* 其他 Next.js 配置 */
// })


require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

// console.log(process.env.API_URL, 'process.env.API_URL')
  