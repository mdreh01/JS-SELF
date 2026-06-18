// PRIMITIVE DATA-TYPE:--

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*null - mtlb khali
undefined - mtlb variable declare h memory space declare h sirf value assign nhi ki gyi h isko undefined bolte h*/

//JavaScript is a dynamically typed language, meaning that type checks are performed at runtime during code execution rather than beforehand at compile time.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null //ouput is null
let userEmail //output is undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)
//idhar symbol me dono alag alag h aur output me bhi false aaya h kyuki variable alag-alag h bhale symbol id('123') kyu na ho variable change mtlb vo alag-alag symbol me jaa chuka h

// const bigNumber = 3456543576654356754n //it is bigInt

// REFERENCE(NON-PRIMITIVE DATA-TYPE):--
//non-primitive data-types returns object from typeof() function

//Types:- Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"] //THIS IS ARRAY
//array ka typeof object aayega

let myObj = {
    name:"rehan",
    age: 18,
    //curly braces ke andar jo kuch bhi h vo object h
} 
//this return object

const myFunction = function(){
    console.log("hello world")
}
//this is function
//this return function but we called it object function

console.log(typeof outsideTemp)
//null ka typeof object aayega
