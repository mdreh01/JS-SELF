// const tinderUser = new Object()//this is singleton object
const tinderUser = {}//non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Robert"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mohd",
            lastname: "Rehan"
        }
    }
}
// console.log(regularUser.email)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}//wrong output you will get
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)
//isko thoda kam use karte h
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)//mostly use syntax

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "hii@gmail.com"
    },
    {
        id: 3,
        email: "hi@gmail.com"
    },
]

// console.log(users[1].email)

console.log(tinderUser)

console.log(Object.keys(tinderUser))//output is in aaray
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))//har vo key value ko array me convert kar deta h
console.log(tinderUser.hasOwnProperty('isLoggedIn'))//'hasOwnProperty' is used to know the answer form the code ki ye chiz code me h ki nhi

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Rehan"
}
//course.courseInstructor

const {courseInstructor: instructor} = course//yaha par hamlog ne courseInstructor ko instructor ke name se change kiya h to console me bhi hame instructor ko hi call karna hoga
console.log(instructor)

// {
//     "name": "Rehan",
//     "coursename": "JS",
//     "price": "free"
// }ye ek Json h isme keys and values pair dono string me hote h

[
    {},
    {},
    {}
]//this is a one of the format of the API calling