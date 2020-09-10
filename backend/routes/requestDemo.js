const router = require('express').Router();
const requestDemo = require('../models/requestDemo.model');
router.route('/add').post((req, res)=>{
   
    const company_name=req.body.comp_name;
    const comp_email= req.body.email;
    const comp_phone=req.body.phone;
    const comp_prof= req.body.compProf;
   
    // console.log(req.body);
    const newRequest = new requestDemo({company_name,comp_email,comp_phone,comp_prof});
    newRequest.save()
            .then(()=> res.json({'code':1,'msg':'Added Successfully'}))
            .catch(err => res.json({'code':0,'msg':'Error : '+err}));
});
router.route('/').get((req, res)=>{
    requestDemo.find()
            .then(reqUe => res.json({'code':1,'requests':reqUe}))
            .catch(err => res.json({'code':0,'msg':err}));
});
module.exports = router;