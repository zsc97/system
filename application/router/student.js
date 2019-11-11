const express = require('express')
const router = express.Router()
const student = require('../controller/student');

// 学生的登录
router.get('/login', student.login);


module.exports = router;