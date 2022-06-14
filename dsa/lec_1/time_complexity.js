// what is algorithm ? (step by step instruction to solve problem)
// why analysis of algorithm?
// how to compares algorithm ?
// what is rate of growth ?

// let b=c=10; //e
// let a = b +c;   // c
// let c = d* e    // d
// c= a-b;  // c
// c=c/d;  // c

let arr= [4,5,3,2,6,8,9];

// find the sum of all elements of the array

function getSum(arr){
    let currSum=0;  //c 
    for(let i=0;i<arr.length;i++){
        currSum= currSum+arr[i]; // loop(c)
    }
    return currSum;  //c 
}

//  suppose array size is n 
//  timecomplexity  = c + loop(c) + c   => c + n*c + c  =>  nc+2c => c(n+2)

console.log(getSum([4,5,3,2,6,8,9]))
console.log(getSum([4,5,3,2,6,8,9,1,2,3,4,5,6,7]))

// function find the indexOf element in array if present return index  if not -1;
function getIndexOfElem(arr){
    
}