const router = require('express').Router();
const skills= require('../models/skills.model');
// const Ski/ll = require('../models/skills.model');
router.route('/').get((req, res)=>{
    skills.find()
            .then(skill => res.json(skill))
            .catch(err => res.json(err));
});
router.route('/add').post((req, res)=>{
    const skill_name= req.body.skill_name;
    const newSkill = new Skill({skill_name});
    newSkill.save()
        .then(()=>res.json("Added Successfully"))
        .catch(err=>res.json("Error: "+err));
});
router.route('/updateSkill/:id').post((req,res)=>{
    skills.findById(req.params.id)
        .then(
            dataToUpdate =>{
                dataToUpdate.skill_name = req.body.skill_name;
                dataToUpdate.save()
                    .then(()=>res.json('Skill Updated'))
                    .catch(err => res.json('Error: '+err));
            }
        ).catch(err => res.json('Error: '+err));
});
router.route('/deleteSkill/:id').delete((req,res)=>{
    skills.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Skill Deleted Successfully.'))
        .catch(err => res.json('Error : '+err));
})
module.exports = router;