import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import logoImg from "../assets/more/logo1.png";

const Footer = () => {
  const handelSubmit = (e) => {
    e.preventDefault();

    // const message = Object.fromEntries(new FormData(e.target).entries());

    e.target.reset();
  };

  return (
    <div>
      <div className="py-12 bg-[url(../src/assets/13.jpg)]">
        <div className="w-11/12 mx-auto">
          <img className="w-15 h-15" src={logoImg} alt="brand logo" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-3">
              <div>
                <h1 className="text-xl font-bold lg:text-4xl text-[#331A15] my-3">
                  Espresso Emporium
                </h1>
                <p>
                  Always ready to be your friend. Come & Contact with us to
                  share your memorable moments, to share with your best
                  companion.
                </p>
              </div>
              {/* icon */}
              <div className="flex gap-5 my-5 items-center">
                <FaFacebook size={25} /> <FaTwitter size={25} />{" "}
                <FaInstagram size={25} /> <FaLinkedin size={25} />
              </div>

              <div className=" space-y-3">
                <h3 className="text-2xl font-bold text-[#331A15]">
                  Get in Touch
                </h3>
                <p className="flex gap-3 items-center">
                  <span>
                    <IoCallSharp size={18} />
                  </span>{" "}
                  +88 01533 333 333
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <IoMailSharp size={18} />
                  </span>{" "}
                  info@gmail.com
                </p>
                <p className="flex gap-3 items-center">
                  <span>
                    <MdLocationPin size={18} />
                  </span>{" "}
                  72, Wall street, King Road, Dhaka
                </p>
              </div>
            </div>

            <div>
              <h1 className="text-xl font-bold lg:text-3xl text-[#331A15] my-3">
                Connect with Us
              </h1>
              <form onSubmit={handelSubmit} className="space-y-3">
                <input
                  className="bg-base-300 p-2 rounded-lg w-full"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <br />
                <input
                  className="bg-base-300 p-2 rounded-lg w-full"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <br />
                <textarea
                  className="bg-base-300 p-2 rounded-lg w-full"
                  name="message"
                  placeholder="Message"
                ></textarea>
                <br />
                <input
                  className="text-[#331A15] text-xl font-bold border border-[#331A15] rounded-full py-2 px-4 cursor-pointer"
                  type="submit"
                  value="Send Message"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <p className="py-3 bg-black text-white text-center">
        Copyright Espresso Emporium ! All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
