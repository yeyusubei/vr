'use strict';

const Controller = require('egg').Controller;

class SellerController extends Controller {
  async list() {
    // ctx, service属性挂在 this
    const { ctx, service } = this;
    // 调用 Service 进行业务处理
    const result = await service.seller.getList();
    // 设置响应内容和响应状态码
    ctx.body = result;
    ctx.status = 200;
  }

//   async userInfo() {
//     const { ctx } = this;
//     ctx.body = {
//       role: [ 'admin' ],
//       name: 'admin',
//       introduction: '我是超级管理员',
//       token: 'admin',
//       avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//     };
//     ctx.status = 200;
//   }

  async getListWithPage() {
    const { ctx, service } = this;
    // ctx.validate({
    //   page: { type: 'int', required: true },
    //   limit: { type: 'int', required: true },
    // });
    // get请求获取的参数ctx.request.query
    const page = ctx.request.query.page;
    const limit = ctx.request.query.limit;
    const username = ctx.request.query.username;
    const result = await service.seller.getListWithPage(page, limit, username);
    ctx.body = result;
    ctx.status = 200;
  }

  async find() {
    const { ctx, service } = this;
    // get请求获取的参数ctx.request.query
    const userId = ctx.request.query.userId;
    const result = await service.seller.findByID(userId);
    ctx.body = result;
    ctx.status = 200;
  }

  async add() {
    const { ctx, service } = this;
    // 验证提交的参数
    ctx.validate({
        seller_name: { type: 'string', required: true },
        seller_password: { type: 'string', required: true, min: 6 },
    });
    const result = await service.seller.addModel(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }

  async update() {
    const { ctx, service } = this;
    // 验证提交的参数
    ctx.validate({
      id: { type: 'string', required: true },
    });
    const result = await service.seller.updateModel(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }

  async destroy() {
    const { ctx, service } = this;
    ctx.validate({
      userId: { type: 'string', required: true },
    });
    const userId = ctx.request.body.userId;
    const result = await service.seller.destroyModel(userId);
    ctx.body = result;
    ctx.status = 200;
  }

}

module.exports = SellerController;
