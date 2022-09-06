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

let arr=[[1,2],3,5,6];

let arr2= [].concat(arr);

arr2[0][1]=4
console.log(arr2,arr);