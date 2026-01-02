// let a = 10
// const b = 20
// var c = 30 
// console.log(a);
// console.log(b);
// console.log(c);


if (true){

    let a = 10
    const b = 20
    var c = 30 
}
// console.log(c); 

let a = 100
if(true){
    let a = 10
    const b = 20
    console.log("Inner:", a);
    
}
console.log("outer:",a)


function one(){
    const username="Mohit"

    function Two(){
        const email = "mohit@gmail.com"
        console.log(username);
        
    }

    Two()
}
one()

if (true){
    const username = "deep"
    if (username === "deep"){
        const school = " Hilbert"
        console.log(username + school);
        
    }
}


// doesn't gives an error
console.log(addone(5));
function addone(num){
    return num + 1

}


// console.log(addtwo(5));  ==> gives error
const addtwo = function(num){
    return num + 2
}
// console.log(addtwo(5));
