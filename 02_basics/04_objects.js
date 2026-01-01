const tinderUser = {}

tinderUser.id = "123mc"
tinderUser.name = "ram khand"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const RegularUser = {
    email:"mohit@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Mohit",
            lastname:"Chaudhary"
        }

    }
}
// console.log(RegularUser.fullname);
// console.log(RegularUser.fullname.userfullname);
// console.log(RegularUser.fullname.userfullname.firstname);

const obj1 = {grapes:"fruits", cabbage:"vegetable"}
const obj2 = {henry:"vecna", will:"wise"}
const obj4 = {subject:"computer",school:"oxford"}

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// merge multiple objects
const obj3 = {...obj1, ...obj2, ...obj4}  
console.log(obj3);


const users = [
    {
        id:1,
        name:"raaj"

    },
    {
        id:2,
        name:"gita"
    },
    {
        id:3,
        name:"hari"
    },
    {
        id:4,
        name:"deep"
    }
]

// console.log(users[1].name);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// console.log(tinderUser.hasOwnProperty("whatifnotexistval")); 

const Course = {
    coursename:"javascript",
    price:3500,
    CourseTeacher:"mohit"

}

const {CourseTeacher:Teacher} = Course
console.log(Teacher);
console.log(Course);



