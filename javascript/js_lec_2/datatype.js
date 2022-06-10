 /**

// javascript data types
// 1. Primitive Datatype     2. Non Primitive


// Primitive values (immutable datum represented directly at the lowest level of the language).

// primitive 
//     . Number
//     . String
//     . Boolean
//     . Undefined
//     . Bigint
//     . Null
//     . Symbol

// Non Primitive
//     . Object (an object is a value in memory which is possibly referenced by an identifier.)


//  */

//     // number 
//     // 1, 1.1 1.111 , -1 ,-0, +0 , +Infinity, -Infinity
    
//     // var temp = 102.37887387;
//     // console.log(typeof temp);

//     // using single quote
//     var str =  'dhjdkjjkd';
//     var str =  "dhjdhkd";

//     // using template literals
//     var str =  `
//     d;ldl;;ld
//     fplfpof
//     fkfoof
//     fkfooipf`;

//     console.log(typeof str)
//     // console.log(typeof str,str)


//     //  Boolean data type hold true or false

//     // var bool  = true;
//     var bool  = false;
//     console.log(typeof bool, bool);

//     var empty;

//     console.log(typeof empty,empty);


//     // 2^53-1;

//     var bigint = 12345n;

//     console.log(typeof bigint, bigint)


//     var i_am_null = null;

//     console.log(typeof i_am_null, i_am_null);

//     // symbol;

//     var symbl = Symbol('key1');

//     console.log(typeof symbl,symbl);


//     // non primitive
//     // object key value pair value can be anything (primitive non primitive)  key string (if we don't add string convert in string)

//     let obj = {"firstName":"Mohd"};

//     // second method to add key 
//     obj.second = "Sadab";

//     // third method
//     obj['age'] = 23;

//     // forth method
//     let key='adress';

//     obj[key] = {
//         'street':"djlkd",
//         'city':"Delhi",
//         pincode: 110210,
//         "dkjkd":1
//     }

//     console.log(obj,typeof obj);

//     // accessing value from object

//     console.log(obj.firstName,"firstname", typeof obj.firstName);

//     console.log(obj['second'],"lastname", typeof obj['second']);

//     console.log(obj[key],key, typeof obj[key]);

//     // immutable (can't update the value);
//     // mutable (can update the value)

//     // string primitive

//     var im_str = 'Immutable';

//     // can't update
//     im_str[0]= 'P';

//     // can replace
//     im_str = 'DKJHDHKJHKD'
//     console.log(im_str);


//     console.log(obj);

//     // can update
//     obj.firstName = 'Hello'

//     console.log(obj);


// operators in javascript

/**
Arithmetic Operators
+ addition
- substraction
* multiplication
/ division
% modulus
** exponential
++ increment 
-- decrement

Comparison Operators
>
<
>=
<=
!=
==
===
!==


Logical Operators
&& and operator
||  or operator
! not operator


assignment operator
=
+=
-=
/=
*=
%=


Ternary Operator: 
: ? Operator : 


typeof
returns typeof variable;
*/


// + operator addition of two numbers;

let num1 =10;
let num2 =20;

let num3 = num1+num2;

console.log(num3);

// + concatenation loperand or roperand  is not a number or boolean 

// num3 = num2 + "10";
// console.log(num3); // 2010

// num3 =  "10" + num2;
// console.log(num3);   // 1020

// num3 =  false + num2;
// console.log(num3);   //20

// num3 =  true + num2;
// console.log(num3);   //21

// num3 =  null + num2;
// console.log(num3);   //20

// num3 =  undefined + num2;
// console.log(num3);   //20




// //  - opertaor

// num3 = num1 - num2;
// console.log(num3);

// num3 = num2 - num1;
// console.log(num3);

// num3 = num2 - "";
// console.log(num3)  //20-0 = 20

// num3 =""- num2 ;
// console.log(num3)  // 0 - 20 = -20

// num3 = num2 - null;
// console.log(num3) //20-0 = 20

// num3 = num2 - undefined;
// console.log(num3) //20-0 = NaN

// num3 = num2 - "sjkdkjd";
// console.log(num3) //20-0 = NaN


// //  - opertaor

// num3 = num1 * num2;
// console.log(num3);

// num3 = num2 * num1;
// console.log(num3);

// num3 = num2 * "";
// console.log(num3)  //20*0 = 0

// num3 =""* num2 ;
// console.log(num3)  // 0 * 20 = 0

// // num3 = num2 - null;
// // console.log(num3) //20-0 = 20

// // num3 = num2 - undefined;
// // console.log(num3) //20-0 = NaN

// // num3 = num2 - "sjkdkjd";
// // console.log(num3) //20-0 = NaN

// num3 = num2/num1;
// console.log(num3)

// num3 = num1/num2;
// console.log(num3)

// num3 = num2/"";
// console.log(num3) // infinity

// num3 = ""/num2;
// console.log(num3) // 0


// num3 = 30%num2;
// console.log(num3)

// num3 = num2%num2;
// console.log(num3)

// num3 = num1%num2;
// console.log(num3)

// num3 = ""%num2;
// console.log(num3)

// num3 = 2**4;
// console.log(num3)


// num3 = 2**0;
// console.log(num3)

// compairision operator returns true or false
// console.log(num1>num2, `${num1}>${num2}`);
// console.log(num1<num2, `${num1}<${num2}`);

//  lval operator rval  
// either lval > rval or lval=rval
// console.log(3>=3);
// console.log(3>=4);
// console.log(3>=2);
// console.log(3>2>1, `3>2>1`);

// console.log(3<=3);
// console.log(3<=4);
// console.log(3<=2);
// console.log(3<="2");


//  == compaires(value) lval to rval  if
// console.log(1==1);
// console.log(1==2);
// console.log(1=='1');


//  === compires value and datatype  both are equal true else false

// console.log(1===1);
// console.log(1===2);
// console.log(" 1==='1'  ",1==='1',"    1=='1'  ", 1=='1', typeof 1, typeof '1');

// === !== strict compairision
console.log(1!=1);
console.log(1!=2);
console.log(" 1==='1'  ",1!=='1',"    1=='1'  ", 1!='1');

/**
true && true
true
true && false
false
true || false
true
false || true
true
! false
true
!true
false
 */

// let bool1 = true;
// let bool2 = [1,3,4,5];

// let bool3 = bool1 && bool2;

// // bool3 have value of bool2(rVal) if bool1(lval) is true
// // bool3 is false if bool1(lval) is false
// console.log(bool3)

// let bool1 = false;
// let bool2 = [1,3,4,5];

// let bool3 = bool1 || bool2;

// // bool3 have value of bool1(rVal) if bool1(lval) is true
// // bool3 have value of bool2(rval) if bool1(lval) is false
// console.log(bool3)

num3 = 10;
num3 +=20;  // num3+=20 => num3=num3+20
console.log(num3);
num3 = 10;
num3 *=20;  // num3*=20 => num3=num3+20
console.log(num3);

num3 = 10;
num3 -=20;  // num3-=20 => num3=num3-20
console.log(num3);


num3 = 10;
num3 %=20;  // num3%=20 => num3=num3%20
console.log(num3);

num3 = 10;
num3 /=20;  // num3/=20 => num3=num3/20
console.log(num3);


let greater = 3<4 ? '3 is less then 4 true' : '3 is grater then 4 false';

console.log(greater)