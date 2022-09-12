function print(){
    console.log("js");
}
// print();

// function sum(a,b){
//     var ans = a+b;
//     return ans;
// }

// var ans= sum(10,20);

// console.log(ans);


function sum(...args){
   
    var ans=0;
    for(let i=0;i<args.length;i++){
        ans+=args[i];
    }
    return ans;
}   

var ans= sum(10,20,20,30);

// console.log(ans);




function sum(a,b,...args){
   
    var ans=0;
    for(let i=0;i<args.length;i++){
        ans+=args[i];
    }
    return ans;
}   

var ans= sum(10,20,20,30);

// console.log(ans);

{
    // block level scope
    let temp=20;
}

{
    // function level scope
    var temp_var=20;
}


// functionScope();
// function  functionScope(){
//     // function level scope
//     var temp_func=20;
//     console.log("hoisting")
// }

// console.log(temp_func);

// var anonymousFun =function(){

//     console.log("anonymous");
// }
// anonymousFun();

var arrowFun =()=>{

    console.log("anonymous");
}
// arrowFun();

setTimeout(function(){
    console.log("first");
})

setTimeout(function(){
    console.log("second");
},1000)

console.log("third")

setTimeout(function(){
    console.log("fourth");
},500);