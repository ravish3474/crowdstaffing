const router = require('express').Router();
const Company = require('../models/company.model');
import { companyToken } from '../util';
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
router.route('/updateData/:id').post((req, res)=>{

    // console.log('Edited File Name: '+req.file.filename);
    Company.findById(req.params.id)
        .then(dataToUpdate => {
            // console.log(dataToUpdate);
            dataToUpdate.company_name = req.body.company_name;
            dataToUpdate.comp_phone = req.body.comp_phone;
            dataToUpdate.comp_description = req.body.comp_description;
            dataToUpdate.comp_establishment_year = req.body.comp_establishment_year;
            dataToUpdate.comp_website = req.body.comp_website;
            // social
            dataToUpdate.facebook_id = req.body.facebook_id;
            dataToUpdate.twitter_id = req.body.twitter_id;
            dataToUpdate.linked_in_id= req.body.linked_in_id;
            dataToUpdate.google_plus_id= req.body.google_plus_id;
            // addresss
            dataToUpdate.country_=req.body.country_;
            dataToUpdate.state_=req.body.state_;
            dataToUpdate.city_=req.body.city_;
            dataToUpdate.full_address = req.body.full_address;
            dataToUpdate.save()
                    .then(()=>res.json({'code':1,'msg':"Updated Successfully"}))
                    .catch(err => res.json({'code':0,'msg':err}))
        })
        .catch(err =>  res.json('Error : '+err));
});
router.route('/companyLoginValidate').post((req,res)=>{
    
    Company.findOne({
        comp_email:req.body.email,
        comp_password:req.body.password
    }).then(resp =>{
            if(resp!=null){
                
                    res.send({'code':1,
                        _id:resp._id,
                        name:resp.comp_name,
                        email:resp.comp_email,
                        token:companyToken(resp)
                    })
               
               
                // console.log(resp);
                // const accessToken =jwt.sign(resp, config.JWT_SECRET, {
                //     expiresIn: '48h'
                //   });
                // res.send({'code':1,'company_data':accessToken});
            }else{
                res.json({'code':0,'company_data':'Invalid Email or Password'})
            }
                
            
            
        }).catch(err => res.json({'code':0,'company_data':err}))
})
router.route('/deleteCompany/:id').delete((req,res)=>{
    Company.findByIdAndDelete(req.params.id)
        .then(()=>res.json({'code':1,'msg':'Company Delted Successfully.'}))
        .catch(err => res.json({'code':0,'msg':err}));
});
module.exports = router;
