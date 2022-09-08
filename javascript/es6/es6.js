// // // let arr =[3,6,4,9];
// // // let arr= "djhdkjhdk"
// // // for(let val of arr){
// // //     console.log(val);
// // // }

// // let user={
// //     "userId": 1,
// //     "id": 1,
// //     "title": "delectus aut autem",
// //     "completed": false
// //   }

// // //   for(let key in user){
// // //     console.log(key,user[key]);
// // //   }

// // const map = new Map();
// // map.set(1,'I am number')
// // map.set('1','I am string')

// // let myObj={
// //     1:"I am number",
// //     '1': "I am string"
// // }

// // console.log(myObj[1],myObj['1']);
// // // console.log(map.get(1),map.get('1'))

// // let arr=[1,4,5,6];

// // let new_arr = arr.map(function(value,index){
// //     return value*value;
// // })

// // // arr.push(10);

// // let even_arr = arr.filter((curr)=>{
// //     return curr%2===0
// // })

// // console.log(even_arr,arr);

// let arr=[1,4,5,6];

// let sum = arr.reduce((res,curr)=>{
//     return res+curr;
// })

// console.log(sum);

// const arr=[1,2,3,4];
// arr.push(10);
// arr.pop();
// arr.shift();
// arr.unshift(30);

// arr=[];
// console.log(arr);

// arr.some()

// let arr=[1,2,3,5,6];

// let arr2= [].concat(arr);

// arr2[0]=4
// console.log(arr2,arr);

// let arr=[[1,2],3,5,6];

// let arr2= [].concat(arr);

// arr2[0][1]=4
// // console.log(arr2,arr);

// let str="hello";
// str=str.split('');
// console.log(str);
// str[0]='p';
// str=str.join('')
// console.log([...str]);


// let str = "hello-world-sthdh-dhdh"
// str=str.replaceAll('-',' ');
// console.log(str);

function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.printName=function(){
    console.log(this.name)
}


// const p1 = new Person("abc",20);

// console.log(p1);

// let obj ={
//     name:"start"
// }

// let obj2={
//     age:20,
//     __proto__:obj
// }

// console.log(obj2,obj);

// function temp(){
//     console.log(this,window);
// }

// normal invocation this point to global window object
// temp();

// invocked as a constructor
// const obj = new temp();
var name="Hello window"
let obj={
    name: "Sadab",
    printName:function(city,state){
        console.log(this.name,city,state);
    }
}

// invovking the method using object this is pointing to curr obj
// obj.printName();



// invovking the method using normal invocation this is pointing to global window
// let pName= obj.printName.bind(obj,"kanpur");
// pName("u.p");
// obj.printName.call(obj,"kanpur","u.p")
// let obj={
//     name: "Sadab",
//     printName:()=>{
//         console.log(this.name,this);
//     }
// }


// this in arrow function checks it's context where it get called;
// obj.printName();

let obj1 ={
    name:"i am object 1"
}

function printName(age,state){
    // console.log(this.name,age,state);

    setTimeout(function(){
        console.log(this,">>>")
    })

    setTimeout(()=>{
        console.log(this,">>>")
    })
}

printName.call(obj1,"sggd","djjdj")