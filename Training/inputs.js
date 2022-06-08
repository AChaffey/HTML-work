'use strict';

// Selectors
// Inputs
let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");

// Buttons
let addBtn = document.querySelector("#addBtn");
let minusBtn = document.querySelector("#minus");
let multiBtn = document.querySelector("#multi");
let divideBtn = document.querySelector("#divide");
let clearBtn = document.querySelector("#clearBtn");

// Divs
let mainDiv = document.querySelector("#mainDiv");

// Functionality
let add = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} + ${valueTwo} = ${valueOne + valueTwo}`);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}

let minus = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} - ${valueTwo} = ${valueOne - valueTwo}`);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}

let mult = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} x ${valueTwo} = ${valueOne * valueTwo}`);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}

let divide = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} / ${valueTwo} = ${valueOne / valueTwo}`);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}
let clearResults = () => {
    mainDiv.innerHTML = "";
}

// Event Listeners
addBtn.addEventListener("click", add);
minusBtn.addEventListener("click", minus);
multiBtn.addEventListener("click", mult);
divideBtn.addEventListener("click", divide);
clearBtn.addEventListener("click", clearResults);