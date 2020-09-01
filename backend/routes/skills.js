const router = require('express').Router();
const skills= require('../models/skills.model');
// const Ski/ll = require('../models/skills.model');
router.route('/').get((req, res)=>{
    skills.find()
            .then(skill => res.json({'code':1,'skill':skill}))
            .catch(err => res.json({'code':0,'msg':err}));
});
router.route('/add').post((req, res)=>{
    const skill_name= req.body.skill_name;
    const newSkill = new skills({skill_name});
    newSkill.save()
        .then(()=>res.json({'code':1,'msg':"Added Successfully"}))
        .catch(err=>res.json({'code':0,'msg':err}));
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
        .then(()=>res.json({'code':1,'msg':"Deleted Successfully"}))
        .catch(err => res.json({'code':0,'msg':err}));
})
module.exports = router;