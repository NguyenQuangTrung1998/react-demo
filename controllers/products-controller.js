var productModel = require('../models/products-model');
module.exports.index= async function(req,res){
  var product = await productModel.find();
  res.send(product);
  }