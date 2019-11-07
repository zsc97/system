const express = require('express');
const app = express();
const route = require('./route');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cookieParser());
app.use(session({
    secret: 'shusheng',
    // name: 'ss'
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.urlencoded({extended: false}));
// 注册路由中间件
app.use(route);

// 注册静态资源中间件 管理静态资源
app.use('/static', express.static('./static'));
app.use('/html', express.static('./html'));

// 参数1：给模板引擎起的名字（和模板文件的后缀名有关）
app.engine('html', require('express-art-template'));
// 配置使用的模板引擎
app.set('view engine', 'html');
// 配置模板文件的存放路径
app.set('views', __dirname + '/views');

app.listen('2000', '127.0.0.1', function(){
    console.log('服务已启动');
})



