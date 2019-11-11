// 引入模块
const Sequelize = require('sequelize');
const config = require('./config');

// 得到实例对象
// 数据库名称、账号、密码
const sequelize = new Sequelize(config.name, config.username, config.password, {
  host: config.host,
  //   数据库的类型
  dialect: config.type
});

module.exports = {
    Sequelize,
    sequelize,
    config
}