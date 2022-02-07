/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1575812978932_7706';

  // add your middleware config here
  config.middleware = ['httpLog'];

  config.allowHosts = ['localhost:8000', '127.0.0.1:8000']

  config.interfaceLimit = {
    maxCount: 6, //最多请求个数
    time: 3 * 1000 //间隔时间
  }

  config.interfaceCache = {
    expire: 10,
    include: ['/api/user/detail']
  }

  config.httpLog = {
    type: 'all'
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      ".html": "ejs"
    },
    root: [
      path.join(appInfo.baseDir, "app/html"),
      path.join(appInfo.baseDir, "app/view")
    ].join(",")
  };

  config.ejs = {
    delimiter: "%"
  };

  config.static = {
    prefix: "/assets/",
    dir: path.join(appInfo.baseDir, "app/assets")
  };

  config.session = {
    key: "MUKE_SESS",
    httpOnly: true,
    maxAge: 1000 * 5,
    renew: true
  };

  config.auth = {
    exclude: ['/api/user/login', '/api/user/register']
  };

  // config.mysql = {
  //   app: true,
  //   agent: false,
  //   client: {
  //     host: '127.0.0.1',
  //     port: '3306',
  //     user: 'root',
  //     password: '123456',
  //     database: 'egg'
  //   }
  // };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'react_hooks_egg',
    define: {
      timestamps: false,
      freezeTableName: true
    }
  };

  config.jwt = {
    secret: 'muke'
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '123456',
      db: 0
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'muke',
    redisExpire: 60 * 60 * 24
  };

  return {
    ...config,
    ...userConfig,
  };
};
