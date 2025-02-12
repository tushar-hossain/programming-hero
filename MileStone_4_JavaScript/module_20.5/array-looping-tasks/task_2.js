/* 
### Task 2

Write a JavaScript code to get the even numbers from an array using any looping technique.

`const numbers = [12, 98, 5, 41, 23, 78, 46];`

**Output:**
`[12, 98, 76, 46]`

*/

const numbers = [12, 98, 5, 41, 23, 78, 46];

let modArray = [];

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    modArray.push(numbers[i]);
  }
}
console.log(modArray);
