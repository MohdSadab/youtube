// // console.log(__dirname)
// // console.log(__filename)
// const http = require('http');

// let todos=[
//     {
//         'id':1,
//         "content":"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum "
//     }
// ]


// const server = http.createServer((req,res)=>{
    
//     if(req.url == "/users"){
//        return res.end("user detail")
//     }
   
//     if(req.url==="/todos" && req.method=="GET"){
//         res.setHeader('Content-Type','application/json')
//         return res.end(JSON.stringify(todos))
//     }

//     if(req.url==="/todo" && req.method=="POST"){
//         let data='';
//         req.on("data",function(chunk){
//             data+=chunk.toString();
//         })

//         req.on('end',function(){
//             console.log("hello")
//             data=JSON.parse(data);
//             todos.push(data);
//         })

//         return res.end("data added successfully")
//     }

//     res.end("Hello world");
// })

// server.listen(8000,(err)=>console.log(err,"server started at port 8000"));

// const path = require('path');

// // console.log(__filename)
// // console.log(path.basename(__filename));
// // console.log(path.extname(__filename));
// // console.log(path.join(__dirname,"hello","temp"));
// // console.log(path.join(__dirname,"hello","temp",".."))

// const fs = require("fs");

// // createFile
// // updateFile
// // deleteFile
// // readFile
// // createDir

// // fs.writeFile(path.join(__dirname,'temp.html'),"<h1>Hello World Updated </h1>",function(err){
// //     console.log(err,"File save successfully")
// // })

// // fs.appendFile(path.join(__dirname,'temp.html'),"<h1>Hello World New Data </h1>",function(err){
// //     console.log(err,"File save successfully")
// // })

// // fs.readFile(path.join(__dirname,'temp.html'),function(err,data){

// //     if(err){
// //         throw err
// //     }
// //     console.log(data.toString());
// // })



// // const path = require('path')
// // console.log(path.join(__dirname,"..","node_lec1","files","temp","hello"))
// // fs.mkdir(path.join(__dirname,"files","temp","hello"),{recursive:true},function(err){
// //     console.log(err,"dir is created")
// // })

// // fs.mkdir(path.join(__dirname,"..","node_lec1","files","temp","hello"),{recursive:true},function(err){
// //     console.log(err,"dir is created")
// // })

// // fs.writeFileSync('test.txt',"dlkjdlkhdkl dkhfkhkf flkhfkkhf");
// // console.log("hello sync")

// // const fsPromise = require("fs/promises");

// // fsPromise.readFile('temp.html').then(data=>console.log(data.toString())).catch(err=>console.log(err))

// // const EventEmitter = require('events');

// // class MyEvent extends EventEmitter{
// //     log(arg){
// //         this.emit('log',arg)
// //     }

// // }

// // const myEvent = new MyEvent();

// // myEvent.on('log',function(args){
// //     console.log(args)
// // })

// // myEvent.once('log',function(args){
// //     console.log(args)
// // })

// // myEvent.log("hello world")
// // myEvent.log("hello world1")
// // myEvent.log("hello world 2")
// // myEvent.log("hello world 3")
const express = require('express');
const app =express();

const logger = function(req,res,next){
    console.log("logger get called",req.url);
    req.data="Testing data";
    next();
}


// app.use(logger);
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const todoList = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
      },
      {
          "userId": 1,
          "id": 7,
          "title": "illo expedita consequatur quia in",
          "completed": false
        },
        {
            "userId": 1,
            "id": 8,
            "title": "quo adipisci enim quam ut ab",
            "completed": true
        },
        {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    }
]

//http://localhost:8000/
app.get("/",(req,res)=>{
    res.send("hello /")
})

//http://localhost:8000/a
app.get("/a",(req,res)=>{
    res.send("hello /a")
})

//http://localhost:8000/b
app.get("/b",(req,res)=>{
    res.send("hello /b")
})

//http://localhost:8000/c 
app.get("/c",(req,res)=>{
    res.send("hello /c")
})


app.get("/todos",(req,res)=>{
    res.json(todoList)
})

app.post("/todos",(req,res)=>{
    console.log(req.body);
    res.send('created')
})

// app.get("/todos/:todo_id/:id",(req,res)=>{
    //     console.log(req.params,req.query);
    //     let todo_id
    //     res.json("hello")
    // })
    
    app.get("/todos/:todo_id",(req,res)=>{
        console.log(req.params,req.query);
        let todo_id= +req.params.todo_id;
        let todo={};
        for(let curr of todoList){
            if(curr.id===todo_id){
                todo=curr;
                break;
            }
        }

        console.log(req.data)
        
    res.json(todo)
})


app.listen(8000,(err)=>console.log(err,"server started"))