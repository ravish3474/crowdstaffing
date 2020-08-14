const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobApplySchema = new Schema({
    job_post_id:{type:String, required: true},
    job_seeker_id:{type:Object, required:true},
    
},{
    timestamps:true
})
const jobApply = mongoose.model('jobApply',jobApplySchema)
module.exports = jobApply;
