const score = 100
console.log(score)

const balance = new Number(100)//isme specifically descirbe kiya h ki ye number h
console.log(balance)

console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNum = 123.8997
console.log(otherNum.toPrecision(3))//precision isme decimal ke pehle milega baad vale pe dhyan dena padega ki sure ho ki nhi

const hundreds = 1000000
console.log(hundreds.toLocaleString())//ye output american curreny me denge like hundred,thousand, hundred thousand type
console.log(hundreds.toLocaleString('en-IN'))//ye output hame indian currecny type me denge as you know

// +++++++++++++++++ Maths ++++++++++++++++++

console.log(Math)
console.log(typeof(Math))

console.log(Math.abs(-10))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
console.log(Math.sqrt(2))
console.log(Math.min(1, 2, 4, 0))
console.log(Math.max(0, 1, 2, 10))

console.log(Math.random())//iski value hamesha 0 to 1 ke bich me aayegi aur mostly decimal aati h 
console.log(Math.floor(Math.random()*10) + 1)//hamlog plus 1 is liye kar rahe h kyuki output me zero ko avoid karne ke liye and 10 multiply bhi isi ke liye kar rahe h aur yaha par floor basically round of kar deta h value ko isilye use kar rahe h

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)// ye ek logical maths formula h isko dhyaan dena har baar iss topic pe aate hi