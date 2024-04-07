'use strict';

const mainBrowserServer = require('./site/browser');
const mainNodeServer = require('./site/node');

module.exports = () => {

  const env = process.env.NEXT_PUBLIC_ENV;
  // console.log(env, '这里是env')
  // 客户端调用的API地址
  if (typeof window !== 'undefined') {
    

    return mainBrowserServer[env] || mainBrowserServer.qa;
  }

  // 服务端（内网）调用的API地址
  return mainNodeServer[env];
};
