function checkDigitsInName(name) {
  if (typeof name !== "string") {
    return "Invalid Input";
  }
  let names = false;
  for (const userName of name) {
    if (!isNaN(userName) && userName !== " ") {
      return (names = true);
    }
  }
  return names;
}

const result = checkDigitsInName("ghj p4");

console.log(result);
