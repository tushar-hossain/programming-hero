import React from "react";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    // <footer className="bg-neutral text-center md:text-left">
    //   <div className="w-11/12 mx-auto grid md:grid-cols-2 sm:footer-horizontal text-neutral-content py-15">
    //     <nav className="flex flex-col mb-5 md:mb-0">
    //       <h6 className="footer-title">Services</h6>
    //       <a className="link link-hover">Branding</a>
    //       <a className="link link-hover">Design</a>
    //       <a className="link link-hover">Marketing</a>
    //       <a className="link link-hover">Advertisement</a>
    //     </nav>
    //     <nav className="flex flex-col">
    //       <h6 className="footer-title">Company</h6>
    //       <a className="link link-hover">About us</a>
    //       <a className="link link-hover">Contact</a>
    //       <a className="link link-hover">Jobs</a>
    //       <a className="link link-hover">Press kit</a>
    //     </nav>
    //   </div>
    // </footer>
    <footer className="footer w-11/12 mx-auto sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <img className="w-13" src={logoImg} alt="brand logo image" />
        <p>Copyright © {new Date().getFullYear()} - Bill Management</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.youtube.com/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
