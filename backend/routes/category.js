const router = require('express').Router();
let category = require('../models/category.model');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, './backend/categoryPicture/');
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
});
const upload = multer({storage:storage});

router.route('/').get((req, res)=>{
    category.find()
        .then(category => res.json({'code':1,'data':category}))
        .catch(err => res.json({'code':0,'data':'Error : '+err}));
});

router.route('/add').post(upload.single('image'),(req, res)=>{
    const categoryName=req.body.category_name;
    const categoryImage= req.file.filename;
    // console.log(req.files[0]);
    // console.log(req.body);
    const newCategory = new category({categoryName,categoryImage});
    newCategory.save()
            .then(()=> res.json({'code':1,'msg':'Added Successfully'}))
            .catch(err => res.json({'code':0,'msg':'Error : '+err}));
});
router.route('/updateCategory/:id').post(upload.single('categoryPhoto'),(req, res)=>{
    category.findById(req.params.id)
        .then(
            dataToUpdate =>{
                dataToUpdate.categoryName = req.body.category_name;
                dataToUpdate.categoryImage = req.file.filename;
                dataToUpdate.save()
                    .then( ()=> res.json('Category Updated Successfully.'))
                    .catch(err => res.json('Error: '+err));
            }
        ).catch(err => res.json('Error : '+err));
});

router.route('/deleteCategory/:id').delete((req,res)=>{
    category.findByIdAndDelete(req.params.id)
        .then(()=>res.json({'code':1,'msg':'Category Delted Successfully.'}))
        .catch(err => res.json({'code':0,'msg':err}));
});
module.exports = router;