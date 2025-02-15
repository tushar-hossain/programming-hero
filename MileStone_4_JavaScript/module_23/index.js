/* 
3 max numbers
*/

function maximumNumbers(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const maxNum = maximumNumbers(500, 100, 90);
// console.log("Maximum Number is: ", maxNum);

/* 
3 min numbers
*/

function minimumNumbers(num1, num2, num3) {
  if (num1 < num2 && num1 < num3) {
    return num1;
  } else if (num2 < num1 && num2 < num3) {
    return num2;
  } else {
    return num3;
  }
}

const minNum = minimumNumbers(5, 10, 90);
// console.log("Maximum Number is: ", minNum);

/**
 * maximum number of array
 */

const height = [65, 66, 68, 72, 78, 60, 1];

function maxNumberOfArray(arr) {
  let max = arr[0];
  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return `Maximum Number is: ${max}`;
}

const max = maxNumberOfArray(height);
// console.log(max);

function minNumbersOfArray(arr) {
  let min = arr[0];
  for (const num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

const min = minNumbersOfArray(height);
// console.log(min);

/**
 * Use add and multiplication to calculate wood requirements
 * Chair ==> 3 cft
 * Table ==> 10 cft
 * Bed ==> 50 cft
 */

function woodQuantity(chair, table, bed) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  const chairWood = perChairWood * chair;
  const tableWood = perTableWood * table;
  const bedWood = perBedWood * bed;

  return chairWood + tableWood + bedWood;
}

const Wood = woodQuantity(3, 2, 1);
// console.log(Wood);

/**
 * shirt price ==> 500 tk.
 * pant price ==> 300 tk.
 * shoe price ==> 900 tk.
 *
 */

function shopPrice(shirt, pant, shoe) {
  const perShirt = 500;
  const perPant = 300;
  const perShoe = 900;

  const shirtPrice = perShirt * shirt;
  const pantPrice = perPant * pant;
  const shoePrice = perShoe * shoe;

  return shirtPrice + pantPrice + shoePrice;
}

const price = shopPrice(2, 2, 1);
// console.log("total price: ", price);

/**
 * Find the cheapest phone from an array of phone objects
 *
 */

const mobiles = [
  { name: "Samsung", price: 20000, camera: "12mp", color: "black" },
  { name: "Xoami", price: 18000, camera: "12mp", color: "black" },
  { name: "Oppo", price: 30000, camera: "12mp", color: "black" },
  { name: "IPhone", price: 100000, camera: "12mp", color: "black" },
  { name: "Walton", price: 31000, camera: "12mp", color: "black" },
  { name: "HTC", price: 27000, camera: "12mp", color: "black" },
];

function getCheapest(price) {
  let getPrice = price[0];

  for (const prices of price) {
    if (prices.price < getPrice.price) {
      getPrice = prices;
    }
  }
  return getPrice;
}

const mobile = getCheapest(mobiles);
// console.log("Cheapest Phone is: ", mobile);

// Height Phone price

function maxCheapest(price) {
  let getPrice = price[0];

  for (const prices of price) {
    if (prices.price > getPrice.price) {
      getPrice = prices;
    }
  }
  return getPrice;
}

const maxPhonePrice = maxCheapest(mobiles);
// console.log("Cheapest Phone is: ", maxPhonePrice);

/**
 * Calculate the total cost of the products in a shopping cart
 */

const products = [
  { name: "Shampo", price: 300 },
  { name: "Chiruni", price: 100 },
  { name: "Shirt", price: 700 },
  { name: "Pant", price: 1200 },
];

function getShopping(products) {
  let sum = 0;
  for (const product of products) {
    sum += product.price;
  }
  return sum;
}

const total = getShopping(products);
// console.log("Total price: ", total, "tk.");

const product = [
  { name: "Shampo", price: 300, quantity: 2 },
  { name: "Chiruni", price: 100, quantity: 3 },
  { name: "Shirt", price: 700, quantity: 4 },
  { name: "Pant", price: 1200, quantity: 1 },
];

function getShopping(products) {
  let sum = 0;
  for (const product of products) {
    sum += product.price * product.quantity;
  }
  return sum;
}

const totalCost = getShopping(product);
console.log("Total price: ", totalCost, "tk.");

/**
 * Multi-layer discount price calculation
 */
