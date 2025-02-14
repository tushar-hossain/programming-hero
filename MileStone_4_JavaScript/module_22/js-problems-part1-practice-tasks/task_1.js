/**
 * ### Task-1:
 * Write a function to convert temperature from Celsius to Fahrenheit.
 */

function temperature(celsius) {
  return celsius * (9 / 5) + 32;
}

const Fahrenheit = temperature(100);
const fahr = temperature(10);

console.log(`Result : ${Fahrenheit} °F`);
console.log(`Result : ${fahr} °F`);
