const game = ["football", "cricket", "baseball", "badmintion"]
const fruits = ["apple","grapes","banana","litchi"]

// game.push(fruits)
// console.log(game[4][1]);

const mix = game.concat(fruits)
console.log(mix);

const mix_both = [...game, ...fruits]
console.log(mix_both);

const another_array = [1,2,3,[4,5,6],7,[4,6],[5,7]]
const new_array = another_array.flat(Infinity)
console.log(new_array);

console.log(Array.isArray("mohit"));
console.log(Array.from("mohit"));
console.log(Array.from({name:"mohit"}));  

let score1 = 50
let score2 = 100
let score3 = 150
console.log(Array.of(score1,score2,score3));


let name1 = "mohit"
let name2 = "santos"
console.log(Array.of(name1, name2));



