const {Sequelize, sequelize} = require('./initialize');

const Model = Sequelize.Model;
class cl extends Model {

}

// 定义我们的模型
cl.init({
    // 对象的属性 （对应着的是数据库里的字段）
    name: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    start: {
        type: Sequelize.DATE,
        allowNull: false
    },
    end:{
        type: Sequelize.DATE,
        allowNull: false
    },
    finish:{
        type: Sequelize.DATE,
        allowNull: false
    },
    master: {
        type: Sequelize.STRING(4),
        allowNull: false
    },
    remark: {
        type: Sequelize.STRING(1000),
        allowNull: false
    },
    // 班主任的手机号
    mobile: {
        type: Sequelize.STRING(11),
        allowNull: false
    }
}, {
    // 连接对象
    sequelize,
    // 模型的名称(数据库中的数据表会根据本配置项的复数创建表名)
    modelName: 'cl',
    // 参数
    // 不自动维护createdAt和updatedAt
    timestamps: false
});

if(module.id == '.'){
    // 当前模块被直接使用的时候
    cl.sync({force: true});
}else{
    // 当前模块被其它模块引用的时候
    module.exports = cl;
}