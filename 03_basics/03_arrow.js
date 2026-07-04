const user = {
    username: "Rehan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
        console.log(this);//this jo hai vo current context ya current value ki baat karta h
        
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this)//ye sabke bahar h global me aur global me this ka value window object hoga aur yaha par global me koibhi current context/value nhi h

// BROWSER KE ANDAR GLOBAL OBJECT, WINDOW HO JATA H. AUR NODE JS KE ANDAR GLOBAL OBJECT GLOBAL HAI.

// function chai(){
//     let username = "Mohd Rehan"
//     console.log(this.username)//'this' ka use hamlog sirf object me karenge, function me nhi
// }
// chai()


// const chai = function(){
//     let username = "Rehan"
//     console.log(this.username)
// }
// chai()


// const chai = () => {
//     let username = "Rehan"
//     console.log(this.username)
// }
// chai()


// const addTwo = (num1, num2) => {   
//     return num1 + num2             //curly braces use kiya to return key-word likhna hi padega 
// }
// console.log(addTwo(1, 1))


const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(1, 1))
//both are same jaahe paranthesis me use kare ya na kare, lekin paranthesis use karo code-readbility acchi hoti h
const addThree = (num1, num2) => (num1 + num2)
// console.log(addThree(1, 1))


const addFour = (num1, num2) => ({username: "Rehan"})//paranthesis me object ko wrap karna padega, otherwise vo curly braces ko function ke body ke liye samjhega
console.log(addFour(1, 1))

//thank you