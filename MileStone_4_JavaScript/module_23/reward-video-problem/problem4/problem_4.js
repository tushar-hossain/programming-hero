function calculateFinalScore(obj) {
  if (typeof obj !== "object") {
    return "Invalid Input";
  }
  if (
    typeof obj.name !== "string" ||
    typeof obj.testScore !== "number" ||
    typeof obj.schoolGrade !== "number" ||
    typeof obj.isFFamily !== "boolean"
  ) {
    return "Invalid Input";
  }

  const score = obj.testScore;
  const grade = obj.schoolGrade;
  let result = score + grade;

  if (obj.isFFamily) {
    result += 20;
  }

  if (result >= 80) {
    return true;
  } else {
    return false;
  }
}

const obj = { name: "Rajid", testScore: 45, schoolGrade: 25, isFFamily: true };

const result = calculateFinalScore(obj);
console.log(result);
