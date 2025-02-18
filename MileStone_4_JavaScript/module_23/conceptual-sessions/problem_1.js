function marketList(money, chili, fish, vegetable) {
  const totalCost = chili + fish + vegetable;
  return (remainingAmount = money - totalCost);
}

const totalMoney = 500;

const result = marketList(totalMoney, 100, 200, 50);
console.log(result);
