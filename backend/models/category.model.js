const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchecma= new Schema({
    categoryName:{type:String, required:true, unique:true},
    categoryImage:{type:String}
},{
    timestamps:true,
});

const category = mongoose.model('category', categorySchecma);
module.exports = category;

