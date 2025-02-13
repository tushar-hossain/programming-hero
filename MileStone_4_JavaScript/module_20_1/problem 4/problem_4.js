const product = "Lightweight and durable backpack";

let products = product.split(" ");

let reverse = "";
for (let i = products.length - 1; i >= 0; i--) {
  reverse += products[i].concat(" ");
}
console.log(reverse);

// 2nd steps
let reverseArray = [];
for (i = 0; i < products.length; i++) {
  reverseArray.unshift(products[i]);
}
console.log(reverseArray);
