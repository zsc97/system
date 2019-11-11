const {Sequelize, sequelize} = require('./initialize');

const Model = Sequelize.Model;
class student extends Model {

}

// 定义我们的模型
student.init({
    // 对象的属性 （对应着的是数据库里的字段）
    cls_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    mobile: {
        type: Sequelize.STRING(11),
        allowNull: false
    },
    sex:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_card:{
        type: Sequelize.STRING(18),
        allowNull: false
    },
    dorm: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    // 连接对象
    sequelize,
    // 模型的名称(数据库中的数据表会根据本配置项的复数创建表名)
    modelName: 'student',
    // 参数
    // 不自动维护createdAt和updatedAt
    timestamps: false
});

if(module.id == '.'){
    // 当前模块被直接使用的时候
    student.sync({force: true});
}else{
    // 当前模块被其它模块引用的时候
    module.exports = student;
}