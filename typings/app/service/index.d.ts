// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportBase = require('../../../app/service/base');
import ExportComment = require('../../../app/service/comment');
import ExportHouse = require('../../../app/service/house');
import ExportOrders = require('../../../app/service/orders');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    base: AutoInstanceType<typeof ExportBase>;
    comment: AutoInstanceType<typeof ExportComment>;
    house: AutoInstanceType<typeof ExportHouse>;
    orders: AutoInstanceType<typeof ExportOrders>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
