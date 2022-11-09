// console.log("hello world");
// console.log(__dirname);
// console.log(__filename);
const http = require("http");


let todos =[
    {
        'id':1,
        content:"dkjkldlk dkljdljd djdjkl"
    }
]

const server = http.createServer((req,res)=>{

    console.log(req.url);
    if(req.url=="/"){
       return res.end("Home page")
    }

    if(req.url=="/about"){
        return res.end("About page")
    }

    if(req.url=="/todos" && req.method=="GET"){

        res.setHeader('Content-Type','application/json')
        // res.writeHead(400,'Bad Request')
        // res.statusCode=400
        return res.end(JSON.stringify(todos))
    }

    if(req.url=="/todos" && req.method=="POST"){

       let data =''
       req.on("data",(chunk)=>{
         data += chunk.toString();
       })

       req.on("end",(chunk)=>{
          todos.push(JSON.parse(data))
      })

      return res.end('created successfully')
    }
    
    res.end("Hello world");
})

server.listen(8000,(error)=>console.log(error," process started at port 8000"))

// const path = require("path");
// console.log(__dirname)
// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.join(__dirname,"hello","file"))
// console.log(path.join(__dirname,"hello","file",".."))

// const fs = require("fs");
// const path = require("path");

// path.join(__dirname,'hello')
// const des = path.join(__dirname,'..','javascript','chitkara')
// console.log(des,path.join(__dirname,'javascript','chitkara'));
// fs.mkdir('hellos/lkjdjk/dkjdkj',{recursive:true},function(err){
//     console.log(err,"directory successfully created")
// })

// fs.mkdir(des,{recursive:true},function(err){
//     console.log(err,"directory successfully created")
// })

// fs.writeFile('index.html',"<h1>hello world dhjdkhdhkkj</h1>",function(err){
//     console.log(err)
// })

// fs.appendFile('index.html',"\n<h1>hello world dhjdkhdhkkj</h1>",function(err){
//     console.log(err)
// })

// fs.readFile('index.html',(err,data)=>{
//     if(err) throw err;
//     console.log(data.toString('utf-8'));
// })

// const data =fs.readFileSync('index.html');
// console.log(data.toString());

// const fsPromise = require("fs/promises");

// fsPromise.readFile('index.html').then(data=>console.log(data.toString())).catch(err=>console.log(err))

// const EventEmitter = require("events");

// class Logger extends EventEmitter{
//     log(data){
//         this.emit('log',data);
//     }
// };

// const logger = new Logger();

// logger.on('log',function(arg){
//     console.log(arg,"called");
// })

// logger.once('log',function(arg){
//     console.log(arg,"called");
// })

// logger.emit('event_name','Hello Args')
// logger.log('dkjdlkjdlj')
// logger.log('dkjdlkjdlj')
// logger.log('dkjdlkjdlj')
// logger.log('dkjdlkjdlj')