/**
 * ### Task -1:
 * Find the lowest number in the array below.
 */

function lowestNumber(arr) {
  let low = arr[0];
  for (const num of arr) {
    if (num < low) {
      low = num;
    }
  }
  return low;
}

const heights2 = [167, 190, 120, 165, 137];

const number = lowestNumber(heights2);

console.log("Lowest Number: ", number);
