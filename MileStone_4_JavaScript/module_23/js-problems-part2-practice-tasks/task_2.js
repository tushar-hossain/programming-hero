/**
 * ### Task -2:
 * Find the friend with the smallest name.
 */

function smallestName(nameArr) {
  let names = nameArr[0];
  for (const name of nameArr) {
    if (name.length < names.length) {
      names = name;
    }
  }
  return names;
}

const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
const name = smallestName(heights2);
console.log("Smallest Name: ", name);
