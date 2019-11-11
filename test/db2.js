// 引入模块
const Sequelize = require('sequelize');

// 得到实例对象
// 数据库名称、账号、密码
const sequelize = new Sequelize('SS', 'root', '123456', {
  host: '127.0.0.1',
  //   数据库的类型
  dialect: 'mysql'
});

// 直接使用连接实例对象进行模型的创建
const User = sequelize.define('user', {
  // 属性
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  }
}, {
  // 额外参数
});

const Student = sequelize.define('student', {
  // 属性
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  sex: {
    type: Sequelize.STRING(2)
  }
}, {
  // 额外参数
});



//   User.sync({ force: true });
//   Student.sync();

// 直接使用连接实例可以将设置的模型全部同步到数据库中
// sequelize.sync();


module.exports = {
  User,
  Student
}