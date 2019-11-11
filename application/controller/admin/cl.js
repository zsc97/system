let models = require('../../models/models')
class cls{

    /**
     * 添加班级的操作
     */
    add(req, res){
        try{
            // 数据验证
            let data = req.body;
            if(data.name.length > 20 || data.name.length < 2){
                throw new new Error('1');
            }
            // 开班时间应该小于毕业时间
            if(Date.parse(data.start) >= Date.parse(data.end)){
                throw new new Error('2');
            } 

            if(data.remark.length > 1000){
                throw new new Error('3');
            }
            // todo 手机号的验证。班主任姓名的验证

            data.finish = data.end;
            models.cl.create(data).then((result) => {
                if(result.id){
                    res.send({
                        code: 0,
                        msg: '成功'
                    });
                }
            }).catch(function(err){
                throw new Error('4');
            });




            



            



        }catch(e){
            console.log(e);
            let resData = {};
            switch(e.message){
                case '1': resData = { code: 1, msg: '班级的名称长度应在2-20个字符之间'};break;
                case '2': resData = { code: 2, msg: '请选择正确开班和毕业时间'};break;
                case '3': resData = { code: 3, msg: '班级补充信息最大1000个字符'};break;
                case '4': resData = { code: 4, msg: '数据插入失败'};break;
                default: resData = { code: 10000, msg: '非法操作'};

            }
            res.send(resData);
        }

        
    }


}

module.exports = new cls();