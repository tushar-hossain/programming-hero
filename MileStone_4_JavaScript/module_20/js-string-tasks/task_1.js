// ### Task-1:
// Count how many times a string has the letter `a`

let str =
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";

let count = 0;
for (i = 0; i < str.length; i++) {
  // console.log(str[i]);
  if (str[i] === "a") {
    count++;
  }
}

console.log(count);
