const user = {
    username:"MOhit",
    price:888,

    WelcomeMessage : function(){
        console.log(`${this.username}, Welcome to Site`);
        console.log(this);       
        
    }
}
user.WelcomeMessage()
user.username = "deep"
user.WelcomeMessage()


// const book = function(){
//     let name = "science"
//     console.log(this.name);
    
// }
// book()


const book = () => {
    let name = "science"
    console.log(this);
    
}
book()


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(8,8));


const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(8,12));

