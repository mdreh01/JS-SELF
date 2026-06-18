console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

console.log("2" > 1) // automatically js ne string ko number ko convert kar diya
//plus aapko ye dhyan dena h ki hame add,subtract and so on same data-type me karna h different data-type me nhi
console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
/*the reason is that an equality check == and comparison >, <, >= and <= work differently.
The comparison convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false*/

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined >= 0)
console.log(undefined <= 0)
//ouput will be false for all the undefined comparison

// '===' means it check the operation strictly 
console.log("2" == 2) //isse ye mtlb nhi ki ye string kyuki js string ko change kar deta h automatically number me ya jisme operation ho jab tak vaha pe strictly checking na ho aur output aapka true aa raha h isme
console.log("2" === 2) //isme strictly checking hogi conversion nhi hoga string ka number me to false show hoga output me