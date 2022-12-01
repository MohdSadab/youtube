import express from 'express';
import { connect } from './db/db.js';
import UserModel from './models/userModel.js';

const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

connect()
// protocol://domainname:portnumber/path
// http://localhost:8000/
app.get('/',(req,res)=>{
    return res.json('Hello World')
})

// http://localhost:8000/user method post
app.post("/user",async (req,res)=>{
    const data = req.body;
    try {
       const user = new UserModel(data);
       await user.save();
       return res.status(201).json(user); 
    } catch (error) {
        console.log(error.status,">>>")
       return res.status(400).json(error.message)
    }
})


app.listen(8000,(err)=>console.log(`started at ${port}`,err))