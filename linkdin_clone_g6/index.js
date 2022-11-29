import express from 'express';
import { connect } from './db/db.js';
import UserModel from './models/userModel.js';

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


app.listen(port,(err)=>console.log(`${port} listen`,err));