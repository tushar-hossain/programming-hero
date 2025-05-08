import { toast } from "react-toastify";

const getBill = () => {
  const payment = localStorage.getItem("bill");
  if (payment) return JSON.parse(payment);

  return [];
};

const addBill = (payBills) => {
  const payment = getBill();
  const isExist = payment.find((pay) => pay.id === payBills.id);

  if (isExist) return toast.error("Already Paid");

  payment.push(payBills);
  localStorage.setItem("bill", JSON.stringify(payment));
  toast.success("Successfully Paid");
};

export { addBill, getBill };
