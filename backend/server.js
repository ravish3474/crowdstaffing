const express= require('express');
const cors= require('cors');
// const { Mongoose } = require('mongoose');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

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

// const jobsRouter = require('./routes/jobs');
const jobseekerRouter = require('./routes/jobseeker');
const categoryRouter = require('./routes/category');
const jobTypeRouter = require('./routes/jobType');
const skillRouter = require('./routes/skills');
//const resumeRouter = require('./routes/resume');
// app.use('/jobs',jobsRouter);
app.use('/jobSeeker',jobseekerRouter);
app.use('/category',categoryRouter);
app.use('/jobType',jobTypeRouter);
app.use('/skill',skillRouter);
//app.use('/resume',resumeRouter);

app.listen(port,()=>{
    console.log(`Server is runnig at: ${port}`);
})
