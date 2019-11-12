// 自动注册各个模型到models对象上
const fs = require('fs');
const models = {};

let ms = fs.readdirSync(__dirname);

for (const i of ms) {
    if (i != 'models.js' && i != 'initialize.js') {
        let key = i.substr(0, i.length - 3);
        models[key] = require(__dirname + '/' + i);
    }
}


/**
 * 将传来的sequelize查询返回结果转成数组
 * @param {*} data 
 */

function toArray(data) {
    let newData = [];
    for (const i of data) {
        let tmpObj = {}
        for (const it of Object.keys(i.dataValues)) {
            tmpObj[it] = i[it];
        }
        newData.push(tmpObj);
    }
    return newData;
}
models.toArray = toArray;

/**
 * 将传来的sequelize查询返回结果转成普通对象
 * 如果使用findOne()的结果
 * @param {*} data 
 */
function oneToObj(data) {
    let obj = {}
    for (const it of Object.keys(data.dataValues)) {
        obj[it] = data[it];
    }
    return obj;
}
models.oneToObj = oneToObj;




module.exports = models;

