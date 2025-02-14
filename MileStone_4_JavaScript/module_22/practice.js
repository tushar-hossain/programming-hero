/**
 * Unit Convert Inch to Feet
 */

function inchToFeet(inc) {
  return (inc / 12).toFixed(2);
}

const result = inchToFeet(75);

// console.log(`Feet : ${result}`);

function inchToFeet2(inc) {
  const feet = parseInt(inc / 12);
  const inch = inc % 12;

  return `${feet}' ${inch}"`;
}

const convert = inchToFeet2(65);
// console.log(convert);

/**
 * miles to kilometer
 */

function mileToKilometer(miles) {
  const km = miles * 1.60934;
  return `${miles} miles = ${km} kilometers`;
}

const miles = mileToKilometer(2);
const miles2 = mileToKilometer(3);

// console.log(miles);
// console.log(miles2);

/**
 * Check whether a year is a Leap Year or not
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    console.log("leap year");
  } else {
    console.log("not leap year");
  }
}

// isLeapYear(2025);

/*
------------------ OR ---------------------------
*/

function isLeapYear2(year) {
  if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
    console.log("leap year");
  } else {
    console.log("not leap year");
  }
}

isLeapYear2(2028);

/**
 * Remove duplicate items from an array
 */

function duplicate(arr) {
  let items = [];
  for (let item of arr) {
    if (!items.includes(item)) {
      items.push(item);
    }
  }
  console.log(items);
}

const array = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "kabul",
  "babul",
  "jabul",
  "babul",
  "kabul",
];

duplicate(array);
