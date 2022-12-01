import mongoose from "mongoose";


const experience = mongoose.Schema({
    organizationName:{
        type:String,
        minLength:3,
        maxLength:100,
        required:true
    },
    designation:{
        type:String,
        minLength:5,
        maxLength:100,
        required:true
    },
    startAt:{
        type:Date,
        required:true
    },
    endAt:{
        type:Date
    },
    stillWorking:{
        type:Boolean,
        default:false
    },
    address:{
        city:String,
        state:String,
        country:String
    },
    workDesc:{
        type:String,
        maxLength:150
    }
})

const education = mongoose.Schema({
    organizationName:{
        type:String,
        minLength:3,
        maxLength:100,
        required:true
    },
    division:{
        type:String,
        minLength:5,
        maxLength:100,
        required:true
    },
    startAt:{
        type:Date,
        required:true
    },
    endAt:{
        type:Date
    },
    stillPursuing:{
        type:Boolean,
        default:false
    },
    address:{
        city:String,
        state:String,
        country:String
    },
    metaDesc:{
        type:String,
        maxLength:150
    }
})


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:3,
        maxLength:150
    },
    email:{
        type:String,
        required:true,
        minLength:6,
        maxLength:150,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        maxLength:40
    },
    metaInfo:{
        type:String,
        maxLength:200
    },
    skills:[String],
    experiences:[experience],
    educations:[education],
    createdAt:{
        type:Date,
        default:Date.now,
        immutable:true
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    profileUrl:String
})

const UserModel = mongoose.model('User',userSchema);

export default UserModel;