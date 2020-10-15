var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    email:String,
    name:String,
    phoneNumber:String,
    password:String
});
var user = mongoose.model('user',userSchema,'users');
module.exports=user;