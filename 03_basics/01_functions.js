
function myname(){
    console.log("m");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");   
}

// myname()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);   
// }


///diff ways
function addTwoNumbers(num1, num2){
    console.log("Congratulations");
    
    // let result = num1 + num2
    // return result

    return num1 + num2
}

let result = addTwoNumbers(5,6)
console.log(`Result is = ${result}`);



function userLoginMessage(username){
    return `${username} just loggin`
}
let user = userLoginMessage("Mohit")
console.log(user);



function userLoginMessage(username){
    return `${username} just loggin`
}

// output => blank just loggin
let user1 = userLoginMessage("") 
console.log(user1);

// output => undefined just loggin
// let user2 = userLoginMessage()
// console.log(user2);


// default value
function userLoginMessage(username = "bot"){
    if (!username){
        console.log("Please enter your username")
        return
    }
    return `${username} just loggin`
}
let user3 = userLoginMessage()
console.log(user3);