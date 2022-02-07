'use strict';

const BaseService = require('./base')

class HouseService extends BaseService {
  commonAttr(app) {
    return {
      order: [
        ['showCount', 'DESC']
      ],
      attributes: {
        exclude: ['startTime', 'endTime', 'publishTime']
      },
      // 关联的Img model
      include: [
        {
          model: app.model.Imgs,
          limit: 1, //只要一张
          attributes: ['url'] //只要这一个字段
        }
      ]
    }
  }
  async hot() {
    return this.run(async (ctx, app) => {
      const result = await ctx.model.House.findAll({
        limit: 4,
        ...this.commonAttr(app)
      })
      return result
    })
  }
  async search(params) {
    return this.run(async (ctx, app) => {
      const { lte, gte, like } = app.Sequelize.Op
      const where = {
        cityCode: Array.isArray(params.code) ? params.code[0] : params.code,
        startTime: {
          [lte]: params.startTime
        },
        endTime: {
          [gte]: params.endTime
        },
        name: {
          [like]: '%' + params.houseName + '%'
        }
      }
      if (!params.houseName) {
        delete where.name
      }
      const result = await ctx.model.House.findAll({
        ...this.commonAttr(app),
        limit: 8,
        where,
        offset: (params.pageNum - 1) * params.pageSize,
      })
      return result
    })
  }
  async detail(id) {
    return this.run(async (ctx, app) => {
      const result = await ctx.model.House.findOne({
        where: {
          id
        },
        include: [
          {
            model: app.model.Imgs,
            attributes: ['url']
          }
        ]
      })
      // showCunt + 1
      await ctx.model.House.update({
        showCount: result.showCount + 1
      }, {
        where: {
          id
        }
      })
      return result
    })
  }
}

module.exports = HouseService;