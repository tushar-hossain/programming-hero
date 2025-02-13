/**
 * ### Task-3
 * Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

function make_avg(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return (sum / arr.length).toFixed(2);
}

const array = [12, 45, 8, 96, 23, 10];

const result = make_avg(array);
console.log(result);
