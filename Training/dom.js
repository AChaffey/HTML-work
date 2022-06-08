'use strict';

// Selectors
let mainDiv = document.querySelector("#addToMe");
let addbut = document.querySelector("#addButton");



//  Functionality
let addToPage = () => {
    let newDiv = document.createElement("div");
    let newHeading = document.createElement("h1");
    let newText = document.createTextNode("All the Clicks");

    newHeading.appendChild(newText);
    newDiv.appendChild(newHeading);
    mainDiv.appendChild(newDiv);

}
// event listeners
addbut.addEventListener("click", addToPage,);