import { toast } from "react-toastify";

export const getLawyer = () => {
  const lawyers = localStorage.getItem("lawyer");
  if (lawyers) {
    return JSON.parse(lawyers);
  }
  return [];
};

export const addLawyer = (license) => {
  const lawyers = getLawyer();
  const isExist = lawyers.find(
    (lawyer) => lawyer.license_no === license.license_no
  );
  if (isExist) return toast.error("Already Exists Lawyers");

  lawyers.push(license);
  localStorage.setItem("lawyer", JSON.stringify(lawyers));
  toast.success("Booking Lawyers");
};

export const removeLawyer = (license) => {
  const lawyers = getLawyer();
  const remainingLawyer = lawyers.filter(
    (lawyer) => lawyer.license_no !== license
  );
  localStorage.setItem("lawyer", JSON.stringify(remainingLawyer));
  toast.error("Remove Booking Lawyers");
};
