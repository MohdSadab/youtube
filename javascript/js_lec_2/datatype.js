/**

javascript data types
1. Primitive Datatype     2. Non Primitive


Primitive values (immutable datum represented directly at the lowest level of the language).

primitive 
    . Number
    . String
    . Boolean
    . Undefined
    . Bigint
    . Null
    . Symbol

Non Primitive
    . Object (an object is a value in memory which is possibly referenced by an identifier.)


 */

    // number 
    // 1, 1.1 1.111 , -1 ,-0, +0 , +Infinity, -Infinity
    
    // var temp = 102.37887387;
    // console.log(typeof temp);

    // using single quote
    var str =  'dhjdkjjkd';
    var str =  "dhjdhkd";

    // using template literals
    var str =  `
    d;ldl;;ld
    fplfpof
    fkfoof
    fkfooipf`;

    console.log(typeof str)
    // console.log(typeof str,str)


    //  Boolean data type hold true or false

    // var bool  = true;
    var bool  = false;
    console.log(typeof bool, bool);

    var empty;

    console.log(typeof empty,empty);


    // 2^53-1;

    var bigint = 12345n;

    console.log(typeof bigint, bigint)


    var i_am_null = null;

    console.log(typeof i_am_null, i_am_null);

    // symbol;

    var symbl = Symbol('key1');

    console.log(typeof symbl,symbl);


    // non primitive
    // object key value pair value can be anything (primitive non primitive)  key string (if we don't add string convert in string)

    let obj = {"firstName":"Mohd"};

    // second method to add key 
    obj.second = "Sadab";

    // third method
    obj['age'] = 23;

    // forth method
    let key='adress';

    obj[key] = {
        'street':"djlkd",
        'city':"Delhi",
        pincode: 110210,
        "dkjkd":1
    }

    console.log(obj,typeof obj);

    // accessing value from object

    console.log(obj.firstName,"firstname", typeof obj.firstName);

    console.log(obj['second'],"lastname", typeof obj['second']);

    console.log(obj[key],key, typeof obj[key]);

    // immutable (can't update the value);
    // mutable (can update the value)

    // string primitive

    var im_str = 'Immutable';

    // can't update
    im_str[0]= 'P';

    // can replace
    im_str = 'DKJHDHKJHKD'
    console.log(im_str);


    console.log(obj);

    // can update
    obj.firstName = 'Hello'

    console.log(obj);


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

let add = 1+2;

let num1 =1
let num2 =2 

add = num1 + num2;

console.log(add)