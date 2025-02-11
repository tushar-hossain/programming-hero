// ### Task-3:
// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u`

const str = "education everyone";
let isFound = true;

for (i = 0; i < str.length; i++) {
  let check = str[i].toLowerCase();
  if (
    check === "a" ||
    check === "e" ||
    check === "i" ||
    check === "o" ||
    check === "u"
  ) {
    console.log(`This sentence Vowels number is founded.`);
    isFound = false;
    break;
  } else {
    console.log(`This sentence Vowels number is not founded.`);
    isFound = false;
    break;
  }
}
