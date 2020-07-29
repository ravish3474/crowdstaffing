const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// `fullname`, `basic_introduction`, `nationality_`, `phone_`, 
// `email`, `password`, `profile_pic`, `resume_id`, `skill_ids`, 
// `dob_`, `gender_`, `address_`, `user_status`
const jobSeekerSchema = new Schema({
    full_name:{type:String,required:true},
    phone_:{type:String},
    job_title:{type:String},
    email:{type:String,required:true, unique:true},
    pass_code:{type:String,required:true},
    website:{type:String},
    current_sal:{type:String},
    expected_sal:{type:String},
    exp_year:{type:Number},
    exp_month:{type:Number},
    gender:{type:String, enum:['Male','Female','Others',''], default:''},
    education:{type:String},
    dob:{type:String},
    basic_introduction:{type:String},
    profile_pic:{type:String},
    // Social
    facebook_id:{type:String},
    twitter_id:{type:String},
    linked_in_id:{type:String},
    google_plus_id:{type:String},
    // Address
    country_:{type:String},
    city_:{type:String},
    full_address:{type:String},
    lat_:{type:String},
    long_:{type:String},
    resumeId:{type:String},

},{
    timestamps:true,  
});
const jobSeeker = mongoose.model('jobSeeker', jobSeekerSchema);
module.exports = jobSeeker;