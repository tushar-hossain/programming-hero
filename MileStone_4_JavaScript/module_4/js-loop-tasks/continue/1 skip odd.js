/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

// let i = 1;

// while (i < 40) {
//   i++;
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }

for (let j = 1; j <= 40; j++) {
  if (j % 2 === 1) {
    continue;
  }
  console.log(j);
}
