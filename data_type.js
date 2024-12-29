/* data types---->Primitive and Non Primitive */

/* 1.Primitive----->number,string,boolean,Symbol,undefined,null,BigInt
2.Non-Primitive-->Array,Object,function.
 */

let number = 49.99;
console.log(`These all are numeric values: ${number}, ${NaN}, ${Infinity}, ${-Infinity}`);

let id=Symbol("Abc")
let id2=Symbol("Abc")

if (id2!==id) {
    console.log("A unique memory spaces allocated..........");
    
}



