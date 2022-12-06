import express from 'express';
import { connect } from './db/db.js';
import UserModel from './models/userModel.js';
import { loginSchema } from './validationSchema/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { isAuthenticated } from './middelware/isAuthenticated.js';
const app = express();

connect();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port = process.env.PORT || 8000;

// http://localhost:8000/
app.get("/",(req,res)=>{
    return res.send("hello")
})


// http://localhost:8000/user
app.post('/user',async (req,res)=>{
    const data = req.body;
    const user = new UserModel(data);
    
    try {
        await user.save();
        return res.status(201).json(user);
    } catch (error) {
        return res.status(400).json(error.message)
    }
})


app.put("/user/",isAuthenticated,async (req,res)=>{
    const userData = req.body;

    try {
        const user = await UserModel.findOne({email:req.user.email});
        if(!user){
            throw new Error("User Not Found")
        }
        user.name = userData.name || user.name;
        user.profileUrl = userData.profileUrl || user.profileUrl;
        user.experiences = userData.experiences || user.experiences;
        user.education = userData.education || user.education;
        user.skills = userData.skills || user.skills;
        await user.save();
        return res.status(200).json(user);
    } catch (error) {
        console.log(error.status)
        return res.status(error.status || 500).json(error.message);
    }
    
})

app.post("/login",async(req,res)=>{
    
    const data=req.body;
    try {
        const value = await loginSchema.validateAsync(data);
        const user = await UserModel.findOne({email:value.email});
        if(!user){
            return res.status(404).json({message:"user not found"});
        }
        let match = await bcrypt.compare(value.password, user.password);
        if(match){
            const token =await jwt.sign({id:user._id,email:user.email},"MyJwtSecret")
            return res.json({token});
        }
        return res.status(404).json({message:"Password Does not match"});
    } catch (error) {
        res.status(error.status || 500).json(error.message)
    }
    
})


app.listen(port,(err)=>console.log(`${port} listen`,err));