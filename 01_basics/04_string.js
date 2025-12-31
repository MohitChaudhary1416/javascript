const name = "Mohit"
const RepoCount = 13

console.log(`My name is ${name} and my repo count is ${RepoCount}`);


const gamename = new String("football-kathmandu")
console.log(gamename[0]);

console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());

console.log(gamename.charAt(4));
console.log(gamename.indexOf('b'));

const newgame = gamename.substring(0,5)
console.log(newgame);

const anotherstring = gamename.slice(-4,6)
console.log(anotherstring);

const newstringone = "   cricket  "
console.log(newstringone);
console.log(newstringone.trim());

const  url = "https://mohit.com/mohit%20chaudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes('mohit'));

console.log(gamename.split('-'));


