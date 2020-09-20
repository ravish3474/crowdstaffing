const router = require('express').Router();
let JobType = require('../models/jobType.model');

router.route('/').get((req, res)=>{
    JobType.find()
        .then(job_type => res.json(job_type))
        .catch(err => res.json('Error: '+ err));
});

router.route('/add').post((req, res)=>{
    const type_name=req.body.type_name;
    const newJobType = new JobType({type_name});

    newJobType.save()
            .then(()=> res.json('Added Successfully'))
            .catch(err => res.json('Error: '+ err));
});
router.route('/updateJobType/:id').post((req,res)=>{
    JobType.findById(req.params.id)
        .then(
            dataToUpdate => {
                    dataToUpdate.type_name = req.body.type_name;
                    dataToUpdate.save()
                        .then(()=>res.json('Job Type Updated successfully.'))
                        .catch(err => res.json('Error : '+err));
            } 
        ).catch(err => res.json('Error : '+err));
});
router.route('/deleteJobType/:id').delete((req,res)=>{
    JobType.findByIdAndDelete(req.params.id)
        .then(()=>res.json({'code':1,'msg':'Job Type Delted Successfully.'}))
        .catch(err => res.json({'code':0,'msg':err}));
});

module.exports = router;