const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => {return num + 10})
// console.log(newNums);

//chaining method

const newNums = myNumers
    .map( (num) => num * 10 )//map to reutrn karega hi karega
    .map( (num) => num + 1)
    .filter( (num) => num >= 40)//filter me true or false vala game h true to return varna nhi 

console.log(newNums)
