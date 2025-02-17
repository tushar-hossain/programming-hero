function waitingTime(array, serial) {
  if (!Array.isArray(array) || typeof serial !== "number") {
    return "Invalid Input";
  }

  let averageTime = 0;
  for (const totalTime of array) {
    averageTime += totalTime;
  }
  const totalAverageTime = Math.round(averageTime / array.length);

  const waitingTimePerPerson = serial - 1 - array.length;
  const isratWaitingTime = totalAverageTime * waitingTimePerPerson;

  return isratWaitingTime;
}

const result = waitingTime([3, 5, 7, 11, 6], 10);
console.log(result);
