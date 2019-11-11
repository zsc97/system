const { Sequelize, sequelize } = require('./init');

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

  module.exports = Student;