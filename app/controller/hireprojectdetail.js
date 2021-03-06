'use strict';

const Controller = require('egg').Controller;

class HireProjectDetailController extends Controller {
  async list() {
    // ctx, service属性挂在 this
    const { ctx, service } = this;
    const result = await service.hireprojectdetail.getList();
    ctx.body = result;
    ctx.status = 200;
  }

  async find() {
    const { ctx, service } = this;
    // get请求获取的参数ctx.request.query
    const id = ctx.request.query.id;
    const result = await service.hireprojectdetail.findByID(id);
    ctx.body = result;
    ctx.status = 200;
  }

  async add() {
    const { ctx, service } = this;
    // 验证提交的参数
    ctx.validate({
        outside_project_id: { type: 'string', required: true },            
    });
    const result = await service.hireprojectdetail.addModel(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }

  async update() {
    const { ctx, service } = this;
    // 验证提交的参数
    ctx.validate({
      id: { type: 'string', required: true },
      outside_project_id: { type: 'string', required: true },      
    });
    const result = await service.hireprojectdetail.updateModel(ctx.request.body);
    ctx.body = result;
    ctx.status = 200;
  }

  async destroy() {
    const { ctx, service } = this;
    ctx.validate({
      id: { type: 'string', required: true },
    });
    const id = ctx.request.body.id;
    const result = await service.hireprojectdetail.destroyModel(id);
    ctx.body = result;
    ctx.status = 200;
  }

}

module.exports = HireProjectDetailController;
