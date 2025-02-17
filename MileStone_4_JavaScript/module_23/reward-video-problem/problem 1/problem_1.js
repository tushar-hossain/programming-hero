function calculateTax(income, expense) {
  if (typeof income !== "number" || typeof expense !== "number") {
    return "Invalid Input";
  }
  if (0 >= income || 0 >= expense || expense > income) {
    return "Invalid Input";
  }

  const taxCal = income - expense;
  const tax = taxCal * (20 / 100);
  return tax;
}

const result = calculateTax(10000, 3000);

console.log(result);
