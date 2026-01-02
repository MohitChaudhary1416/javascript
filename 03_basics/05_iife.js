// Immediately Invoked Function Expressions

// function subject(){
//     console.log(`Science is fav one`);
    
// }
// subject()


(function subject(){
    console.log(`Science is fav one`);   
})();


(function book(){
    console.log(`Computer is my Second fav`);
    
}
)();



( () => {
    console.log(`arrow function`);
    
})()