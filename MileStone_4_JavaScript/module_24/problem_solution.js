function calculateVAT(price) {
  if (typeof price !== "number" || price < 0) {
    return "Invalid";
  }
  const vat = price * (7.5 / 100);
  return vat;
}

function validContact(contact) {
  if (typeof contact !== "string") {
    return "Invalid";
  }

  const number = contact.trim();
  if (number.startsWith("01") && number.length === 11) {
    return true;
  } else {
    return false;
  }
}

function willSuccess(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }

  let pass = 0;
  let fail = 0;
  for (const mark of marks) {
    if (mark >= 50) {
      pass++;
    } else {
      fail++;
    }
  }

  if (pass > fail) {
    return true;
  } else {
    return false;
  }
}

function validProposal(person1, person2) {
  if (
    (typeof person1 !== "object" &&
      !Array.isArray(person1) &&
      person1 !== null) ||
    (typeof person2 !== "object" && !Array.isArray(person2) && person2 !== null)
  ) {
    return "Invalid";
  }

  const ageDifference = Math.abs(person1.age - person2.age);

  if (person1.gender !== person2.gender && ageDifference <= 7) {
    return true;
  } else {
    return false;
  }
}

function calculateSleepTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  let timeObject = {
    hour: 0,
    minute: 0,
    second: 0,
  };

  let totalSecond = 0;

  for (const second of times) {
    if (typeof second !== "number") {
      return "Invalid";
    }

    totalSecond += second;
  }

  let hours = Math.floor(totalSecond / 3600);
  let minutes = Math.floor((totalSecond - hours * 3600) / 60);
  let seconds = totalSecond - hours * 3600 - minutes * 60;

  timeObject.hour = hours;
  timeObject.minute = minutes;
  timeObject.second = seconds;

  return timeObject;
}
