// 引入模块
const Sequelize = require('sequelize');

// 得到实例对象
// 数据库名称、账号、密码
const sequelize = new Sequelize('JW', 'node', '123456', {
    host: '192.168.101.100',
    //   数据库的类型
    dialect: 'mysql'
});

const Model = Sequelize.Model;
class Admin extends Model {

}

// 定义我们的模型
Admin.init({
    // 对象的属性 （对应着的是数据库里的字段）
    mobile: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    // 连接对象
    sequelize,
    // 模型的名称(数据库中的数据表会根据本配置项的复数创建表名)
    modelName: 'admin'
    // 参数
});

if(module.id == '.'){
    // 当前模块被直接使用的时候
    Admin.sync({force: true});
}else{
    // 当前模块被其它模块引用的时候
    module.exports = Admin;
}