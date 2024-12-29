/* Creating Strings
Using String Literals: */


let single = 'Single quotes';
let double = "Double quotes";
let template = `Template literals`;

/* Using the String Constructor: */

let stringObj = new String("Hello"); // Creates a String object
let primitiveString = String("Hello"); // Converts to a primitive string


let str = "Hello i am Hero";
console.log(str.length); // 5

console.log(str[4]);


"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"

//indexOf and lastIndexOf()
//first occuring substring from starting and ending
console.log(str.indexOf("He"));

console.log(str.lastIndexOf("He"));

