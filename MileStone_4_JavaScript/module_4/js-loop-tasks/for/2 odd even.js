/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// Subtask-1:
for (i = 61; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// Subtask-2:
for (i = 78; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
