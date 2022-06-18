/**
7 Abstract Operations
These operations are not a part of the ECMAScript language; they are defined here solely to aid the specification of the semantics of the ECMAScript language. Other, more specialized abstract operations are defined throughout this specification. 


7.1 Type Conversion
The ECMAScript language implicitly performs automatic type conversion as needed.
The BigInt type has no implicit conversions in the ECMAScript language; programmers must call BigInt explicitly to convert values from other types.
1n+1  // gives error


7.1.1 ToPrimitive ( input [ , preferredType ] )
The abstract operation ToPrimitive takes argument input (an ECMAScript language value) and optional argument preferredType (string or number) and returns either a normal completion containing an ECMAScript language value or a throw completion. It converts its input argument to a non-Object type. If an object is capable of converting to more than one primitive type, it may use the optional hint preferredType to favour that type. It performs the following steps when called:


ToString
ToNumber
ToBoolean
ToObject

*/


//A JavaScript function is a block of code designed to perform a particular task. A JavaScript function is executed when "something" invokes it (calls it).



//  Internally javascript mostely used recursion functions 
//  this is javascript feature wo feature jisse bachna behtar hai 
// 3 * "3" 
// 1 + "2" + 1 

// true + true 
// 10 - true 


// const foo = {
//   valueOf: () => 2
// }
// 3 + foo 
// 4 * foo

// const bar = {
//   toString: () => " webiseasy make development easy :)"
// }
// 1 + bar 


// 4 * [] 
// 4 * [2] 
// 4 + [2] 
// 4 + [1, 2] 
// 4 * [1, 2] 

// "string" ? 4 : 1 
// undefined ? 4 : 1

// Strings
// Whenever you pass a string as an operand in a numeric expression involving either of these operators: -, *, /, %, the number's conversion process is similar to calling the in-built Number function on the value
console.log("hello world")
3 * "3" // implicit coercion 9
3 * Number("3") // explicit coercion  9
Number("5") // 5

Number("1.")  //1
Number("1.34") // 1.34
Number("0") //0
Number("012")  //12

Number("1,")  //1
Number("1+1")   // NaN
Number("1a")   // NaN
Number("one") // NaN
Number("text") // NaN

// parseInt vs parseFloat vs Number vs +(unary operator)
/**
 * hello world
parseInt(1.34)
1
parseInt(1.54)
1
parseInt(2222.54)
2222
parseInt("1233.56")
1233
parseFloat("1233.56")
1233.56
parseFloat("1233")
1233
parseFloat("1233.55")
1233.55
Number("1")
1
Number("1.5")
1.5
+"12"
12
+12
12
+"1.34"
1.34
 */
// https://stackoverflow.com/questions/17106681/parseint-vs-unary-plus-when-to-use-which/17106702#17106702
// 1000000 iterations each one
// node test_speed
// Testing ~~, time: 5 ms
// Testing parseInt with number, time: 25 ms
// Testing parseInt with string, time: 386 ms
// Testing Math.floor, time: 18 ms



// The case for the + operator

//1-> Mathematical addition
//2-> String concatenation
1+1 //2
1+"jdjdj" +2 // '1jdjdj2'
/**
Objects
Most Javascript Object conversions usually result in [object Object], For example
"name" + {} // "name[object Object]
Every javascript Object inherits a toString and valueOf method, that is called whenever an Object is to be converted to a string. The return value of the toString method is used for such operations as string concatenation and mathematical expressions.
*/

// const foo = {
//     toString: () => 4
//   }
  
//   2 * foo 
//   2 / foo 
//   2 + foo 
//   "four" + foo 
  
//   const baz = {
//     toString: () => "four"
//   }
  
//   2 * baz 
//   2 + baz 
  
//   const bar = {
//     toString: () => "2"
//   }
  
//   2 + bar 
//   2 * bar

/**

4.valueOf()  
let a=4;
a.valueOf()

*/


/**
Array objects
The inherited toString method of Arrays work abit differently, it works in a way similar to calling the join method of an array without any arguments.
*/

// [1,2,3].toString() 
// [1,2,3].join() 
// [].toString()
// [].join()

// "me" + [1,2,3] 
// 4 + [1,2,3]
// 4 * [1,2,3] 
// 4*[]
// 4 * Number([].toString())

/**
The valueOf method
It is also possible to define a valueOf method that will be used by Javascript whenever you pass an Object where it expects a string or numeric value.
When both the toString and valueOf methods are defined on an Object, Javascript uses the valueOf method instead.


*/


// const foo = {
//     valueOf: () => 3
//   }
  
//   3 + foo 
//   3 * foo 

  const bar = {
    toString: () => 2,
    valueOf: () => 5
  }
  
//   "sa" + bar 
//   3 * bar 
//   2 + bar 

/**
There are a handful of values in Javascript that return falsy values, they are:
false
0
null
undefined
""   //  '          '   if string have space it returns true
NaN
-0 
*/

/**
about NaN
NaN === NaN

Number.isNaN(NaN) 
Number.isNaN("name") 

Beware of the global isNaN function, it attempts to coerce it's argument before checking if it's NaN. For example,
isNaN("name") // true
isNaN("1") // false

The global isNaN function should be avoided, the way it works is similar to the function below
function coerceThenCheckNaN(val) {
  const coercedVal = Number(val)
  return coercedVal !== coercedVal ? true : false
}

coerceThenCheckNaN("1a") // true
coerceThenCheckNaN("1") // false
coerceThenCheckNaN("as") // true
coerceThenCheckNaN(NaN) // true
coerceThenCheckNaN(10) // false
*/