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

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
} 

sayHello("niko", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
} 

function divide(a, b) {
    console.log(a /b)
}

plus(1, 2);
divide(11, 21);

const players = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you");
    },
};

console.log(players.name);
players.sayHello("lynn");
players.sayHello("nico");

const d = 5;
let inNicoFat = true;
let hello = "aa";

console.log(hello);
inNicoFat = false;

const toBuy = ["potato", "tomato", "pizza"];

console.log(toBuy[2]);
toBuy[2] = "water";
console.log(toBuy[2]);
toBuy.push("meat");
console.log(toBuy);

const player3 = {
    name : "Nico",
    age : 98,
};

console.log(player3, console);
console.log(player3.name);

player3.name="nicolas";
console.log(player3);
player3.sexy = "soon";
console.log(player3);

 function plus(potato, salad) { 
     console.log(potato + salad);
}
 
 plus(5, 10);
 plus(1.2345, 5945);
 plus(5945, 1.2345);

function minustFive(sweetPotato) {
    console.log(sweetPotato - 5);
}

minustFive(15, 10, 12, 34, 4, 5, 6, 7);

const calculator = {
    add: function(a, b) {
        console.log(a, b);
    },
};

calculator.add(5, 1);
console.log()