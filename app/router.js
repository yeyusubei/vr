'use strict';

// 路由
module.exports = app => {
  const { router, controller } = app;
  app.get('/', app.controller.home.index);
  app.get('/demo', app.controller.home.demo);
  // 登录接口
  router.post('/login/login', controller.login.login);
  // 根据手机号发送验证码
  //router.post('/login/sendCode', controller.login.sendCode);
  // // 手机号码注册用户
  // router.post('/login/regWithPhone', controller.login.regWithPhone);
  // // 根据手机号码登录
  // router.post('/login/LoginByPhone', controller.login.LoginByPhone);
  // 邮箱注册用户
  router.post('/login/regWithEmail', controller.login.regWithEmail);
  // 根据邮箱登录
  router.post('/login/LoginByEmail', controller.login.LoginByEmail);
  // 用户名注册用户
  router.post('/login/regUser', controller.login.regUser);
  // 用户根据用户名登录
  router.post('/login/LoginByName', controller.login.LoginByName);
  // // 根据手机号码找回密码
  // router.post('/login/findPasswordByPhone', controller.login.findPasswordByPhone);
  // // 根据手机号码设置新密码
  // router.post('/login/newPasswordByPhone', controller.login.setPasswordWithPhone);

  // 用户的路由信息
  router.get('/user/list', controller.user.list);
  router.get('/user/info', controller.user.userInfo);
  router.get('/user/listByPage', controller.user.getListWithPage);
  router.get('/user/getUserById', controller.user.find);
  router.post('/user/add', controller.user.add);
  router.post('/user/update', controller.user.update);
  router.post('/user/delete', controller.user.destroy);

//分类信息表
router.get('/categories/list',controller.categories.list);
router.get('/categories/getById', controller.categories.find);
router.post('/categories/add', controller.categories.add);
router.post('/categories/update', controller.categories.update);
router.post('/categories/delete', controller.categories.destroy);

//资讯信息表
router.get('/infos/list',controller.infos.list);
router.get('/infos/getById', controller.infos.find);
router.get('/infos/getByCateId', controller.infos.findBycate);
router.post('/infos/add', controller.infos.add);
router.post('/infos/update', controller.infos.update);
router.post('/infos/delete', controller.infos.destroy);
router.get('/infos/listByPage', controller.infos.getListWithPage);

 // 卖家路由信息
 router.get('/seller/list', controller.seller.list);
 router.get('/seller/listByPage', controller.seller.getListWithPage);
 router.get('/seller/getUserById', controller.seller.find);
 router.post('/seller/add', controller.seller.add);
 router.post('/seller/update', controller.seller.update);
 router.post('/seller/delete', controller.seller.destroy);

 //图书分类
 router.get('/bookcategories/list',controller.bookcategories.list);
 router.get('/bookcategories/getById', controller.bookcategories.find);
 router.post('/bookcategories/add', controller.bookcategories.add);
 router.post('/bookcategories/update', controller.bookcategories.update);
 router.post('/bookcategories/delete', controller.bookcategories.destroy);

//图书信息表
router.get('/bookitems/list',controller.bookitems.list);
router.get('/bookitems/getById', controller.bookitems.find);
router.post('/bookitems/add', controller.bookitems.add);
router.post('/bookitems/update', controller.bookitems.update);
router.post('/bookitems/delete', controller.bookitems.destroy);

//企业表
router.get('/hirecompanies/list',controller.hirecompanies.list);
router.get('/hirecompanies/getById', controller.hirecompanies.find);
router.post('/hirecompanies/add', controller.hirecompanies.add);
router.post('/hirecompanies/update', controller.hirecompanies.update);
router.post('/hirecompanies/delete', controller.hirecompanies.destroy);

//职位列表
router.get('/hirejobs/list',controller.hirejobs.list);
router.get('/hirejobs/getById', controller.hirejobs.find);
router.post('/hirejobs/add', controller.hirejobs.add);
router.post('/hirejobs/update', controller.hirejobs.update);
router.post('/hirejobs/delete', controller.hirejobs.destroy);

//外包项目
router.get('/hireoutsideprojects/list',controller.hireoutsideprojects.list);
router.get('/hireoutsideprojects/getById', controller.hireoutsideprojects.find);
router.post('/hireoutsideprojects/add', controller.hireoutsideprojects.add);
router.post('/hireoutsideprojects/update', controller.hireoutsideprojects.update);
router.post('/hireoutsideprojects/delete', controller.hireoutsideprojects.destroy);

  // 单文件上传
  router.post('/goods/singleUpload', controller.upload.fileSingleUpload);
  router.post('/goods/multipleUpload', controller.upload.MultipleUpload);


  // 首页轮播图路由
  router.get('/banner/list', controller.banner.list);
  router.get('/banner/getModelById', controller.banner.find);
  router.post('/banner/add', controller.banner.add);
  router.post('/banner/update', controller.banner.update);
  router.post('/banner/delete', controller.banner.destroy);

//首页广告
router.get('/homeads/list', controller.homeads.list);
router.get('/homeads/getModelById', controller.homeads.find);
router.post('/homeads/add', controller.homeads.add);
router.post('/homeads/update', controller.homeads.update);
router.post('/homeads/delete', controller.homeads.destroy);



};
