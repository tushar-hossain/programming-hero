/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// Subtask-1:81 to 131

let sum1 = 0;

let i = 81;
while (i <= 131) {
  if (i % 2 == 1) {
    sum1 += i;
  }
  i++;
}

console.log(sum1);

// Subtask-2: even numbers from 206 to 311.

let sum2 = 0;

let j = 206;
while (j <= 311) {
  if (j % 2 == 0) {
    sum2 += j;
  }
  j++;
}

console.log(sum2);
