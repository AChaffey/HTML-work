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
let d= 100;
let a = 50;
let b = 40;

if (d < 200 ) {
    console.log("A");

} else (d > 200); {
    console.log("END");

}
//task 1 (QA)- flowchart

while (d <= 200) {
  d++;
  console.log(`d = ${d}`);
}
// For task 4 (QA) using for loops instead of while
for (let d = 100; d <= 200; d++) {
    console.log(`a = ${d}`);
  }
// Task 2 (QA)- flow chart

while (a <= 200) {
  if (a % 2 == 0) {
    console.log("-");
  } else {
    console.log("*");
  }
  a++;
}
// Task 4 (QA)- using for loops instead of while
for (let b = 100; b <= 200; b++) {
    if (b % 2 == 0) {
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



