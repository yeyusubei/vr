'use strict';

const Controller = require('egg').Controller;

class BbsInfosController extends Controller {
  async list() {
    // ctx, service属性挂在 this
    const { ctx, service } = this;
    const limit = ctx.request.query.limit;
    const result = await service.bbsinfos.getList(limit);
    ctx.body = result;
    ctx.status = 200;
  }

  async find() {
    const { ctx, service } = this;
    // get请求获取的参数ctx.request.query
    const id = ctx.request.query.id;
    const result = await service.bbsinfos.findByID(id);
    ctx.body = result;
    ctx.status = 200;
  }

  async add() {
    const { ctx, service } = this;
    // 验证提交的参数
    ctx.validate({
      title: { type: 'string', required: true },
      content: { type: 'string', required: true },     
      creater_id: { type: 'int', required: true },     
    });
    const result = await service.bbsinfos.addModel(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }

  async update() {
    const { ctx, service } = this;
    // 验证提交的参数
    ctx.validate({
      id: { type: 'string', required: true },
      title: { type: 'string', required: true },
      content: { type: 'string', required: true },     
      creater_id: { type: 'int', required: true },     
    });
    const result = await service.bbsinfos.updateModel(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }

  async destroy() {
    const { ctx, service } = this;
    ctx.validate({
      id: { type: 'string', required: true },
    });
    const id = ctx.request.body.id;
    const result = await service.bbsinfos.destroyModel(id);
    ctx.body = result;
    ctx.status = 200;
  }

}

module.exports = BbsInfosController;
