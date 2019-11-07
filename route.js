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




module.exports = router;