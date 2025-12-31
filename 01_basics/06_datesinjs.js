// dates
let mydate = new Date()
console.log(mydate);

console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleTimeString());
console.log(mydate.toTimeString());

console.log(typeof mydate);

let mycreateddate = new Date(2025,0,31)
console.log(mycreateddate.toDateString());

let myanotherdate = new Date(2025, 12, 30 , 7, 18)
console.log(myanotherdate.toLocaleString());

let anotherdate = new Date("31-12-2025")

let mytimestamp = Date.now()
// console.log(mytimestamp());

console.log(anotherdate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))



