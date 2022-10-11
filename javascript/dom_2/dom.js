console.log("external file")

function hacked(){
    console.log("hacked")
}

let toggle=false;
let tE  = null;
let todos=JSON.parse(localStorage.getItem("todos")) || [];
function add(ev){
    const input = document.querySelector("#input");
    const val = input.value;
    
    


    if(toggle){
        tE.innerText = val;
        toggle=false;
        tE=null;
    }else{
    const elem = document.createElement("div");
    elem.setAttribute("class","dynamic");
    todos.push(val);
    elem.addEventListener("click",function(event){
        const elem = event.target;
        const val = elem.innerText;
        input.value=val;
        toggle = true;
        tE=event.target;
    })
    // elem.innerText = "<div onclick='hacked()'>Hello World</div>";
    elem.innerText = val ;
    const targetElem = document.querySelector("#dom");
    targetElem.appendChild(elem);
    }
    
    localStorage.setItem("todos",JSON.stringify(todos));
}

function display(){

   
    todos.forEach(val=>{
        const elem = document.createElement("div");
        elem.setAttribute("class","dynamic");
        elem.innerText = val ;
        elem.addEventListener("click",function(event){
            const elem = event.target;
            const val = elem.innerText;
            input.value=val;
            toggle = true;
            tE=event.target;
        })
        const targetElem = document.querySelector("#dom");
        console.log(targetElem,">>>>>>>>>>>>>")
        targetElem.appendChild(elem);
    })
}

// display();

function eventHandler(event){
    console.log(event.target,event.currentTarget,event.currentTarget.getAttribute("class"));
    if(event.currentTarget.getAttribute("class")==="child"){
        event.stopPropagation();
    }
}


const btn = document.querySelector(".btn")
btn.addEventListener("click",function(){
    // console.log("clicked");
    // const xhr = new XMLHttpRequest();
    // xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1");

    // xhr.onloadstart=function(){
    //     const elem = document.querySelector("#response")
    //     elem.innerHTML=`<div class="spinner-border" role="status">
    //     <span class="visually-hidden">Loading...</span>
    //   </div>`
    // }

    // xhr.onload=function(){
    //     console.log("get response",this.response);
    //     const elem = document.querySelector("#response")
    //     elem.innerHTML= this.response;

    //     const xhr = new XMLHttpRequest();
    //     xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1/comments");
    
    //     xhr.onloadstart=function(){
    //         const elem = document.querySelector("#comments")
    //         elem.innerHTML=`<div class="spinner-border" role="status">
    //         <span class="visually-hidden">Loading...</span>
    //       </div>`
    //     }
    
    //     xhr.onload=function(){
    //         console.log("get response",this.response);
    //         const elem = document.querySelector("#comments")
    //         elem.innerHTML= this.response;
    //     }

    //     xhr.send();
    
    // }

    // xhr.send();
    // console.log("asynchronous")
    fetch('https://jsonplaceholder.typicode.com/todo')
  .then(response => response.json())
  .then(json => console.log(json)).catch(error=>{
    console.log(error);
  })
    
})

const promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("successfully resolved");
    },3000)
})

promise.then((data)=>console.log(data))