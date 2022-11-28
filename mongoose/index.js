import mongoose from "mongoose";
mongoose.connect('mongodb+srv://sadab:Sadab123@cluster0.zhhluba.mongodb.net/?retryWrites=true&w=majority').then(res=>console.log("hello started")).catch(err=>console.log(err))

// mongod (server start of mongodb)
//  npm i mongoose (install the mongoose)

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        minLength:6,
        maxLength:20
    },
    age:{
        type:Number,
        min:1,
        max:150,
        validate:{
            validator:function(v){
                return v%2===0
            },
            message: props => `${props.value} is not even`
        }
    }
})

// mongoose model is higher order constructor which takes collection name and schema as an argument 
const UserModel = mongoose.model('User',userSchema)

//  const user = new UserModel({email:"tempw@hello.com",password:"Hellos",age:40});
//  user.save().then(res=>console.log(res)).catch(err=>console.log(err.message))

// UserModel.findOneAndUpdate({email:"tempw@hello.com"},{age:60},{runValidators:true,new:true},(err,doc)=>{
//     if(err){
//         throw err
//     }
//     console.log(doc);
// })

//  UserModel.findOne({email:'tempw@hello.com'}).then(res=>{
//     console.log(res);
//  }).catch(err=>{
//     console.log(err)
//  })

// UserModel.findOne({email:'tempw@hello.com'},(err,res)=>{
//     console.log(err,res)
// })

async function getData(){
    try {
        const user = await UserModel.findOne({email:'tempw@hello.com'});
        user.age=46;
        const updatedUser=await user.save();
        console.log(updatedUser)
    } catch (error) {
        console.log(error)
    }

}

getData();

// UserModel.deleteMany().then(res=>console.log(res)).catch(err=>console.log(err));

