const router = require('express').Router();
const jobApply = require('../models/jobApply.model');
const Jobs= require('../models/jobs.model');
router.route('/add').post((req, res)=>{
    // console.log(req.body);
    const job_post_id=req.body.job_post_id;
    const job_seeker_id=req.body.user_id;
    const  newJobApplyData= new jobApply(
        {
            job_post_id, job_seeker_id
        }
    );
    newJobApplyData.save()
        .then(()=>res.json({'code':1,'msg':"Added Successfully"}))
        .catch(err=>res.json({'code':0,'msg':err}));
})
router.route('/getMyAppliedJobs/:id').get((req, res)=>{
    // console.log(req.body);
    // const job_post_id=req.body.job_post_id;
    // const job_seeker_id=req.body.user_id;
    // const  newJobApplyData= new jobApply(
    //     {
    //         job_post_id, job_seeker_id
    //     }
    // );
    jobApply.find({
        job_seeker_id:req.params.id})
            .then(respo =>{
                var poi=[];
                for(let i=0;i <respo.length; i++){
                    var idString=respo[i].job_post_id;
                    // var objId = new ObjectID(idString);
                    console.log(idString);
                    Jobs.find({_id:idString})
                    .then(jobs =>res.json({'code':1,'data':jobs,'error':'No error found.'}))
                    .then(err => res.json({'code':0,'data':'Something went wrong','error':err}));
                    // Jobs.findById(idString)
                    //         .then(response=>{
                    //             // poi[i]={
                    //             //     "jobTitle" : response.job_itle,
                    //             //     "jobId": response._id,
                    //             //     "address": response.full_address,
                    //             //     "lastDate": response.last_date
                    //             // };
                    //             res.json({"code":1,"JoBBB":response})
                    //         })
                    //         .catch(err=>res.json({"code":0,"msg":"No Data Found", "error":err}));
                    // res.json({"code":1,"job_details":poi})
                }
                
            })
            .catch(err=>res.json({'code':0,'msg':err}))
    // jobApply.aggregate([
    //     {
    //       $lookup:
    //         {
    //           from: "jobs",
    //           localField: "job_post_id",
    //           foreignField: "_id",
    //           as: "jobDetails"
    //         }
    //    }
    //  ]);

    // newJobApplyData.save()
    //     .then(()=>res.json({'code':1,'msg':"Added Successfully"}))
    //     .catch(err=>res.json({'code':0,'msg':err}));  
})

module.exports = router;