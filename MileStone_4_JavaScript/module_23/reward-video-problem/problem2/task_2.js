function sendNotification(email) {
  if (!email.includes("@")) {
    return "Invalid Email";
  }

  const emailName = email.split("@");
  return `${emailName[0]} send you an email from ${emailName[1]}`;
}

const result = sendNotification("tushar@gmail.com");
console.log(result);
