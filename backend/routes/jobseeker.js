const router = require('express').Router();
const jobSeeker = require('../models/jobseekers.model');
const multer = require('multer');
import { getToken } from '../util';

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
    jobSeeker.find()
        .then(jobSeeker => res.json({'code':1,'jobseeker':jobSeeker}))
        .catch(err => res.json('Error: '+ err));
});

router.post('/signin', async (req, res) =>{
    const signinUser = await jobSeeker.findOne({
        email : req.body.email,
        pass_code: req.body.pass_code
    });
    if(signinUser){
        res.send({
            _id:signinUser.id,
            name:signinUser.full_name,
            email:signinUser.email,
            token:getToken(signinUser)
        })
    }
    else{
        res.status(401).send({msg:'Invalid Email or Password'});
    }
})

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
            console.log(dataToUpdate);
            dataToUpdate.full_name = req.body.full_name;
            dataToUpdate.phone_ = req.body.phone;
            dataToUpdate.job_title = req.body.job_title;
            dataToUpdate.website = req.body.website;
            dataToUpdate.current_sal = req.body.current_sal;
            dataToUpdate.expected_sal = req.body.exp_sal;
            dataToUpdate.exp_year = req.body.exp_year;
            dataToUpdate.exp_month = req.body.exp_month;
            dataToUpdate.gender = req.body.gender;
            dataToUpdate.education= req.body.education_level;
            dataToUpdate.dob = req.body.dob;
            dataToUpdate.basic_introduction = req.body.description;
            // social
            dataToUpdate.facebook_id = req.body.facebook_id;
            dataToUpdate.twitter_id = req.body.twitter;
            dataToUpdate.linked_in_id= req.body.linkedin;
            dataToUpdate.google_plus_id= req.body.google_plus;
            // addresss
            dataToUpdate.country_=req.body.country;
            dataToUpdate.city_=req.body.city_;
            dataToUpdate.full_address = req.body.full_address;
            dataToUpdate.lat_= req.body.lat;
            dataToUpdate.long_= req.body.long;           
            
            dataToUpdate.save()
                    .then(()=>res.json({'code':1,'msg':"Updated Successfully"}))
                    .catch(err => res.json({'code':0,'msg':err}))
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