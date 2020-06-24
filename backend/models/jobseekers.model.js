const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// `fullname`, `basic_introduction`, `nationality_`, `phone_`, 
// `email`, `password`, `profile_pic`, `resume_id`, `skill_ids`, 
// `dob_`, `gender_`, `address_`, `user_status`
const jobSeekerSchema = new Schema({
    full_name:{type:String,required:true},
    basic_introduction:{type:String},
    profile_pic:{type:String},
    nationality_:{type:String},
    phone_:{type:String},
    email:{type:String,required:true, unique:true},
    pass_code:{type:String,required:true},
    skill_ids:{type:String},
    dob:{type:String},
    gender:{type:String, enum:['Male','Female','Others',''], default:''},
    address:{type:String},
    resumeId:{type:String},

},{
    timestamps:true,  
});
const jobSeeker = mongoose.model('jobSeeker', jobSeekerSchema);
module.exports = jobSeeker;