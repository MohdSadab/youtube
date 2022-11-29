import mongoose from "mongoose";

export function connect(){
    mongoose.connect('mongodb+srv://sadab:Sadab123@cluster0.zhhluba.mongodb.net/?retryWrites=true&w=majority').then(res=>console.log("db connected")).catch(err=>console.log(err))
}

