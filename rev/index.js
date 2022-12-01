const express = require("express");
const app = express();
const router = require("./user");

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/users",router)

const logger1 = function(req,res,next){
    req.data={
        user:"Abc"
    }
    console.log(req.url," Hello logger")
    next();
}
const logger2 = function(req,res,next){
    console.log(req.url," second logger")
    next();
}

app.get("/",logger1,logger2,(req,res)=>{
    console.log(req.data);
    res.send("hello")
})

app.post("/",(req,res)=>{
    // req.on("data",(chunk)=>{
    //     console.log(chunk.toString());
    // })
    console.log(req.body);
    res.send("created")
})

app.use(logger1);
app.delete("/",(req,res)=>{
    res.send("deleted")
})

app.put("/",(req,res)=>{
    res.send("updated")
})




app.listen(8000,(err)=>console.log("server started",err))