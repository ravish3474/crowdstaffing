const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestDemoSchema = new Schema({
    company_name:{type:String, unique:true, required:true},
    comp_email:{type:String, unique:true, required:true},
    comp_phone:{type:String, required:true},
    comp_prof:{type:String,required:true}
    
},{
    timestamps:true
})
const requestDemo = mongoose.model('requestDemo',requestDemoSchema)
module.exports = requestDemo;
