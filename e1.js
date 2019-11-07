const express = require('express');

const app = express();

app.get('/', function(req, res){
    // res.send 支持更多数据类型的响应 它会自动的将非字符类型转成字符类型
    // let obj = {name: '二狗子', age: 18, hobby: ['游泳', '游戏']}
    // let obj = ['二狗子', '如花'];
    // res.send(obj);

    // res.sendFile(__dirname + '/1.html');
    // res.sendFile('/1.html', {root: __dirname});
});


app.get('/xxx', function(req, res){
    res.send('帅的被人嫉妒');
})


app.listen('2000', '127.0.0.1', function(){
    console.log('服务已启动');
})



