const express = require('express')
const router = express.Router()

// 管理员的登录
router.post('/admin/login', function(req, res){
    try{
        if(req.session.captcha == undefined){
            throw Error('2');
        }
        if(req.session.captcha != req.body.yzm.toLowerCase()){
            throw Error('1');
        }
    }catch(e){
        let data = {};
        switch(e.message){
            case '1': data = {code:1, msg: '验证码有误'}; break;
            case '2': data = {code:2, msg: '验证码已过期，请刷新后重试！'}; break;
        }
        res.send(data);
    }
});

router.get('/yzm', function(req, res){
    var svgCaptcha = require('svg-captcha');
    var captcha = svgCaptcha.create({
        noise: 5,
        ignoreChars: '0o1i',
    });
    // 将验证码中的字符存放到session中
    console.log(captcha);
    req.session.captcha = captcha.text.toLowerCase();
    res.type('svg');
    res.send(captcha.data);
})

router.get('/mobileisallow', function(req, res){
    //验证手机号的格式
    let mobileReg = /^1[357689]\d{9}$/
    res.send(mobileReg.test(req.query.mobile));
});

// 学生的登录
router.get('/login', function(req, res){
    // console.log(req.session);
    // console.log(Math.random());
});



module.exports = router;