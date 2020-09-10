const express= require('express');
const cors= require('cors');
var history = require('connect-history-api-fallback');
import path from 'path';
// const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../frontend', 'build')));

const uri="mongodb+srv://mongo_root:mongo_root@cluster0-wqbxq.gcp.mongodb.net/cluster0?retryWrites=true&w=majority";
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(() => console.log('DB Connected!'))
.catch(err => {
    console.log(`DB Connection Error: ${err.message}`);
});

app.use(cors());
app.use(express.json());
app.disable('etag');

const jobsRouter = require('./routes/jobs');
const jobseekerRouter = require('./routes/jobseeker');
const categoryRouter = require('./routes/category');
const jobTypeRouter = require('./routes/jobtype');
const skillRouter = require('./routes/skills');
const CompanyRouter = require('./routes/company');
const jobApplyRouter = require('./routes/jobApply');
const requestDemo = require('./routes/requestDemo');
// RequesDemo
//const resumeRouter = require('./routes/resume');
app.use('/jobs',jobsRouter);
app.use('/jobSeeker',jobseekerRouter);
app.use('/category',categoryRouter);
app.use('/jobType',jobTypeRouter);
app.use('/skill',skillRouter);
app.use('/company',CompanyRouter);
app.use('/jobApply', jobApplyRouter);
app.use('/requestDemo', requestDemo);
app.use(history({
    rewrites:[
        {from: /^\/category\/.*$/, to: function(context){
            return context.parsedUrl.pathname;
        }},
        {from: /\/.*/, to: '/'}
    ]
}))

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
// app.use('/resume',resumeRouter);

app.listen(port,()=>{
    console.log(`Server is runnig at: ${port}`);
})
