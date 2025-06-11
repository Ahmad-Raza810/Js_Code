
//concept of hoisting.
console.log(test)
var  test;
let   test2;
const test3="val";
console.log(test,test2,test3)


var stop=5


//By Default A function return undefined
function greet() {
    console.log("hello from js function")
    stop--;
    if(stop==1)
    return
    greet()   
}

console.log(typeof greet());




