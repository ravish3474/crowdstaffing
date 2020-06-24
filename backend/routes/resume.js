const router = require('express').Router();
let resume = require('../models/resume.modal');
let JobSeeker = require('../models/jobseekers.model');
const multer = require('multer');
const jobSeeker = require('../models/jobseekers.model');


const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './resumeFolder/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});
const upload = multer({storage:storage});

router.route('/resumeUpload/:id').post(upload.single('resume_file'), (req,res)=>{
    console.log(req.file.filename);
    const resumePath= req.file.filename;
    jobSeeker.findById(req.params.id)
        .then(
            dataToUpdate => {
                dataToUpdate.resumeId = req.file.filename;
                dataToUpdate.save()
                    .then(()=>res.json('Resume Uploaded Successfully.'))
                    .catch(err => res.json('Error : '+err));
            }
        ).catch(err => res.json('Error : '+err));
    // const resumeData = new resume({
    //     resumePath
    // });
    // resumeData.save()
    //     .then(()=>res.json("Resume Added Successfully"))
    //     .catch(err => res.json('Error : '+err));
});
module.exports = router;