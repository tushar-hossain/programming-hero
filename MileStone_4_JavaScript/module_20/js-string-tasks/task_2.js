// ### Task-2:
// Count how many times a string has the letter `a` or `A`

const str =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in A piece of classical Latin literature from 45 BC, making it over 2000 years old.";

let count = 0;
let count2 = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    count++;
  } else if (str[i] === "A") {
    count2++;
  }
}

console.log("find letter a:", count, "find letter A:", count2);
