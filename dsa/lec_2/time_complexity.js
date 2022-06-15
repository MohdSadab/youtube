// Types of analysis
//  1) worst case    2) avg case (assume input is random)         3) best case 

// asymptotic notation
// Big Oh Notation (tight upper bound)
// Omega Notation (tight lower bound)
// theta notation (decides whther the upper and lower bound of the given function (algorithm) are same eg:summation of all element)


// some formula 

//  1+2+3+...+n (summation of n natural number ) = n*(n+1)/2

//  logx^y = ylogx   log x*y = log x +log y

// Timecomplexity (Total time taken by the algorithm)
// Space Complexity (Total space taken by algorithm including input space)
// Auxiliary Space (Extra space taken by the algorithm) 

// function find the indexOf element in array if present return index  if not -1;
function findIndexOfElem(arr,elem){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===elem){  // c means constant
            return i; // c
        }
    }
    return -1; //c 
}

// assume array size =n 
// loop(c+c) + c      =>  n*(2c)+c  => 2cn+c   // Time Complexity  => c(2n+1) 
// space complexity  n(input) + c(extra space which is constant)  => (n+c)
//  auxiliary space  (c)
// console.log(findIndexOfElem([1,2,4,3],1));   // best case omega(1);
// console.log(findIndexOfElem([1,2,4,3,5,6,8],5));   // avg case O(n)
// console.log(findIndexOfElem([1,2,4,3,5,6,8],9)); // worst case O(n)



function prevSum(n){
    let i=1,s=1;
    while(s<=n){
        i++;
        s+=i;
        console.log("*");
    }
}

//  O(under_root(n))


function nested1(n,m){

    let k=0;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=m;j++){
            k++;
        }
    }

    console.log(k);
}


// nested1(4,5); Time complexity O(n*m);



function nested2(n){

    let k=0;
    for(let i=1;i<=n;i++){
        for(let j=i;j<=n;j++){
            k++;
        }
    }

    console.log(k);
}

// nested2(4);  //Time complexity O(n*2);

function nested3(n,m){

    let k=0;
    for(let i=1;i<=n;i++){
        for(let j=i;j<=n;j++){
            for(let l=1;l*l<=m;l++){
                k++;
            }
        }
    }

    console.log(k);
}

// Time Complexity O(n*n*under_root(m))


function nested4(n,m){

    let k=0;
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n;j=j*2){
           k++;
        }
    }

    console.log(k);
}

//  Timecomplexity O(nlogn)