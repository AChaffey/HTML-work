'use strict';

let now = new Date();
let greeting = "Good";

if (now.getHours() > 17) {
    greeting += " evening.";
} else {
    greeting += " day.";
}
let age1 = 10;

if (age1 >= 18 && age1 <= 65) {
    console.log("Age is in range");
} else if (age1 < 18) {
    console.log("Underage");
} else {
    console.log("Catch all else");
}

let age2 = 100;
let result = age2 >= 50 ? "50 or over" : "Under 50";
console.log(result);
// Create an object called darthVader with the keys allegiance, weapon and sith and the values of empire, lightsabre and true. Finally log darthVader

let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader);
// Create the following log statements using the darthVader Object

// Darth Vader's allegiance is to the Empire;

// Darth Vader's weapon of choice is a lightsabre;

// Darth Vader is a sith? true;

// Darth Vader is a Jedi? false;

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

// Create an array with the name myArray with 2 elements hello,everyone..

// Next print the length of the array

// Next use the push() method to add 3 elements to the array

// Next print the length of the array

// Next use shift() to remove an element

// Finally print the contents of the array using a for of loop.

//1.
let myArray = ["hello",'everyone'];
//2.
 console.log(myArray.length);
//3.
 myArray.push("goodbye");
//4.
 console.log(myArray.length);
//5.
 myArray.shift();
//6.
 for(let eachElement of myArray) {
     console.log(eachElement);
 }

// Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.
 function subCalc(num1, num2) {
    return num1 - num2;
}

console.log(subCalc(10,1000));

// Create a function expression called welcome that take in name, age,gender as a parameters. The outcome should be like so:
// e.g. "My name is Felix Cited, i am 20 years old and of gender Male"

const welcome = function(name,age,gender){
    return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
    }
   
    welcome("Felix Cited",20,"Male");

//     Create an arrow function called powerUp that takes in two values n1 and n2. The arrow function will return the power of the two numbers.

// e.g. 
// n1=2, n2=3 will return 8 (2 x 2 x 2);

// n1=3, n2=3 will return 27 (3 x 3 x 3);

// hint use Math.pow()

powerUp = (n1,n2) => Math.pow(n1,n2);

console.log(powerUp(3,3));
//Output: 27