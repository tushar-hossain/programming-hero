/**
 * ### Task-3:
 * Write a function to count the number of vowels in a string.
 *
 */

function checkStr(str) {
  let count = 0;
  for (i = 0; i < str.length; i++) {
    let element = str[i].toLowerCase();
    if (
      element.toLowerCase() === "a" ||
      element.toLowerCase() === "e" ||
      element.toLowerCase() === "i" ||
      element.toLowerCase() === "o" ||
      element.toLowerCase() === "u"
    ) {
      count++;
    }
  }
  return count;
}

const str = "I am learning Programming hero";
const result = checkStr(str);
console.log(result);
