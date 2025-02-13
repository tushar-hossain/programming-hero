const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "T-Shirt", category: "Clothing" },
  { name: "Headphones", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
];

let categorized = {
  electronics: [],
  clothing: [],
};

for (let i = 0; i < products.length; i++) {
  let element = products[i];
  if (element.category === "Electronics") {
    categorized.electronics.push(element.name);
  } else if (element.category === "Clothing") {
    categorized.clothing.push(element.name);
  }
}

console.log(categorized);
