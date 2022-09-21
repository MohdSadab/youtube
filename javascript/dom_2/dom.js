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