

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const companySchema = new Schema({
    company_name:{type:String, unique:true, required:true},
    comp_email:{type:String, unique:true, required:true},
    comp_password:{type:String, required:true},
    comp_phone:{type:String, default:'NA'},
    comp_website:{type:String, default:'NA'},
    comp_establishment_year:{type:Number, default:0},
    team_size:{type:String, default:'NA'},
    comp_description:{type:String, default:'NA'},
    // Social
    facebook_id:{type:String, default:'NA'},
    twitter_id:{type:String, default:'NA'},
    linked_in_id:{type:String, default:'NA'},
    google_plus_id:{type:String, default:'NA'},
    // Address
    country_:{type:String, default:'NA'},
    city_:{type:String, default:'NA'},
    full_address:{type:String, default:'NA'},
    lat_:{type:String, default:'NA'},
    long_:{type:String, default:'NA'},
    

},{
    timestamps:true
})


const Company = mongoose.model('Company', companySchema);
module.exports = Company;