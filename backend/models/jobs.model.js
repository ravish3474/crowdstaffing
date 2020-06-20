const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobSchema = new Schema({
    job_title:{type:String,required:true},
    job_desc:{type:String,required:true},
    added_on:{type:Date, required:true},
},{
    timestamps:true,  
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job ;