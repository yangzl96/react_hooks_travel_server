'use strict';

const BaseService = require('./base')

class CommentService extends BaseService {
  async add(params) {
    return this.run(async (ctx) => {
      const result = await ctx.model.Comment.create(params)
      return result
    })
  }
  async lists(params, userId) {
    return this.run( async (ctx, app) => {
      const result = await ctx.model.Comment.findAll({
        where: {
          houseId: params.id,
          userId
        },
        limit: params.pageSize,
        offset: (params.pageNum - 1) * params.pageSize,
        // 去User模型中拿头像
        include: [
          {
            model: app.model.User,
            attributes: ['avatar', 'username']
          }
        ]
      })
      return result
    })
  }
}

module.exports = CommentService;
