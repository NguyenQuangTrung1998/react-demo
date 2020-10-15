const userModel = require('../models/user-model');
module.exports.create = (req,res)=>{
   userModel.create(req.body,function(err,created){
       if(err){
           return err;
       }
       
       console.log("created");
   });

}