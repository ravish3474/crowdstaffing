"use strict";

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var cors = require('cors');

// const { Mongoose } = require('mongoose');
var mongoose = require('mongoose');

require('dotenv').config();

var app = express();
var port = process.env.PORT || 5000;
app.use(express["static"](_path["default"].join(__dirname, '../frontend', 'build')));
var uri = "mongodb+srv://mongo_root:mongo_root@cluster0-wqbxq.gcp.mongodb.net/cluster0?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('DB Connected!');
})["catch"](function (err) {
  console.log("DB Connection Error: ".concat(err.message));
});
app.use(cors());
app.use(express.json()); // const jobsRouter = require('./routes/jobs');

var jobseekerRouter = require('./routes/jobseeker');

var categoryRouter = require('./routes/category');

var jobTypeRouter = require('./routes/jobtype');

var skillRouter = require('./routes/skills'); //const resumeRouter = require('./routes/resume');
// app.use('/jobs',jobsRouter);


app.use('/jobSeeker', jobseekerRouter);
app.use('/category', categoryRouter);
app.use('/jobType', jobTypeRouter);
app.use('/skill', skillRouter); //app.use('/resume',resumeRouter);

app.listen(port, function () {
  console.log("Server is runnig at: ".concat(port));
});
