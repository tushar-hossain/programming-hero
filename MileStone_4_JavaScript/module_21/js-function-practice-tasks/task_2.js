/**
 * ### Task-2
 * Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

function numberChecked(number) {
  if (number % 2 === 0) {
    const result = number / 2;
    return `Even number ${result}`;
  } else if (number % 2 === 1) {
    const result = number * 2;
    return `Odd number ${result}`;
  }
}

const result = numberChecked(8);
const result2 = numberChecked(15);

console.log(result);
console.log(result2);
