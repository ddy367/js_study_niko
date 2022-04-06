const a = 5;
const b = 2;
let myName = "nico";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "nicolas";

console.log("your new name is  " + myName);

/////////////////////////////

const amIFat = null;
let something;
console.log(something, amIFat);
// undefine 값이 없다 정의되지 않았다   null 비어있다

/////////////////////////////

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek[4]);

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

////////////////////////////

// const playName = "nico";
// const playerPoints = 12121212;
// const playerHandsome = true;
// const playerFat = "little bit";

// const player = ["nico", 1212, true, "little bit"];

const player = {
    name: "nico",
    points: 10,
    fat: true,
};
console.log(player);
console.log(player.points);
console.log(player["name"]);

player.fat = false;
console.log(player);

player.lastName ="point";
console.log(player);

console.log(player);
player.points = player.points + 15;
console.log(player);
