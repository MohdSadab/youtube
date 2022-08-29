
// function print(){

//     console.log("hello");
// }

// // print();

// function sum(...args){
//     var ans=0;
//     for(var i=0;i<args.length;i++){
//         ans+=args[i];
//     }
//     return ans;
// }


// function sum(a,...args){
//     var ans=0;
//     for(var i=0;i<args.length;i++){
//         ans+=args[i];
//     }
//     return ans;
// }

// let mySum= sum(10,20,30);

// console.log(mySum);


// var init;


// function sum(){

// }

// init=20;


// // function fn() {
// //     fn();
// // }

// // fn(); // stack overflow

// var myFun = function(){


// }

// var myFun = ()=>{

    
// }

//  arrow function as lambda
// var sumOf = (a,b)=> a+b;   
// (a,b)=>{
// return a+b;
//}
// sumOf(10,20)

// setTimeout(function(){
//     console.log("first")
// })

// setTimeout(function(){
//     console.log("second")
// },500)

// console.log("last");

// myCustomSum(1)(2)();

// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     })
// }

// callback 
function temp(cb){

   let val= cb();
   console.log(val);
}

temp(function(){
    console.log("callback");
    return "return value"
})