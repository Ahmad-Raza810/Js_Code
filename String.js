/* Creating Strings
Using String Literals: */


let single = 'Single quotes';
let double = "Double quotes";
let template = `Template literals`;

/* Using the String Constructor: */

let stringObj = new String("Hello"); // Creates a String object
let primitiveString = String("Hello"); // Converts to a primitive string


let str = "Hello i am Hero";
console.log(str.length); // 15

console.log(str['s']);


"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"

//indexOf and lastIndexOf()
//first occuring substring from starting and ending
console.log(str.indexOf("He"));

console.log(str.lastIndexOf("He"));

console.log(str.slice(-1,8));        //exclude last index and accept negative index
"hello".substring(1, 4); // "ell"    //no negative index
"hello".substr(1, 3); // "ell"       //include last index



