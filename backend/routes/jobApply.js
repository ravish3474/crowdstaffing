const router = require('express').Router();
const jobApply = require('../models/jobApply.model');
router.route('/applyJob').post((req, res)=>{
    console.log(req.body);
})
module.exports = jobApply;