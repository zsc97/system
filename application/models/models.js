// 自动注册各个模型到models对象上
const fs = require('fs');
const models = {};

let ms = fs.readdirSync(__dirname);

for (const i of ms) {
    if(i != 'models.js' && i != 'initialize.js'){
        let key = i.substr(0, i.length - 3);
        models[key] = require(__dirname + '/' + i);
    }
}

module.exports = models;

