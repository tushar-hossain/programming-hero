/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/

// Subtask-1:
let sum1 = 0;
for (i = 91; i <= 129; i++) {
  if (i % 2 == 1) {
    sum1 += i;
  }
}
console.log(sum1);

// Subtask-2:
let sum2 = 0;

for (i = 51; i <= 85; i++) {
  if (i % 2 == 0) {
    sum2 += i;
  }
}

console.log(sum2);
