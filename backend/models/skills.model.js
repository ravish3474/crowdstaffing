

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const skillSchema = new Schema({
    skill_name:{type:String, unique:true, required:true},
},{
    timestamps:true,
})
const Skill = mongoose.model('Skills',skillSchema);
module.exports = Skill;