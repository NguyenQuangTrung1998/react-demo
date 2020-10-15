var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    name:String,
    image:String,
    color:String,
    price:String,
});
var product = mongoose.model('product',productSchema,'products');
module.exports = product;