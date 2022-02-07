// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHttpLog = require('../../../app/middleware/httpLog');
import ExportUserExist = require('../../../app/middleware/userExist');

declare module 'egg' {
  interface IMiddleware {
    httpLog: typeof ExportHttpLog;
    userExist: typeof ExportUserExist;
  }
}
