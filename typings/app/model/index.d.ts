// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportComment = require('../../../app/model/comment');
import ExportHouse = require('../../../app/model/house');
import ExportImgs = require('../../../app/model/imgs');
import ExportOrders = require('../../../app/model/orders');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Comment: ReturnType<typeof ExportComment>;
    House: ReturnType<typeof ExportHouse>;
    Imgs: ReturnType<typeof ExportImgs>;
    Orders: ReturnType<typeof ExportOrders>;
    User: ReturnType<typeof ExportUser>;
  }
}
