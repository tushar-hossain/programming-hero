const login = document.getElementById("btn-login");
const vaidNumber = document.getElementById("validation");
const vaidPin = document.getElementById("valid");

login.addEventListener("click", function (e) {
  e.preventDefault();

  const mobileNumber = document.getElementById("mobile-number").value;
  const pinNumber = document.getElementById("pin-number").value;

  if (!isNaN(mobileNumber) && !isNaN(pinNumber)) {
    if (mobileNumber.length === 11 && pinNumber.length === 4) {
      window.location.href = "../pages/main.html";
    } else {
      alert("Invalid mobile Number or Pin");
    }
  } else {
    vaidNumber.innerText = "Please provide a number";
    vaidPin.innerText = "Please provide a number";
    vaidPin.style.color = "red";
    vaidNumber.style.color = "red";
  }
});
