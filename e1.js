const express = require('express');
const app = express();

// 参数1：给模板引擎起的名字（和模板文件的后缀名有关）
app.engine('html', require('express-art-template'));
// 配置使用的模板引擎
app.set('view engine', 'html');
// 配置模板文件的存放路径
app.set('views', __dirname + '/views');


app.get('/', function(req, res){
    res.render('1', {name: '二狗子'});
});


app.listen('2000', '127.0.0.1', function(){
    console.log('服务已启动');
})



