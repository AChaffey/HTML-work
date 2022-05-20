'use strict';

let count = 0;


let addbut = document.querySelector("#addButton");
let save = document.querySelector("#save");
let mainDiv = document.querySelector("#clicker");
let savbut = document.querySelector("#saveToMe");

let countTracker= () => {
    count ++;

    let newDiv = document.createElement("div");
    let newText = document.createTextNode(" your count is" + count);

    
    newDiv.appendChild(newText);
    mainDiv.appendChild(newDiv);

    mainDiv.innerHTML = "";
    }
let saveNum = () => {
    let entry = document.createElement("div")
    entry.setAttribute("class" , "entries");
    let addText = document.createTextNode("Save here");
  
    entry.appendChild(addText);
    savbut.appendChild(entry);
  
}

addbut.addEventListener("click", countTracker);
save.addEventListener("click", saveNum);