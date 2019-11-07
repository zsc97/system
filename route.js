const express = require('express')
const router = express.Router()
const fs = require('fs');
const mime = require('mime');

const multer = require('multer')

// let storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now() + '.' + mime.getExtension(file.mimetype))
//     }
//   })

// let upload = multer({
//     storage: storage,
//     limits:{
//         fileSize: 50*1024
//     },
    // fileFilter: function(req, file, cb){
    //     if(file.mimetype == 'image/jpeg'){
    //         cb(null, true);
    //     }else{
    //         cb(null, false);
    //     }
    // }
// });
// let upload = multer({dest: 'uploads/'});

router.get('/xxx', function (req, res) {
    // res.sendFile('1.html', {root: __dirname});
    res.send('');
});

router.get('/adduser', function (req, res) {
    // 如果是GET请求，使用的事querystring方法传递参数，只需要用req.query获取就行了
    res.send(req.query);
});

router.post('/adduser', function (req, res) {
    res.send(req.body);
});

//  参数路由
router.get('/yyy/:id/:name', function (req, res) {
    res.send(req.params);
});

router.get('/555', function (req, res) {
    // res.cookie('name', '二狗子', {httpOnly: true, maxAge: 500000});
    // res.clearCookie('name');
    // req.session.xxxx = '111111';
    req.session.destroy(function () {
        res.redirect('http://www.baidu.com');
    });
    // res.send('555');
})

router.get('/666', function (req, res) {
    // res.send(req.headers.cookie);
    // res.send(req.cookies);
    let xx = req.session.xxxx;
    res.send(xx);
})



// router.post('/uploadfile', upload.single('xx'), function(req, res, next){
//     let tmpPath = __dirname + '/' + req.file.path;
//     fs.rename(tmpPath, tmpPath + '.' + mime.getExtension(req.file.mimetype), function(){

//     });
// })


// router.post('/uploadfile', upload.single('xx'), function(req, res, next){
//     console.log(req.file);
// })

var upload = multer({
    dest: 'uploads/',
    limits: {
        fileSize: 50 * 1024
    },
    fileFilter: function(req, file, cb){
        if(file.mimetype == 'image/png'){
            cb(null, true);
        }else{
            cb(new multer.MulterError(1, 2, 3, 4));
        }
    }
}).single('xx');

router.post('/uploadfile', function (req, res) {
    upload(req, res, function (err) {
        console.log(err);
        if (err instanceof multer.MulterError) {
            // 发生错误
        } else if (err) {
            // 发生错误
        }

        // 一切都好
    })
})

// router.post('/uploadfile', upload.array('xx'), function(req, res, next){
//     console.log(req.files);
// })

// router.post('/uploadfile', upload.fields([{name:'xx'}, {name:'zz'}]), function(req, res, next){
//     console.log(req.files);
// })





module.exports = router;