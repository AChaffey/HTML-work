'use strict';

//for loop
// initalise a variable; set a condition; choose an iterator
for (let i = 0; i<5; i++) {
    console.log(i);
}

// while loop
// Needs only a condition
// Will continue to loop, as long as the condition is true
let flag = true;
let count = 0;
while (flag) {
    console.log(count);
    count++;

    if (count === 10) {
        flag = false;
    }
}
//Task 1 (ME)- flow chart
let d= 20;

if (d < 200 ) {
    console.log("A");

} else (d > 200); {
    console.log("END");

}
//task 1 (QA)- flowchart
let b = 100;
while (b <= 200) {
  b++;
  console.log(`b = ${b}`);
}
// For task 4 (QA) using for loops instead of while
for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
  }
// Task 2 (QA)- flow chart
let a = 100;
while (a <= 200) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  a++;
}
// Task 4 (QA)- using for loops instead of while
for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
      console.log("-");
    } else {
      console.log("*");
    }
  }
// task 3 (QA)- method to print numbers 1-10 10 times each
for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(j);
    }
 }  
//  Switch cases
 let now = new Date(); 
let day = now.getDay();
switch (day) {
  case 0:
    console.log(`It's Sunday`);
    break;
  case 6:
    console.log(`It's Saturday`);
    break;
  case 1:
    console.log(`It's Monday`);
  case 2:
  case 3:
  case 4:
  case 5:
    console.log(`It's a weekday`);
    break;
  default:
    console.log(`Excuse me?`);
    break;
}



