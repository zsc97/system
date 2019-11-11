// // var a = 0;

// // setTimeout(() => {
// //     a = 123;
// //     xxx(a);
// // }, 1000);
// // // console.log(2222);

// // let b = 100;

// // function xxx(c){
// //     console.log(c + b);
// // }


// // console.log(a + b);

// const events = require('events');

// let e1 = new events.EventEmitter();


// e1.on('xxxx', function(x) {
//     console.log('监听器开始处理');
//     console.log(x);
// });

// console.log(11111);

// // e1.emit('xxxx');

// setTimeout(() => {
//     console.log(2222);
//     e1.emit('xxxx', 9999);
//     console.log(3333);
// }, 1000);

// const fs = require('fs');

// let p1 = new Promise(function(success, error){
//     // 逻辑代码
//     let x = Math.random() * 100;

//     if(x > 50){
//         success(x);
//     }else{
//         error(x);
//     }
// })

// then中可以有两个参数
// 第一个参数表示Promise实例成功时执行的回调函数
// 第一个参数表示Promise实例失败时执行的回调函数
// p1.then(
//     function(data){
//         console.log('成功', data);
//     }, 
//     function(data){
//         console.log('失败', data);
//     }
// )

// then中可以只传一个参数, 表示成功时的回调函数
// 可以使用.catch() 来捕获错误并执行
// p1.then(
//     function(data){
//         console.log('成功', data);
//     }
// ).catch(function(xx){
//     console.log('xxxx', xx);
// })

// const fs = require('fs');
// let p2 = new Promise((success, error) =>{
//     fs.readFile('./1.tex', 'utf-8', function(err, data){
//         if(err){
//             error(err);
//         }else{
//             success(data);
//         }
//     })
// })


// p2.then(function(data){
//     data += '*'.repeat(3);
//     // 如果在then中的回调函数中有return值，则返回值会被下一个then中的函数接收到
//     return data;
// }).then(function(xx){
//     // 如果返回的是一个Promise对象，则可以在下一个then中传入其成和失败的回调函数
//     return new Promise(function(success, error){
//         fs.writeFile('2.tex', xx, function(err){
//             if(err){
//                 error(err);
//             }else{
//                 success(xx.length);
//             }
//         })
//     });
// }).then(
//     function(yy){
//         let data = '数据写入成功，共写入'+ yy + '个字符'
//         fs.writeFile('3.tex', data, function(err){
            
//         })
//     },
//     function(yy){
//         console.log(yy);
//     }
// )


// const models = require('./test/db2');

// models.User.create({
//     username: '如花',
//     password: '8888888'
// }).then(function(result){
//     console.log(result);
// })

// let config = require('./test/models/config');

// require('./models/admin');

let models = require('./application/models/models');

// models.admin.findAll().then((data)=>{
//     console.log(data);
// })
// models.student.findAll().then((data)=>{
//     console.log(data);
// })

// let student = require('./application/models/student')
// student.create({
//     cls_id: 21,
//     mobile: '13566779899',
//     sex: 1,
//     id_card: '41112234325366',
//     dorm: 1
// }).then((data)=>{
//     console.log(data);
// })

// models.Admin.findOne();
// models.User.findOne();





