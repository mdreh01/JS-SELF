const name = "Rehan"
const repoCount = 50

// console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Rehan-p-p-l')//idhar hamlog ne new object create kar diya. 'new' key-word ka use karke

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('R'))

const newString = gameName.substring(0, 4)//first number ki value include hogi aur last number ki nhi hogi vo exclude hoga
console.log(newString)

const anotherString = gameName.slice(-8, 4)//slice me ham neagtive value bhi dete h 
console.log(anotherString)

const newStringOne = "    Rehan   "
console.log(newStringOne)
console.log(newStringOne.trim())//extra spaces khtm hogaya trim work function

const url = "https://rehan.com/rehan%20hacker"
console.log(url.replace('%20', '-'))//idhar pehle likha hua replace ho jayega last likhe vale se

console.log(url.includes('rehan'))//puch raha h ki ye keyword hai ki nhi string me

console.log(gameName.split('-'))//ye split kardega jo hamne splitter likha h vo-vo split kar dega jaise aap output me dekh sakte h 'Rehanppl' output =>['Rehan', 'p', 'p', 'l'] ye aayega 