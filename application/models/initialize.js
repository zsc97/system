// 引入模块
const Sequelize = require('sequelize');

let config = {
    name: 'JW',
    username: 'node',
    password: '123456',
    host: '192.168.101.100',
    type: 'mysql'
}


// 得到实例对象
// 数据库名称、账号、密码
const sequelize = new Sequelize(config.name, config.username, config.password, {
    host: config.host,
    //   数据库的类型
    dialect: config.type,
    dialectOptions:{
        // 对于时间类型的数据，重新格式化
        dateStrings: true,
        typeCast(field, next) {
            if (field.type === "DATETIME") {
              return field.string();
            }
            return next();
        }
    }
});

module.exports = {
    Sequelize,
    sequelize,
    config
}