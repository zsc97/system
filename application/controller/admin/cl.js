let models = require('../../models/models');
class cls{

    /**
     * 添加班级的操作
     */
    add(req, res){
        try{
            // 数据验证
            let data = req.body;
            if(data.name.length > 20 || data.name.length < 2){
                throw new Error('1');
            }
            // 开班时间应该小于毕业时间
            if(Date.parse(data.start) >= Date.parse(data.end)){
                throw new Error('2');
            } 

            if(data.remark.length > 1000){
                throw new Error('3');
            }
            // todo 手机号的验证。班主任姓名的验证
            // todo 班级名称不能重复
            data.finish = data.end;
            models.cl.create(data)
            .then((result) => {
                if(result.id){
                    res.send({
                        code: 0,
                        msg: '成功'
                    });
                }
            })
            .catch(function(err){
                res.send({
                    code: 4,
                    msg: '遇到未知错误，请联系系统管理员'
                });
            });
        }catch(e){
            // console.log(e);
            let resData = {};
            switch(e.message){
                case '1': resData = { code: 1, msg: '班级的名称长度应在2-20个字符之间'};break;
                case '2': resData = { code: 2, msg: '请选择正确开班和毕业时间'};break;
                case '3': resData = { code: 3, msg: '班级补充信息最大1000个字符'};break;
                default: resData = { code: 10000, msg: '非法操作'};
            }
            res.send(resData);
        }

        
    }

    list(req, res){
        // 当前页
        let page = req.query.page;
        page = page ? page : 1;
        let pageSize = 2; 
        models.cl.findAndCountAll({
            offset:(page - 1) * pageSize,
            limit:pageSize,
            order:[
                ['id', 'DESC']
            ]
        }).then(function(data){
            let pageNum = data.count % pageSize ? Math.ceil(data.count / pageSize) : data.count / pageSize;
            res.render('admin/class-list', {list: models.toArray(data.rows), pageNum, page});
            
        })
        // models.cl.findAll().then(function(data){
        //     res.render('admin/class-list', {list: models.toArray(data)});
        // })
    }

    del(req, res){
        
        try{
            let id = req.body.id;
            if(!id){
                res.send({ code: 1, msg: '参数有误'});
                return ;
            }
            // todo  如果后台用户有等级分的时候，还要验证是否有权限删除

            models.cl.destroy({
                where: {
                    id: id
                }
            }).then(data => {
                if(data){
                    res.send({ code: 0, msg: '删除成功' });
                }else{
                    res.send({ code: 2, msg: '删除失败' });
                }
            })
        }catch(e){  
            res.send({ code: 10000, msg: '非法操作'});
        }
    }

    mod(req, res){
        // 班级id
        let id = req.query.id;
        models.cl.findOne({
            where: {
                id: id
            }
        }).then(data =>{
            res.render('admin/class-mod', {obj: models.oneToObj(data)});
        })
    }

    edit(req, res){
        // todo 各种数据验证
        // 第一个参数是要修改的数据
        // 第二个参数是一些子语句等一些查询配置信息

        models.cl.findOne({
            where: {
                id: req.body.id
            }
        })
        .then(function(obj){
            for (const i in req.body) {
                obj[i] = req.body[i];
            }
            return obj.save()
        })
        .then(data => {
            res.send({code: 0, msg: '操作成功'});
        }).catch(err=>{
            res.send({code: 2, msg: '修改失败'});
        })

        // models.cl.update(req.body, {
        //     where: {
        //         id: req.body.id
        //     }
        // }).then(data=>{
        //     console.log(data);
        // }).catch(err => {
        //     console.log(err);
        //     res.send({code: 2, msg: err.message});
        // })
        
    }
}

module.exports = new cls();