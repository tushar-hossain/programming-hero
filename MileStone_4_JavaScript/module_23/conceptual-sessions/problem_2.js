function sadiHero(array) {
  let newList = [];
  for (const name of array) {
    if (name.includes("h")) {
      newList.push(name);
    }
  }
  return newList;
}

const girlList = [
  "rahima",
  "sokina",
  "shima",
  "alpona",
  "kolpona",
  "hena",
  "shamima",
];

const result = sadiHero(girlList);
console.log(result);
