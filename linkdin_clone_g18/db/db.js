import mongoose from "mongoose";
// const mongoose = require("mongoose");


export function connect(){
    mongoose.connect("mongodb+srv://sadab:Sadab123@cluster0.zhhluba.mongodb.net/g18?retryWrites=true&w=majority").then(res=>{
    console.log("connected");
    }).catch(err=>{
        console.log(err);
    })
}