//concept of hoisting
//var>>>>>global and functional scope
//let and const >>>>>>>local and block scope
//console.log(vari)
vari=10
myfunc=function(){
var myVar=10
let mylet=10 
const myConst=10
console.table([myVar,mylet,myConst,vari])
}
console.log(vari)
myfunc()
//console.log(myVar)
{
    console.log(vari) 
}
