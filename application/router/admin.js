const express = require('express')
const router = express.Router()
const admin = require('../controller/admin');
const cl = require('../controller/admin/cl');

// 管理员的登录
router.post('/admin/login', admin.login);
// 显示验证码
router.get('/yzm', admin.yzm);
// 验证手机号的格式
router.get('/mobileisallow', admin.mobileIsAllow);

router.get('/index', function(req, res){
    res.render('admin/index');
});

router.get('/console', function(req, res){
    res.render('admin/welcome');
})

router.get('/admin-add-class', function(req, res){
    res.render('admin/class-add');
})
router.post('/admin-mod-class', cl.edit);
router.get('/admin-mod-class', cl.mod);
router.post('/admin-add-class', cl.add);
router.get('/admin-class-list', cl.list);
router.post('/admin-del-class', cl.del)


module.exports = router;