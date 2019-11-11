const express = require('express')
const router = express.Router()
const admin = require('../controller/admin');

// 管理员的登录
router.post('/admin/login', admin.login);
// 显示验证码
router.get('/yzm', admin.yzm);
// 验证手机号的格式
router.get('/mobileisallow', admin.mobileIsAllow);



module.exports = router;