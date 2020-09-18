const router = require('express').Router();
const jobApply = require('../models/jobApply.model');
const Jobs= require('../models/jobs.model');
const jobSeeker = require('../models/jobseekers.model');
var mongoose = require('mongoose'); 
router.route('/add').post((req, res)=>{
    // console.log(req.body);
    const job_post_id=req.body.job_post_id;
    const job_seeker_id=req.body.user_id;
    Jobs.findById(job_post_id)
        .then(job_post_details =>{
            jobSeeker.findById(job_seeker_id)
                        .then(job_seeker_details =>{
                            const  newJobApplyData= new jobApply(
                                {
                                    job_post_id, job_post_details, job_seeker_id, job_seeker_details
                                }
                            );

                            // console.log(newJobApplyData);
                            newJobApplyData.save()
                                .then(()=>res.json({'code':1,'msg':"Added Successfully"}))
                                .catch(err=>res.json({'code':0,'msg':err}));
                        });

            
        })
    
})
router.route('/getMyAppliedJobs/:id').get((req, res)=>{
    jobApply.find({job_seeker_id:req.params.id})
            .then(response=>res.json({"code":1,"job_details":response}))
            .catch(err=>res.json({"code":0,"msg":"No Data Found", "error":err}));
    
})
router.route('/getJobApplications/:id').get((req, res)=>{
    // jobApply.findById
  

var id = mongoose.Types.ObjectId(req.params.id);
    jobApply.find({"job_post_details.comapany_details._id":id})
            .then(response=>res.json({"code":1,"job_details":response}))
            .catch(err=>res.json({"code":0,"msg":"No Data Found", "error":err}));
    
})
module.exports = router;