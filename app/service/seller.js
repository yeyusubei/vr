'use strict';

const Service = require('egg').Service;

class SellerService extends Service {

  // 获取所有用户列表
  async getList() {
    const result = await this.app.mysql.select('book_sellers', {
      orders: [[ 'id', 'desc' ]], // 排序方式
    });
    return { data: result };
  }

  // 分页获取数据
  async getListWithPage(page, pageSize, username) {
    let result = null;
    const limit = parseInt(pageSize);
    const offset = (parseInt(page) - 1) * limit;
    // 获取总条数
    const count = await this.app.mysql.query('SELECT count(id) as totalCount FROM book_sellers');
    // 根据用户名模糊搜索
    if (username) {
      const sql = " select * from book_sellers where seller_name like '%" + username + "%' limit " + offset + ',' + limit;
      result = await this.app.mysql.query(sql);
    } else {
      result = await this.app.mysql.select('book_sellers', {
        orders: [[ 'id', 'desc' ]], // 排序方式
        limit, // 返回数据量
        offset, // 数据偏移量
      });
    }
    return { count: count.length > 0 ? count[0].totalCount : 0, msg: '', code: '', data: result };
  }

  // 根据用户id查询数据
  async findByID(userId) {
    const result = await this.app.mysql.get('book_sellers', { id: userId });
    return { data: result };
  }

  // 新增的数据
  async addModel(data) {
    const { ctx, app } = this;
   // data.createtime = ctx.helper.currentDateTime();
    // 新增数据
    const result = await app.mysql.insert('book_sellers', data);
    return {
      insertId: result.insertId, // 添加返回的ID
      error_code: result.affectedRows > 0 ? 0 : 1,
      msg: result.affectedRows > 0 ? '添加成功' : '添加失败',
    };
  }

  async updateModel(data) {
    // 修改数据，将会根据主键 ID 查找，并更新
    const { ctx, app } = this;
   // data.createtime = ctx.helper.currentDateTime();
    const result = await app.mysql.update('book_sellers', data);
    return {
      error_code: result.affectedRows > 0 ? 0 : 1,
      msg: result.affectedRows > 0 ? '修改成功' : '修改失败',
    };
  }

  // 根据id删除数据
  async destroyModel(userId) {
    const result = await this.app.mysql.delete('book_sellers', { id: userId });
    return {
      error_code: result.affectedRows > 0 ? 0 : 1,
      msg: result.affectedRows > 0 ? '删除成功' : '删除失败',
    };
  }

}

module.exports = SellerService;
