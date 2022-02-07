// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBase = require('../../../app/controller/base');
import ExportComment = require('../../../app/controller/comment');
import ExportCommons = require('../../../app/controller/commons');
import ExportHouse = require('../../../app/controller/house');
import ExportOrders = require('../../../app/controller/orders');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    base: ExportBase;
    comment: ExportComment;
    commons: ExportCommons;
    house: ExportHouse;
    orders: ExportOrders;
    user: ExportUser;
  }
}
