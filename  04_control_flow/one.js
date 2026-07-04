// if
// const isUserLoggedIn = true
// const temp = 40
// if (temp === 40){ //condition should be true to execute the code block
//     console.log("True")
// }
// else{                       //if-else to conditional statement h inn dono me se koi ek hi execute hoga
//     console.log("False")
// }
// console.log("Executed")//ye to hamesha execute hoga


// <, >, <=, >=, ==, ===, !=, !==


// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)// error because power is defined in if block so it is not accessible outside the block


const balance = 1000
// if(balance > 500){
//     console.log("You are Free to buy")
// }

//if(balance > 500) console.log("You are Free to buy"), console.log("You have sufficient balance")//if block me sirf ek hi statement h to curly braces ki jarurat nhi h aur ye tareeka sahi nhi h code likhne ka code readbility ke liye curly braces ka use karna chahiye

// if (balance < 500) {
//     console.log("less than 500") 
// } 
// else if (balance < 750) {
//     console.log("less than 750")
// }
// else if(balance < 900){
//     console.log("less than 900")
// }
// else {
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){// && is logical operator and it will check both the conditions if both are true then only it will execute the code block
    console.log("You can buy")
}

if(loggedInFromGoogle || loggedInFromEmail){// || is logical operator or it will check both the conditions if any one of the condition is true then it will execute the code block
    console.log("User logged in")
}