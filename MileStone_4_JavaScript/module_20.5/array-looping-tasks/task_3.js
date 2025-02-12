/* 
### Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

`var numbers = ['Tom', 'Tim', 'Tin', 'Tik']`

**Output:**
`'TomTimTinTik'`

*/
var numbers = ["Tom", "Tim", "Tin", "Tik"];

let singleStr = "";

for (let str of numbers) {
  singleStr += str;
}
console.log(singleStr)