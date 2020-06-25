const router = require('express').Router();
let JobSeeker = require('../models/jobseekers.model');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './profilePicture/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});
const upload = multer({storage:storage});
router.route('/').get((req, res)=>{
    JobSeeker.find()
        .then(jobSeeker => res.json(jobSeeker))
        .catch(err => res.json('Error: '+ err));
});

router.route('/register').post((req, res)=>{
    const full_name=req.body.full_name;
    const email=req.body.email;
    const pass_code=req.body.password;
    const phone_= req.body.phone;
    const newUser = new JobSeeker({full_name, email, pass_code,phone_});

    newUser.save()
            .then(()=> res.json({'code':1,'msg':'Registered Successfully'}))
            .catch(err => res.json('Error: '+ err));
});

router.route('/updateData/:id').post((req, res)=>{
    // console.log('Edited File Name: '+req.file.filename);
    jobSeeker.findById(req.params.id)
        .then(dataToUpdate => {
            dataToUpdate.basic_introduction = req.body.basic_introduction;
            dataToUpdate.nationality_ = req.body.nationality;
            dataToUpdate.phone_ = req.body.phone;
            dataToUpdate.skill_ids = req.body.skill_ids;
            dataToUpdate.dob = req.body.dob;
            dataToUpdate.gender = req.body.gender;
            dataToUpdate.address = req.body.address;
            dataToUpdate.save()
                    .then(()=>res.json("Updated Successfully"))
                    .catch(err => res.json('Error : '+err))
        })
        .catch(err =>  res.json('Error : '+err));
});
router.route('/updateProfilePic/:id').post(upload.single('profilePhoto'),(req, res)=>{
    // console.log('Edited File Name: '+req.file.filename);
    jobSeeker.findById(req.params.id)
        .then(dataToUpdate => {
            dataToUpdate.profile_pic = req.file.filename;
            dataToUpdate.save()
                .then(()=>res.json('Image Uploaded Successfully.'))
                .catch(err =>res.json('Error: '+err));
        })
        .catch(err => res.json('Error : '+err));
}) ;

router.route('/deleteJobSeeker/:id').delete((req,res)=>{
    jobSeeker.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Job Seeker Deleted Successfully'))
        .catch(err => res.json('Error : '+err));
});
module.exports = router;