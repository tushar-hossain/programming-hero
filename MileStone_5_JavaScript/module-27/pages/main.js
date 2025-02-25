const time = document.getElementById("time");
const time2 = document.getElementById("time2");
setInterval(() => {
  const date = new Date();
  const newDate = date.toLocaleTimeString();
  time.innerText = newDate;
  time2.innerText = newDate;
}, 1000);

// logout
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "../index.html";
});

/**
 * add money section
 */
const btnAddMoney = document.getElementById("btn-add-money");

btnAddMoney.addEventListener("click", function (e) {
  e.preventDefault();
  const mainBalance = Number(document.getElementById("balance").innerText);
  const selectBank = document.getElementById("select-bank").value;
  const accountNumber = document.getElementById("account-number").value;
  const addAmount = document.getElementById("add-amount").value;
  const pinNumber = document.getElementById("pin").value;

  if (
    !isNaN(accountNumber) ||
    !isNaN(pinNumber) ||
    selectBank === "bkash" ||
    selectBank === "rocket" ||
    selectBank === "nagad" ||
    selectBank === "dbbl" ||
    addAmount !== ""
  ) {
    if (accountNumber.length === 11 && pinNumber.length === 4) {
      const sum = mainBalance + Number(addAmount);
      document.getElementById("balance").innerText = sum;
    } else {
      alert("Invalid Information");
    }
  } else {
    alert("Please provide your information");
  }
});

/**
 * cash out section
 */
const btnWithdrawMoney = document.getElementById("btn-Withdraw-money");

btnWithdrawMoney.addEventListener("click", function (e) {
  e.preventDefault();

  const agentNumber = document.getElementById("agent-number").value;
  const withdrawAmount = document.getElementById("withdraw-amount").value;
  const pinNumber = document.getElementById("pin-number").value;

  const mainBalance = Number(document.getElementById("balance").innerText);

  if (!isNaN(agentNumber) && !isNaN(pinNumber)) {
    if (agentNumber.length === 11 && pinNumber.length === 4) {
      const sub = mainBalance - Number(withdrawAmount);
      document.getElementById("balance").innerText = sub;
    } else {
      alert("Invalid Information");
    }
  } else {
    alert("Please provide your information");
  }
});

/**
 * transfer money section
 */
const btnTransferMoney = document.getElementById("btn-transfer-money");

btnTransferMoney.addEventListener("click", function (e) {
  e.preventDefault();

  const transferNumber = document.getElementById("transfer-number").value;
  const transferAmount = document.getElementById("transfer-amount").value;
  const pinNumber = document.getElementById("transfer-pin-number").value;

  const mainBalance = Number(document.getElementById("balance").innerText);

  if (!isNaN(transferNumber) && !isNaN(pinNumber)) {
    if (transferNumber.length === 11 && pinNumber.length === 4) {
      const sub = mainBalance - Number(transferAmount);
      document.getElementById("balance").innerText = sub;
    } else {
      alert("Invalid Information");
    }
  } else {
    alert("Please provide your information");
  }
});

/**
 * get bouns section
 */
const btnBonusMoney = document.getElementById("btn-bonus-money");

btnBonusMoney.addEventListener("click", function (e) {
  e.preventDefault();

  //   const getBonus = document.getElementById("get-bouns").value;

  const mainBalance = Number(document.getElementById("balance").innerText);

  document.getElementById(
    "less-balance"
  ).innerText = `100 tk. less coupon code`;

  const sub = mainBalance - Number(100);
  document.getElementById("balance").innerText = sub;
});

// click able event

document.getElementById("add-money-section").style.display = "none";

document.getElementById("cashout-section").style.display = "none";

document.getElementById("transfer-section").style.display = "none";

document.getElementById("bonus-section").style.display = "none";

// add money
document.getElementById("addBalance").addEventListener("click", function () {
  document.getElementById("addBalance").style.borderColor = "blue";
  setTimeout(() => {
    document.getElementById("addBalance").style.borderColor = "";
  }, 1000);

  getControlPayment(
    "add-money-section",
    "cashout-section",
    "transfer-section",
    "bonus-section"
  );
});

// cashout
document
  .getElementById("cashoutBalance")
  .addEventListener("click", function () {
    document.getElementById("cashoutBalance").style.borderColor = "blue";
    setTimeout(() => {
      document.getElementById("cashoutBalance").style.borderColor = "";
    }, 1000);
    getControlPayment(
      "cashout-section",
      "add-money-section",
      "transfer-section",
      "bonus-section"
    );
  });

// transfer money
document
  .getElementById("transferBalance")
  .addEventListener("click", function () {
    document.getElementById("transferBalance").style.borderColor = "blue";
    setTimeout(() => {
      document.getElementById("transferBalance").style.borderColor = "";
    }, 1000);

    getControlPayment(
      "transfer-section",
      "add-money-section",
      "cashout-section",
      "bonus-section"
    );
  });

document.getElementById("bounusBalance").addEventListener("click", function () {
  document.getElementById("bounusBalance").style.borderColor = "blue";
  setTimeout(() => {
    document.getElementById("bounusBalance").style.borderColor = "";
  }, 1000);

  getControlPayment(
    "bonus-section",
    "add-money-section",
    "cashout-section",
    "transfer-section"
  );
});

function getControlPayment(id1, id2, id3, id4) {
  document.addEventListener("click", function () {
    document.getElementById("payment-section").style.display = "none";
    document.getElementById(id1).style.display = "block";
    document.getElementById(id2).style.display = "none";
    document.getElementById(id3).style.display = "none";
    document.getElementById(id4).style.display = "none";
  });
}
