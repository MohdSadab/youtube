// // console.log("hello world");
// // console.log(__dirname);
// // console.log(__filename);
// const http = require("http");


// let todos =[
//     {
//         'id':1,
//         content:"dkjkldlk dkljdljd djdjkl"
//     }
// ]

// const server = http.createServer((req,res)=>{

//     console.log(req.url);
//     if(req.url=="/"){
//        return res.end("Home page")
//     }

//     if(req.url=="/about"){
//         return res.end("About page")
//     }

//     if(req.url=="/todos" && req.method=="GET"){

//         res.setHeader('Content-Type','application/json')
//         // res.writeHead(400,'Bad Request')
//         // res.statusCode=400
//         return res.end(JSON.stringify(todos))
//     }

//     if(req.url=="/todos" && req.method=="POST"){

//        let data =''
//        req.on("data",(chunk)=>{
//          data += chunk.toString();
//        })

//        req.on("end",(chunk)=>{
//           todos.push(JSON.parse(data))
//       })

//       return res.end('created successfully')
//     }
    
//     res.end("Hello world");
// })

// server.listen(8000,(error)=>console.log(error," process started at port 8000"))

// // const path = require("path");
// // console.log(__dirname)
// // console.log(path.basename(__filename))
// // console.log(path.dirname(__filename))
// // console.log(path.join(__dirname,"hello","file"))
// // console.log(path.join(__dirname,"hello","file",".."))

// // const fs = require("fs");
// // const path = require("path");

// // path.join(__dirname,'hello')
// // const des = path.join(__dirname,'..','javascript','chitkara')
// // console.log(des,path.join(__dirname,'javascript','chitkara'));
// // fs.mkdir('hellos/lkjdjk/dkjdkj',{recursive:true},function(err){
// //     console.log(err,"directory successfully created")
// // })

// // fs.mkdir(des,{recursive:true},function(err){
// //     console.log(err,"directory successfully created")
// // })

// // fs.writeFile('index.html',"<h1>hello world dhjdkhdhkkj</h1>",function(err){
// //     console.log(err)
// // })

// // fs.appendFile('index.html',"\n<h1>hello world dhjdkhdhkkj</h1>",function(err){
// //     console.log(err)
// // })

// // fs.readFile('index.html',(err,data)=>{
// //     if(err) throw err;
// //     console.log(data.toString('utf-8'));
// // })

// // const data =fs.readFileSync('index.html');
// // console.log(data.toString());

// // const fsPromise = require("fs/promises");

// // fsPromise.readFile('index.html').then(data=>console.log(data.toString())).catch(err=>console.log(err))

// // const EventEmitter = require("events");

// // class Logger extends EventEmitter{
// //     log(data){
// //         this.emit('log',data);
// //     }
// // };

// // const logger = new Logger();

// // logger.on('log',function(arg){
// //     console.log(arg,"called");
// // })

// // logger.once('log',function(arg){
// //     console.log(arg,"called");
// // })

// // logger.emit('event_name','Hello Args')
// // logger.log('dkjdlkjdlj')
// // logger.log('dkjdlkjdlj')
// // logger.log('dkjdlkjdlj')
// // logger.log('dkjdlkjdlj')

const express = require('express');
const app = express();


let count=1;
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

const logger = function(req,res,next){
    console.log("request is logged");
    req.data="hello world data"
    next();
}




app.use(logger)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.send("Hello WOrld")
})

app.get("/todos",(req,res)=>{
    res.status(200).json(todoList);
})

app.post("/todos",(req,res)=>{
    
    console.log(req.body)

    // req.on('data',(chunk)=>{
    //     console.log(chunk.toString());
    // })
    res.send("hekllo");
})

// http://localhost:8000/todos/1/

app.get("/todos/:id/:post_id",function(req,res){
    console.log(req.params,req.query,req.data);
    return res.send('hello ')
})


app.listen(8000,(err)=>console.log("running on port 8000"))














