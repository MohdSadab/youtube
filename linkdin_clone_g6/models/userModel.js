import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const experience = mongoose.Schema({
    organizationName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:100
    },
    designation:{
        type:String,
        required:true,
        minLength:3,
        maxLength:100
    },
    startedAt:{
        type:Date,
        required:true
    },
    endedAt:{
        type:Date
    },
    stillWorking:{
        type:Boolean
    },
    address:{
        city:String,
        state:String,
        country:String
    }
})

const education = mongoose.Schema({
    schoolName:{
        type:String,
        required:true,
        minLength:3,
        maxLength:100
    },
    division:{
        type:String,
        required:true,
        minLength:3,
        maxLength:100
    },
    startedAt:{
        type:Date,
        required:true
    },
    endedAt:{
        type:Date,
    },
    stillStudy:{
        type:Boolean
    },
    grade:String,
    address:{
        city:String,
        state:String,
        country:String
    }
})


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength: 3,
        maxLength: 300
    },
    email:{
        type:String,
        required:true,
        minLength: 3,
        maxLength: 300,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength: 6,
        maxLength: 500
    },
    createdAt:{
        type:Date,
        default:Date.now,
        immutable:true
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    },
    profileUrl:String,
    metaInfo:String,
    experiences:[experience],
    education:[education],
    skills:[String]
})


userSchema.pre('save',async function (next){
    if(this.isNew || this.isModified("password")){
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;  
    }
    next();
})

userSchema.post('save',async function (){
   this.password = undefined
   console.log("user is created, sent welcome email",this);
})


export default mongoose.model('User',userSchema);