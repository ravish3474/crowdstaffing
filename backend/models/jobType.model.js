

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobTypeSchema = new Schema({
    type_name:{type:String,unique:true, required:true},
},{
    timestamps:true,
});

const JobType = mongoose.model('JobType',jobTypeSchema);
module.exports = JobType;