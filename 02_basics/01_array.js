// Array

const myarr = [0,1,2,3,4,5]
console.log(myarr[1]);

const heros = ["jack","michal","el","justin"]
console.log(heros[1]);

// Array Methods
// myarr.push(7)
// console.log(myarr);

// myarr.pop()
// console.log(myarr);

myarr.unshift("apple")
myarr.shift()
console.log(myarr);
console.log(myarr.includes(4));

console.log(myarr.indexOf(19));

// const newArr = myarr.join()
// console.log(myarr);
// console.log(newArr);


// slice , splice
console.log("A", myarr);
const myn1 = myarr.slice(1,4)
console.log(myn1);
console.log("B", myarr);


const myn2 = myarr.splice(1,4)
console.log((myn2));
console.log(("C", myarr));



