const mongoose = require('mongoose');
const Schema = mongoose.Schema;


resumeSchema= new Schema({
    resume_path:{type:String,unique:true},
},{
    timestamps:true,
})

const resume = mongoose.model('resume', resumeSchema);
module.exports = resume;