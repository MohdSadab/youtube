console.log("dom")
function onChange(e){
    console.log(e.target)
}

function onKeyChange(e){
    // e.target.setAttribute("class","dynamic")
    console.log(e.target.id)
}

function test(){
    console.log("hacked")
}

let update=false;
let updateTarget=null;
let todos=[];
function add(){
    const input = document.querySelector("#input");
    const value= input.value;
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));
    const elem = document.createElement('div');
    elem.innerText=value;
    elem.setAttribute('class','dynamic');
    elem.addEventListener("click",function(event){
         input.value = event.target.innerText;
         update=true;
         updateTarget=event.target;
    })
    if(update){
        updateTarget.innerText = value;
        update = false;
        updateTarget = null;
    }else{
    const targetElem = document.getElementById('dom');
    targetElem.appendChild(elem);
    }

}


function loadTodos(){

    let result= JSON.parse(localStorage.getItem("todos"));
    todos=[...result];
    todos.forEach(value=>{
    const elem = document.createElement('div');
    elem.innerText=value;
    elem.setAttribute('class','dynamic');
    elem.addEventListener("click",function(event){
         input.value = event.target.innerText;
         update=true;
         updateTarget=event.target;
    })
    const targetElem = document.getElementById('dom');
    if(targetElem)
        targetElem.appendChild(elem);
});
}

loadTodos();

function prevent(e){
    e.stopPropagation();
} 