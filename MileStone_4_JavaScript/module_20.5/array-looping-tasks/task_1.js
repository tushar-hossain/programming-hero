/* 
# array-looping-tasks
### Task 1
Write a JavaScript code to reverse the array colors `without using the reverse method`.

**Output:**
`['orange', 'yellow', 'green', 'blue', 'red']`
*/

const colors = ["red", "blue", "green", "yellow", "orange"];

// 1st step

// let reverseColor = [];
// for (let i = colors.length - 1; i >= 0; i--) {
//   reverseColor.push(colors[i]);
// }
// console.log(reverseColor);

// 2nd step

// let reverseColor = [];
// for (let i = 0; i < colors.length; i++) {
//   reverseColor.unshift(colors[i]);
// }
// console.log(reverseColor);

// 3rd step

let sorted = colors.reverse();
console.log(sorted);
