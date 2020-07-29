

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const companySchema = new Schema({
    company_name:{type:String, unique:true, required:true},
    comp_email:{type:String, unique:true, required:true},
    comp_password:{type:String, required:true},
    comp_phone:{type:String},
    comp_website:{type:String},
    comp_establishment_year:{type:Number},
    team_size:{type:String},
    comp_description:{type:String},
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
    

},{
    timestamps:true
})


const Company = mongoose.model('Company', companySchema);
module.exports = Company;