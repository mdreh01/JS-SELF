const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
//OBJECT KE ANDAR HAM FOR-IN LOOP USE KARENGE

for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    // console.log(programming[key])
}
//ARRAY KE ANDAR HAM FOR-IN OR FOR-OF LOOP DONO ISTEMAL KAR SAKTE H LEKIN FOR-OF JYADA BETTER HOGA USE KARNA


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
    
// }
//YE TO ITERABLE HI NHI H TO KOI BHI USE KARO FARK NHI PADTA