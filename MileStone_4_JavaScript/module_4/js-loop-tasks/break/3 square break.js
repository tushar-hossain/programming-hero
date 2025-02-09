/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let sqr = 1;

for (let i = 1; i <= 100; i++) {
  sqr = i ** 2;
  if (sqr == 16) {
    break;
  }
}

console.log(sqr);
