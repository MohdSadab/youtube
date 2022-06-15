// javascript inbuilt method timecomplexity

// Time complexity of array 
// accessing array element  // O(1)
// insertion at the end push    O(1) 
// removing an element from the end pop  O(1) 
// Removes the first element from an array  shift   O(n)  => O(1) remove + O(n) shifting of index 
// add element in front of the array   unshift O(n)  =>  O(1) add + O(n) shifting of index 
// searching element index     indexOf    O(n)


// Time complexity of object

//  insertion of a pair 
//  deletion of pair
//  updation 
//  searching the value O(n)
//  searching key (hasOwnPropery)  O(1)
//  Object.keys , Object.values   O(n)
let obj={}
obj.name = "mohd"   //O(1)
obj.age = 20        // O(1)
obj.designation = "Software Engineer"  // O(1)

// delete obj.name  // O(1)

obj.age = 25;  // O(1)

console.log(Object.keys(obj))



// Time complexity of map 
//  insertion  // O(1)
//  deletion    O(1)
//  updation   O(1)
//  searching value   O(n)
//  searching key   O(1)


// Time complexity of set 
//  insertion   O(1)
//  deletion    O(1)
//  updation    O(1)
//  searching   O(1)




