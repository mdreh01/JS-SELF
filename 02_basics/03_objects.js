//agar literals se object banate h to vo singleton nhi banega aur agar constructor se banega to singleton banega[object.create(this make singleton)]

//object literlas:-

const mySym = Symbol("key1")

const jsUser = {
    name: "Rehan", //they are in key-values pair
    "fullname": "Mohammad Rehan",
    age: 18,
    [mySym]: "mykey1", //syntax to define symbol
    location: "Mirzapur",
    email: "mdreh21@gmail.com",
    isLoggedIn: false,
}
console.log(jsUser.location)
console.log(jsUser["email"])
console.log(jsUser["fullname"])
console.log(jsUser[mySym])

jsUser.email = "sssmakmak071@gmail.com"
// Object.freeze(jsUser)//freeze ne yahi par rok laga di ki iske aage vali value ko ham nhi lenge isko hi bas input karenge aur output show karengeaur freeze ko hamlog additon ke liye use karte h
jsUser.email = "chatgpt@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS")//isme normal h function
}

jsUser.greetingTwo = function(){
   console.log(`Hello JS, ${this.name}`)// isme hamlog ne reference liya h 
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())

//jyada tar hamlog . ko use karke object call karte h baki ka thoda kam use hota h