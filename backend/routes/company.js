const router = require('express').Router();
const Company = require('../models/company.model');
router.route('/').get((req,res)=>{
    Company.find()
                .then(company_details=>res.json({'code':1,"result":company_details}))
                .catch(err=> res.json({'code':0, 'result':err}));
})
router.route('/registerCompany').post((req,res)=>{
    const company_name = req.body.comp_name;
    const comp_email=req.body.email;
    const comp_phone = req.body.phone;
    const comp_password= req.body.password;
    const newComp = new Company({company_name,comp_email,comp_phone,comp_password
    });
    newComp.save()
                .then(()=>res.json({'code':1,'msg':'Registered Successfully.'}))
                .catch(err=>res.json({'code':0,'msg':err}))
})
router.route('/companyLoginValidate').post((req,res)=>{
    
    Company.findOne({
        comp_email:req.body.email,
        comp_password:req.body.password
    }).then(resp =>{
            if(resp!=null){
                res.json({'code':1,'company_data':resp})
            }else{
                res.json({'code':0,'company_data':'Invalid Email or Password'})
            }
                
            
            
        }).catch(err => res.json({'code':0,'company_data':err}))
})
module.exports = router;
