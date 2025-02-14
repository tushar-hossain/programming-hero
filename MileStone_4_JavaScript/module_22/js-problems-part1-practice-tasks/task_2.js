/**
 * ### Task-2:
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
 * find: 5
 *
 * output: 2
 * -------------OR-----------
 * find: 25
 *
 * output: 0
 *
 */

function findRepeatedArray(arr, number) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === number) {
      count++;
    } else if (arr[i] === number) {
      count++;
    }
  }
  return count;
}

const numbers = [5, 6, 11, 12, 98, 5];

const result = findRepeatedArray(numbers, 5);
// const result = findRepeatedArray(numbers, 25);

console.log(`output: ${result}`);
