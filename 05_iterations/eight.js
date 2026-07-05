const myNums = [1, 2, 3]
// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
// console.log(myTotal);

//ye upar vala code aapko 'reduce' ke baare me batayega kaise work karta h 


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);
//ye bhi same h uparvale concept ke tarah bas smart-work kiya h isme bas


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay);

//reduce ko samajhne ka best tareeka shoppingCart ke example se