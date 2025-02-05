var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.5;

var totalMarks = (
  (Mathematics + Biology + Chemistry + Physics + Bangla) /
  5
).toFixed(2);

console.log("Average marks is: " + totalMarks);
