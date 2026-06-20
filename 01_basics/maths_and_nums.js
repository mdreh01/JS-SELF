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