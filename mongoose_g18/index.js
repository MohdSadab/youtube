import mongoose from "mongoose";
// const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sadab:Sadab123@cluster0.zhhluba.mongodb.net/g18?retryWrites=true&w=majority").then(res=>{
    console.log("connected");
}).catch(err=>{
    console.log(err);
})

/**
 * String
 * Number
 * Boolean
 * Array
 * Date
 * ObjectId
 * Map
 * Schema 
 */

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        maxLength:20
    },
    age:{
        type:Number,
        min:[1,"age is less then 1"],
        max:130,
        validate:{
            validator:function(v){
                return v%2===0
            },
            message:props => `${props.value} is not even number`
        }
    },
    createdAt:{
        type:Date,
        immutable:true,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
})

const UserModel = mongoose.model('User',userSchema)

// UserModel.deleteMany(function(err,res){
//     console.log(err,res);
// })
// const user = new UserModel({email:"hello@Hello.com",password:"123456",age:4})
// user.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err.message)
// })

// UserModel.findOneAndUpdate({email:'hello@hello.com'},{age:8},{
//     runValidators:true,
//     new:true
// }).then(res=>console.log(res)).catch(
//     err=>console.log(err.message)
// )

async function getUser(){
    try {
        const user = await UserModel.findOne({email:"hello@hello.com"})
        user.age = 10;
        const updatedUser = await user.save();
        console.log(updatedUser);
    } catch (error) {
        console.log(error)
    }
}

getUser();
console.log("After is called")


// UserModel.create({email:"ABC@Hello.com",password:"123456",age:4}),then(res=>console.log(res))
