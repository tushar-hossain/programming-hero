const price = "$249";

let productsPrice = price.split("");

let sum = 0;

for (let i = 0; i < productsPrice.length; i++) {
  let element = productsPrice[i];
  if (!isNaN(element) && element !== " ") {
    sum += Number(element);
  }
}

console.log(sum);
