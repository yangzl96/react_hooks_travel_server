'use strict';

const BaseController = require('./base')

class CommentController extends BaseController {
  async citys() {
    const { ctx, app } = this;
    this.success([[
      {
        label: '杭州',
        value: '10001'
      },
      {
        label: '苏州',
        value: '10002'
      },
      {
        label: '上海',
        value: '10003'
      },
      {
        label: '绍兴',
        value: '10004'
      },
      {
        label: '大同',
        value: '10005'
      },
      {
        label: '嘉兴',
        value: '10006'
      }
    ]])
    // try {
    //   const result = await app.httpclient.request('https://apis.imooc.com/?icode=89773B5DA84CA283', {
    //     dataType: 'json'
    //   });
    //   // console.log(result)
    //   if (result.status === 200) {
    //     // this.success(result.data.citys);
    //     this.success([[
    //       {
    //         label: '杭州',
    //         value: '10001'
    //       },
    //       {
    //         label: '苏州',
    //         value: '10002'
    //       },
    //       {
    //         label: '上海',
    //         value: '10003'
    //       },
    //       {
    //         label: '绍兴',
    //         value: '10004'
    //       },
    //       {
    //         label: '大同',
    //         value: '10005'
    //       },
    //       {
    //         label: '嘉兴',
    //         value: '10006'
    //       }
    //     ]])
    //   } else {
    //     this.error('获取城市数据失败');
    //   }
    // } catch (error) {
    //   this.error('获取城市数据失败');
    // }
  }
}

module.exports = CommentController;
