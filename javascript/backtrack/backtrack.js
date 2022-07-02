// solveProblem(x)
//     if x is not a solution
//         return
//     if x is a new solution
//         add to list of solutions
//     do some work
//     solveProblem(updated value of x)
//     restore the previous work

// State Space Tree

let arr=[5,6,2,9];
const max= Math.max(...arr);

const hash= [...new Array(max+1)].fill(false);

for(let val of arr){
    hash[val]=true;
}

let res=[];

for(let i=1;i<=max;i++){
    if(!hash[i]){
        res.push(i);
    }
}

console.log(res);


