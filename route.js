const express = require('express')
const router = express.Router()


router.get('/xxx', function(req, res){
    // res.sendFile('1.html', {root: __dirname});
    res.send('');
});

router.get('/adduser', function(req, res){
    // 如果是GET请求，使用的事querystring方法传递参数，只需要用req.query获取就行了
    res.send(req.query);
});

router.post('/adduser', function(req, res){
    res.send(req.body);
});

//  参数路由
router.get('/yyy/:id/:name', function(req, res){
    res.send(req.params);
});

router.get('/555', function(req, res){
    // res.cookie('name', '二狗子', {httpOnly: true, maxAge: 500000});
    // res.clearCookie('name');
    // req.session.xxxx = '111111';
    req.session.destroy(function(){
        res.redirect('http://www.baidu.com');
    });
    // res.send('555');
})

router.get('/666', function(req, res){
    // res.send(req.headers.cookie);
    // res.send(req.cookies);
    let xx = req.session.xxxx;
    res.send(xx);
})



module.exports = router;