import express from 'express';

const app = express();

app.get("/",(req,res,next)=>{
    res.send("<h1>Hello Worldd</h1>");
})

app.listen(5000, () => {console.log("Server Started at http://localhost:5000")});