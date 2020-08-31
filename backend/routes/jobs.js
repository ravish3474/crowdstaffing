const router = require('express').Router();
const Jobs= require('../models/jobs.model');

router.route('/getAllJobs').get((req,res)=>{
    Jobs.find()
                .then(jobs =>res.json({'code':1,'data':jobs,'error':'No error found.'}))
                .then(err => res.json({'code':0,'data':'Something went wrong','error':err}));
});
router.route('/getMyPostedJobs/').post((req,res)=>{
    Jobs.find({comapany_id:req.body.comapany_id})
                                .then(jobs => res.json({'code':1,'data':jobs, 'error':'No error found'}))
                                .catch(err => res.json({'code':0,'data':'Something went wrong', 'error':err}))
})
router.route('/postNewJob').post((req,res)=>{
    // console.log(req.body);
    const job_title = req.body.jobTitle;
    const job_desc= req.body.jobDesc;
    const last_date= req.body.lastDate;
    const comapany_id= req.body.comapanyId;
    const job_type=req.body.jobTypeId;
    const specialism=req.body.specialism;
    const min_sal=req.body.minSal;
    const max_sal= req.body.maxSal;
    const min_exp= req.body.minExp;
    const max_exp= req.body.maxExp;
    const gender= req.body.gender;
    const job_category= req.body.job_category;
    const qualification = req.body.qualification;
    const add_country= req.body.add_country;
    const add_state= req.body.add_state;
    const add_city= req.body.add_city;
    const full_address= req.body.full_address;
    const lat=req.body.latitude;
    const long= req.body.longitude;
    const newJob  = new Jobs ({job_title, job_desc, last_date, 
        comapany_id, job_type, specialism, min_sal, 
                            max_sal, min_exp, max_exp, gender, job_category, 
                            qualification, add_country, add_state, add_city, full_address, 
                            lat, long });
    // console.log(newJob);
    newJob.save()
                .then(()=>res.json({'code':1,'msg':'Job Posted Successfully.','error':'No error Found.'}))
                .catch(err=>res.json({'code':0,'msg':'Something Went Wrong.','error':err}))
});
router.route('/updateJob/:id').post((req, res)=>{
    // console.log('Edited File Name: '+req.file.filename);
    Jobs.findById(req.params.id)
        .then(dataToUpdate => {
            dataToUpdate.job_title = req.body.jobTitle;
            dataToUpdate.job_desc = req.body.jobDesc;
            dataToUpdate.last_date = req.body.lastDate;
            dataToUpdate.job_type = req.body.jobTypeId;
            dataToUpdate.specialism = req.body.specialism;
            dataToUpdate.min_sal = req.body.minSal;
            dataToUpdate.max_sal = req.body.maxSal;
            dataToUpdate.min_exp = req.body.minExp;
            dataToUpdate.max_exp = req.body.maxExp;
            dataToUpdate.gender = req.body.gender;
            dataToUpdate.job_category = req.body.job_category;
            dataToUpdate.qualification = req.body.qualification;
            dataToUpdate.add_country = req.body.add_country;
            dataToUpdate.add_state = req.body.add_state;
            dataToUpdate.add_city = req.body.add_city;
            dataToUpdate.full_address = req.body.full_address;
            dataToUpdate.lat = req.body.latitude;
            dataToUpdate.long = req.body.longitude;
            dataToUpdate.save()
                    .then(()=>res.json({'code':1,'msg':"Updated Successfully",'error':'No error Found.'}))
                    .catch(err => res.json({'code':0,'msg':'Something Went Wrong.','error':err}))
        })
        .catch(err =>  res.json({'code':2,'msg':'Something Went Wrong.','error':err}));
});
router.route('/deleteJob/:id').delete((req,res)=>{
    Jobs.findByIdAndDelete(req.params.id)
                                        .then(()=>res.json({"code":1,"msg":"Deleted Successfully."}))
                                        .catch(err=>res.json({"code":0,"msg":"Failed To Delete", "error":err}));
});
router.route('/getLatestJobs').get((req,res)=>{
    Jobs.find({}).sort({$natural:-1}).limit(4)
        .then(jobs => res.json({'code':1,'jobs':jobs}))
        .catch(err => res.json({'code':0,'err':err}));
})
router.route('/getJobDetails/:id').get((req,res)=>{
    Jobs.findById(req.params.id)
                .then(response=>res.json({"code":1,"job_details":response}))
                .catch(err=>res.json({"code":0,"msg":"No Data Found", "error":err}));
});
module.exports= router;
