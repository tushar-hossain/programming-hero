import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item bg-base-100 py-8  text-accent font-bold justify-start">
            <span className="p-2 rounded-full bg-base-300 text-blue-500">
              <GrFacebookOption size={24} />
            </span>
            Facebook
          </button>
          <button className="btn join-item bg-base-100 py-8  text-accent font-bold justify-start">
            <span className="p-2 rounded-full bg-base-300 text-blue-500">
              <FaTwitter size={24} />
            </span>
            Twitter
          </button>
          <button className="btn join-item bg-base-100 py-8  text-accent font-bold justify-start">
            <span className="p-2 rounded-full bg-base-300 text-orange-500">
              <FaInstagramSquare size={24} />
            </span>
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
