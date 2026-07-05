const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item
// } )
// console.log(values)


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8]
// const newNums = myNum.filter( (num) => {
//     return num > 4//agar curly braces use kiya h to hame return keyword use karna padega condition se pehle taki vo output correctly de
// })
// console.log(newNums);
//filter contain call back function jo output deta h jab ham usse variable assign karke usme store karde tab

//upar aur niche vala program same h bas ek me filter aur ek me forEach use kiya h

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8]
// const newNums = []
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )
// console.log(newNums)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter( (bk) => bk.genre === 'History')

const userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})//idhar hamlog ne scope open kar diya tha to return keyword use karna padega and idhar hamlog ne aur ek condition put kiya h
console.log(userBooks)


