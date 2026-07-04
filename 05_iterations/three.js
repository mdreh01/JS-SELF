// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}


const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(greet)
}


//Maps

const map = new Map()
map.set('IN', 'India', '+91')
map.set('USA', 'United State of America', '+1')
console.log(map);

for (const [key, value] of map) {
    console.log(key, '=' , value);
}



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [game, name] of myObject) {
//     console.log(game, '=', name);
    
// }