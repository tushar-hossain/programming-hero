import React from "react";
import bannerImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex items-center justify-between p-10 bg-gray-100 rounded-lg mb-10">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Books to freshen up <br /> your bookshelf
        </h1>
        <button className="btn btn-primary">View The List</button>
      </div>
      <div>
        <img className="w-[400px]" src={bannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
