'use strict';

const md5 = require('md5');
const BaseController = require('./base');

class UserController extends BaseController {
  async jwtSign({ id, username }) {
    const { ctx, app } = this;
    const token = app.jwt.sign({
      id,
      username
    }, app.config.jwt.secret);
    // ctx.session[username] = 1;
    await app.redis.set(username, token, 'EX', app.config.redisExpire);
    return token;
  }
  parseResult(ctx, result) {
    return {
      ...ctx.helper.unPick(result.dataValues, ['password']),
      createTime: ctx.helper.timestamp(result.createTime),
    }
  }
  async register() {
    const { ctx, app } = this;
    const parmas = ctx.params();
    const user = await ctx.service.user.getUser(parmas.username);

    if (user) {
      this.error('用户已经存在');
      return;
    }

    const result = await ctx.service.user.add({
      ...parmas,
      password: md5(parmas.password + app.config.salt),
      createTime: ctx.helper.time()
    });
    // console.log(result)
    if (result) {
      const token = await this.jwtSign({
        id: result.id,
        username: result.username
      });
      this.success({
        ...this.parseResult(ctx, result),
        token
      });
    } else {
      this.error('注册使用失败');
    }
  }

  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.params();
    const user = await ctx.service.user.getUser(username, password);

    if (user) {
      const token = await this.jwtSign({
        id: user.id,
        username: user.username
      });

      this.success({
        ...this.parseResult(ctx, user),
        token
      });
    } else {
      this.error('该用户不存在');
    }
  }
  async detail() {
    const { ctx } = this;
    // ctx.username 是在extend中的context被定义的 拓展
    const user = await ctx.service.user.getUser(ctx.username);

    if (user) {
      this.success({
        ...this.parseResult(ctx, user)
      });
    } else {
      this.error('该用户不存在');
    }
  }
  async logout() {
    const { ctx, app } = this;
    try {
      await app.redis.del(ctx.username);
      this.success('ok');
    } catch (error) {
      this.error('退出登录失败');
    }
  }

  async edit() {
    const { ctx } = this;
    const result = ctx.service.user.edit({
      ...ctx.params(),
      updateTime: ctx.helper.time(),
      // 过滤签名 过滤前端的Html标签
      sign: ctx.helper.escape(ctx.params('sign'))
    });

    this.success(result);
  }
}

module.exports = UserController;
