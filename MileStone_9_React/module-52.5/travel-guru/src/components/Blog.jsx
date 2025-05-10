import React from "react";

const Blog = ({ blog }) => {
  const { title, author, date, excerpt, content, coverImage } = blog || {};

  return (
    <div className="bg-base-300 p-3 flex gap-5 mt-5 rounded-lg">
      <div>
        <img className="w-full h-[300px] rounded-lg" src={coverImage} alt="" />
      </div>
      <div className=" space-y-3 bg-base-100 p-3 rounded-lg w-full">
        <h3 className="text-center text-2xl font-bold">{title}</h3>
        <p className=" font-bold">Author: {author}</p>
        <p className=" font-bold">Date: {date}</p>
        <p>{content}</p>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

export default Blog;
