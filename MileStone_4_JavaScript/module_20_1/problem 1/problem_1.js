const products = ["Laptop", "Phone", "Laptop", "Tablet", "Phone"];

let product = [];

for (let i = 0; i < products.length; i++) {
  let element = products[i];
  if (!product.includes(element)) {
    product.push(element);
  }
}

console.log(product);
