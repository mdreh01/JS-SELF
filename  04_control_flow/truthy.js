const userEmail = []

// if (userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Don't have user email")
// }

// falsy values
// false, 0, -0, BigInt 0n, "", '', null, undefined, NaN
// agar string empty h to wo falsy h

//truthy values
// "0", 'false', " ", '', [], {}, function(){}
// string ke andar koi bhi value h to wo truthy h

if (userEmail.length === 0){
    console.log("Array is empty"); //array ko aise check karte h ki uski length 0 h ya nhi agar 0 h to array empty h
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")//object ko aise check karte h ki uske keys ki length 0 h ya nhi agar 0 h to object empty h
}


/*  false == 0 (true)
    false == '' (true)
    0 == '' (true)
*/


// Nullish Coalescing Operator (??): null, undefined

let val1
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// val1 = undefined ?? null ?? 20
// val1 = 0 ?? 10 //nullish coalescing operator me agar value 0 h to wo truthy h to wo 0 ko hi return karega aur 10 ko ignore karega
val1 = 10 ?? null ?? 20 
console.log(val1)


//Ternary Operator:-

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("You can buy Ice Tea") : console.log("You can't buy Ice Tea")