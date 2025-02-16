/**
 * ### Task-3: 
 * Your task is to calculate the `total budget` required to buy electronics:

        laptop = 35000 tk
        tablet = 15000 tk
        mobile = 20000 tk

Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.
*/

function calculateElectronicsBudget(money, lap, tab, mob) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const laptopTotal = lap * laptop;
  const tabletTotal = tab * tablet;
  const mobileTotal = mob * mobile;

  const totalCost = laptopTotal + tabletTotal + mobileTotal;
  const result = money - totalCost;
  return `Total Product Cost= ${totalCost}tk. and return money= ${result}tk.`;
}

const totalBudget = 40000;
const total = calculateElectronicsBudget(totalBudget, 0, 1, 0);

console.log(total);
