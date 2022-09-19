console.log("external file")

function hacked(){
    console.log("hacked")
}

let toggle=false;
let tE  = null;
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
    
}