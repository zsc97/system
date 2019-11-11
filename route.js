const express = require('express')
const router = express.Router()

// 管理员的登录
router.post('/admin/login', function (req, res) {
    try {
        // if (req.session.captcha == undefined) {
        //     throw Error('2');
        // }
        // if (req.session.captcha != req.body.yzm.toLowerCase()) {
        //     throw Error('1');
        // }

        // res.send(req.body);
        // 验证码验证通过， 根据用户提交的数据，到数据库中查找
        let Admin = require('./models/admin');
        // Admin.findOne({
        //     where: {mobile: req.body.mobile}
        // }).then((result)=>{
        //     if(result == null){
        //         // throw Error('3');
        //         // console.log(11111);
        //     }else{
        //         // console.log(2222);
        //     }
        // })

        (async () => {
            let result = await Admin.findOne({ where: { mobile: req.body.mobile } });
            if (result == null) {
                res.send({ code: 3, msg: '您输入的用户名有误' })
            } else {
                if(result.password != req.body.password){
                    res.send({ code: 3, msg: '您输入的密码有误' })
                }else{
                    // 用户名和密码全部验证通过
                    req.session.userLogin = result;
                    // res.redirect('/html/test.html');
                    res.send({ code: 0, msg: '登录成功' })
                }
            }
        })()
    } catch (e) {
        console.log(e);
        let data = {};
        switch (e.message) {
            case '1': data = { code: 1, msg: '验证码有误' }; break;
            case '2': data = { code: 2, msg: '验证码已过期，请刷新后重试！' }; break;
            case '3': data = { code: 3, msg: '您输入的用户名有误' }; break;
        }
        res.send(data);
    }
});

router.get('/yzm', function (req, res) {
    var svgCaptcha = require('svg-captcha');
    var captcha = svgCaptcha.create({
        noise: 5,
        ignoreChars: '0o1i',
    });
    // 将验证码中的字符存放到session中
    // console.log(captcha);
    req.session.captcha = captcha.text.toLowerCase();
    res.type('svg');
    res.send(captcha.data);
})

router.get('/mobileisallow', function (req, res) {
    //验证手机号的格式
    let mobileReg = /^1[357689]\d{9}$/
    res.send(mobileReg.test(req.query.mobile));
});

// 学生的登录
router.get('/login', function (req, res) {
    // console.log(req.session);
    // console.log(Math.random());
});


// router.get('/xxx', function(req, res){
//     let age = Math.floor(Math.random() * 100);
//     let obj = {name: '二狗子', age: age, xxx: req.query.hobby};
//     setTimeout(() => {
//         res.send(obj)
//     }, 2000);
// })

// router.get('/yyy', function(req, res){
//     let age = req.query.age;
//     console.log(age);
//     if(age > 18){
//         res.send(['您老了'])
//     }else{
//         res.send(['您还年轻']);
//     }
// })



module.exports = router;