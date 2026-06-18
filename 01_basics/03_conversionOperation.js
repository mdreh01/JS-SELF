let score = true
//both are same typeof() bas alag alag likhne ka tarika h
console.log(typeof score) //output string
console.log(typeof (score)) //output string

let valInNumber = Number(score) //conversion of strign type into number type
console.log(typeof score) 
console.log(typeof valInNumber) //output is in number
console.log(valInNumber) //output is NaN(Not-a-Number)

//if we take 'null' value of the score it will give output as zero(0)

//if we take 'undefined' value of the score it will give output as NaN

//if we take boolean value like 'true or false' of the score value it will return true-1 or false-0

//if we take a string at the place of the score value it will not convert in the number because a string cannot convert into number it will give output as NaN

/* "33" => 33
   "33aabc" => NaN
   true => 1; false => 0
*/   

let isLoogedIn = "Rehan"
let booleanIsLoogedIn = Boolean(isLoogedIn) //conversion of '1' into 'boolean'
console.log(booleanIsLoogedIn) //output is true
console.log(typeof booleanIsLoogedIn) //type is boolean

// 1 => true; 0 => false
// "" => false
// "Rehan" => true

let someNumber = 33
let stringNumber = String(someNumber) //conversion of number into string
console.log(stringNumber)
console.log(typeof stringNumber) //output is string
//output me dikhega number hi but lekin vo backend me string ho chuka h jab ham typeof() karenge tab pata chal jayega

// **************OPERATIONS*************

let value = 3
let negValue = -value
console.log(value)
console.log(negValue)
console.log(typeof value)
console.log(typeof negValue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2**3)

let str1 = "hello"
let str2 = "Rehan"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + "2") //both are string so easily add ho jayenge lekin mathematical nhi like '12' aise
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true) //output  is '1'
console.log(+"") //output is '0'

let num1, num2, num3
num1 = num2 = num3 = 2 + 2 //this is not the right way to write a code in this code readbility is dead 

let gameCounter = 100
++gameCounter //this is increment operator and this is prefix-increment operator
console.log(gameCounter) //output is 101
