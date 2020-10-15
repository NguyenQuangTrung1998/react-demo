const userModel = require('../models/user-model');
module.exports.login = async (req,res)=>{

}
module.exports.postLogin= async (req,res)=>{
    var email = req.body.email;
    const user = await userModel.findOne({email:email})
    if(!req.body.email || !req.body.password){
        res.send({
            errors:['hãy nhập đầy đủ thông tin'],
            values:req.body
        })
    }
    if(!user){
        res.send({
            errors:['tài khoản không tồn tại'],
            values:req.body
        })
    }
    if(user.password!==req.body.password){
        res.send({
            errors:['mật khẩu sai'],
            values:req.body
        })
    }
    
}