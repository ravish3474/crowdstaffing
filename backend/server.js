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

const jobsRouter = require('./routes/jobs');
const jobseekerRouter = require('./routes/jobseeker');

app.use('/jobs',jobsRouter);
app.use('/jobSeeker',jobseekerRouter);

app.listen(port,()=>{
    console.log(`Server is runnig at: ${port}`);
})
