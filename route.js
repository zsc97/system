const express = require('express')
const router = express.Router()


router.get('/xxx', function(req, res){
    res.sendFile('1.html', {root: __dirname});
})

// router.get('/images/1.jpeg', function(req, res){
//     res.sendFile('images/1.jpeg', {root: __dirname});
// })

// router.get('/images/2.jpeg', function(req, res){
//     res.sendFile('images/2.jpeg', {root: __dirname});
// })




module.exports = router;