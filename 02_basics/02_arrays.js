const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros)
console.log(marvel_heros[3][1])

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//ye array, sub-array and sub-sub-array ko ek array me convert kar deta h
console.log(real_another_array)

console.log(Array.isArray("Hitesh"))//asking question ki ye array h ki nhi
console.log(Array.from("Hitesh"))//converting this into array
console.log(Array.from({name: "Rehan"}))//isme ye empty array print hoga kyuki hamne issme define nhi kiya h ki hame kiska array output chahiye keys ki value[key:value(pair)].

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))//returns a single array jisme ye saare array exist rahenge