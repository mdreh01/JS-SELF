//DATE:-DATE REPRESENTS A SINGLE MOMENT IN TIME IN A PLATFORM INDEPENDENT FROMAT.IT IS MEASURED IN MILLISECOND

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate) //it is an object

let myCreatedDate = new Date(2023, 0, 23)//here month start form the zero(0) counting
console.log(myCreatedDate.toDateString())

let anotherDate = new Date(2026, 0, 23, 5, 3)
console.log(anotherDate.toLocaleString())

let secondDate = new Date("2026-01-14")//yy-mm-dd me second vala month ho jata h 
console.log(secondDate.toLocaleString())

let furtherDate = new Date("01-14-2026")//ye mm-dd-yy ke formate me h
console.log(furtherDate.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(furtherDate.getTime())
console.log(Math.floor(Date.now()/1000))//idhar millisecond ko second me change kiya h 1000 se divide karke

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1) 

newDate.toLocaleString('default', {
    weekday: "long",
})