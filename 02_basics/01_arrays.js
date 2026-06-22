/*ARRAY:-ARRAY IS AN OBJECT THAT ENABLES STORING A COLLECTION OF MULTIPLE ITEMS UNDER A SINGLE VARIABLE NAME AND HAS MEMBERS FOR PERFORMING COMMON ARRYA OPERATIONS.

IN JS, ARRAYS AREN'T PRIMITIVES THEY ARE OBJECTS

JS ARRAYS ARE RESIZABLE AND CAN CONTAIN A MIX OF DIFFERENT DATA-TYPES

JS ARRAYS CAN BE ACCESSED BY INDEXING ONLY AND IT START FROM THE ZEROth INDEX UPTO Nth INDEX

JS ARRAYS COPY OPERATIONS CREATES SHALLOW COPIES  
              AND STUDY DEEP COPIES
*/

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr)
console.log(typeof myArr)
console.log(myArr[2])

const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(2, 6, 9, 0)
console.log(myArr2[1])

//Arrays Methods

const newArr = [1, 5, 7, 9]
newArr.push(6)//add the given value
console.log(newArr)

newArr.pop()//last value of array ko remove kar dega
console.log(newArr)

newArr.unshift(11)//add the value in the starting of the array
console.log(newArr)

newArr.shift()//remove the unshift number from the array
console.log(newArr)

console.log(newArr.includes(2))//output will be in boolean type
console.log(newArr.indexOf(9))//asking the index position

const elseArr = newArr.join()
console.log(newArr)//output in array format
console.log(elseArr)//but in this type change ho gya h array to string ho gya h
console.log(typeof elseArr)//string

/* Slice and Splice */
const heyArr = [1, 2, 3, 5, 9]
console.log("A", heyArr)
// const myn1 = heyArr.slice(1, 3)
console.log(heyArr.slice(1, 3))//first se start kariye second include kariye aur 3 kon inlcude nhi kariye(exclude) means 1&2 inlcude delete it and 3 exclude don't delete it

console.log(heyArr.splice(1, 3))
console.log("C", heyArr)//splice ke andar vo last value bhi include karte h aur original array bhi manipulate ho jata h usme se splice vala portion nikal jata h original array ke jaisa ki hamlog usse print karke dekh sakte h. Splice Array operation original array ko manipulate karta h