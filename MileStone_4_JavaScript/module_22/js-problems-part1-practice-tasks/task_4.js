/**
 * ### Task-4:
 * Write a function to find the longest word in a given string.
 *
 * sample-output: Programming
 */

function longestStr(str) {
  const change = str.split(" ");
  let long = "";

  for (i = 0; i < change.length; i++) {
    let element = change[i];

    if (element.length > long.length) {
      long = change[i];
    }
  }
  return long;
}

const str = "I am learning Programming to become a programmer";
const result = longestStr(str);
console.log(result);
