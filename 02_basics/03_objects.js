// object literals

const mysymbol = Symbol("derek")
const JsUser = {
    name: "mohit",
    "full name":"mohit chaduhary",
    age: 20,
    [mysymbol]:"derek2",
    email:"mohti@google.com",
    location: "Butwal",
    isLoggedIn: false,
    LastLoginDays:["Friday", "Tuesday"]
}
// console.log(JsUser.age);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysymbol]);


JsUser.location = "Kathmandu"
// Object.freeze(JsUser)

JsUser.location = "Kapilvastu"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello jsuser");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Jsuser yourname is ${this["full name"]}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

