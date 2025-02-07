/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 5;

if (age < 10) {
  console.log("Free");
} else if (age > 10) {
  const Students = 800 * (50 / 100);
  console.log(Students);
} else if (age >= 60) {
  const discount = 800 * (15 / 100);
  console.log(discount);
} else {
  console.log("Regular ticket fare 800 tk");
}
