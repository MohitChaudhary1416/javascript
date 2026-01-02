function CalculateRentPrice(val1,val2,...num1){
    return num1
}
// console.log(CalculateRentPrice(5,100,50));


const user = {
    username:"mohit",
    price:200

}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleobject(user)

handleobject({
    username:"ravan",
    price:500
})


const MynewArray = [50,150,340,640]
function ReturnSecondArray(getarray){
    return getarray[1]

}
console.log(ReturnSecondArray(MynewArray));
console.log(ReturnSecondArray([100,200,300,400]));

