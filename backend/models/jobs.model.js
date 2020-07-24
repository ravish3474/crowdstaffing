const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobSchema = new Schema({
    job_title:{type:String,required:true},
    job_desc:{type:String,required:true},
    last_date:{type:String, required:true},
    comapany_id:{type:String, required:true},
    job_type:{type:String, required:true},
    specialism:{type:String, required:true},
    min_sal:{type:String,required:true },
    max_sal:{type:String, required:true},
    min_exp:{type:String, required:true},
    max_exp:{type:String, required:true},
    gender:{type:String, required:true},
    job_category:{type:String,required:true},
    qualification:{type:String,required:true},
    add_country:{type:String, required:true},
    add_state:{type:String,required:true},
    add_city:{type:String, required:true},
    full_address:{type:String, required:true},
    lat:{type:String, required:true},
    long:{type:String, required:true},
    
},{
    timestamps:true,  
});

const Job = mongoose.model('Job', jobSchema);
module.exports = Job ;