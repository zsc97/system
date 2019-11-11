// 引入模块
const Sequelize = require('sequelize');

// 得到实例对象
// 数据库名称、账号、密码
const sequelize = new Sequelize('SS', 'root', '123456', {
    host: '127.0.0.1',
    //   数据库的类型
    dialect: 'mysql'
});

const Model = Sequelize.Model;
class User extends Model {

}

// 定义我们的模型
User.init({
    // 对象的属性 （对应着的是数据库里的字段）
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    // 连接对象
    sequelize,
    // 模型的名称(数据库中的数据表会根据本配置项的复数创建表名)
    modelName: 'student'
    // 参数
});

// 表示将User模型和数据库的表结构进行同步
// User.sync();