/**
 * ### Task-4
 * Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

function count_zero(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === "0") {
      count++;
    }
  }
  return count;
}

const binary = "10100110100000100";

const result = count_zero(binary);
console.log(result);
