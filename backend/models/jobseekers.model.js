const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// `fullname`, `basic_introduction`, `nationality_`, `phone_`, 
// `email`, `password`, `profile_pic`, `resume_id`, `skill_ids`, 
// `dob_`, `gender_`, `address_`, `user_status`
const jobSeekerSchema = new Schema({
    full_name:{type:String,required:true},
    phone_:{type:String, default:'NA'},
    job_title:{type:String, default:'NA'},
    email:{type:String,required:true, unique:true},
    pass_code:{type:String,required:true},
    website:{type:String, default:'NA'},
    current_sal:{type:String, default:'NA'},
    expected_sal:{type:String, default:'NA'},
    exp_year:{type:Number, default:0},
    exp_month:{type:Number, default:0},
    gender:{type:String, enum:['Male','Female','Others',''], default:'NA'},
    education:{type:String, default:'NA'},
    dob:{type:String, default:'NA'},
    basic_introduction:{type:String, default:'NA'},
    profile_pic:{type:String, default:'NA'},
    // Social
    website:{type:String, default:'NA'},
    facebook_id:{type:String, default:'NA'},
    twitter_id:{type:String, default:'NA'},
    linked_in_id:{type:String, default:'NA'},
    google_plus_id:{type:String, default:'NA'},
    // Address
    country_:{type:String, default:'NA'},
    state_:{type:String, default:'NA'},
    city_:{type:String, default:'NA'},
    full_address:{type:String, default:'NA'},
    lat_:{type:String, default:'NA'},
    long_:{type:String, default:'NA'},
    resumeId:{type:String, default:'NA'},

},{
    timestamps:true,  
});
const jobSeeker = mongoose.model('jobSeeker', jobSeekerSchema);
module.exports = jobSeeker;