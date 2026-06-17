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