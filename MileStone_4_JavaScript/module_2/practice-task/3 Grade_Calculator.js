/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 90;

if (score >= 90 && score <= 100) {
  console.log("result: A");
} else if (score <= 89 && score >= 80) {
  console.log("result: B");
} else if (score <= 79 && score >= 70) {
  console.log("result: C");
} else if (score <= 69 && score >= 60) {
  console.log("result: D");
} else {
  console.log("result: F");
}
