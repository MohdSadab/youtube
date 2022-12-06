import express from 'express';
import { connect } from './db/db.js';
import UserModel from './models/userModel.js';
import { userSchema } from './schema/userSchema.js';
import bcrypt from 'bcrypt';

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

app.put("/user/:email",async (req,res)=>{
    try {
        const user = await UserModel.findOne({email:req.params.email});
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        user.profileUrl = req.body.profileUrl || user.profileUrl ;
        user.experiences = req.body.experiences || user.experiences ;
        user.skills = req.body.skills || user.skills ;
        user.educations = req.body.educations || user.educations ;
        await user.save();
        return res.status(200).json(user);
    } catch (error) {
        return res.status(error.status || 500).json({message:error.message});
    }
})

app.post("/login",async (req,res)=>{
    try {
        const value = await userSchema.validateAsync(req.body);
        const user = await UserModel.findOne({email:value.email});
        if(!user){
            return res.status(404).json({message:'user not found'});
        }
        const isMatch =await bcrypt.compare(value.password,user.password);
        if(isMatch){
            return res.json(value);
        }
        return res.json({message:"Invalid credentials"});
    } catch (error) {
        return res.status(error.status || 400).json(error.message)
    }
})



app.listen(8000,(err)=>console.log(`started at ${port}`,err))