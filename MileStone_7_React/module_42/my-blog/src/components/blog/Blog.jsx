import React from "react";

import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarked, handleReadingTime }) => {
  const {
    id,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;

  return (
    <div className="bg-gray-100 flex flex-col rounded-lg p-4 gap-4 mb-4">
      <img className="mx-auto w-full" src={cover} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img className="w-10" src={author_img} alt="" />
          <div className="">
            <p>{author}</p>
            <p>{posted_date} </p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleBookmarked(blog)}
            className="text-red-500 ml-2 cursor-pointer"
          >
            <FaBookmark size={20} />
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-medium">{title}</h1>

      <div className="flex gap-4">
        {hashtags.map((hash) => (
          <p key={hash}>#{hash} </p>
        ))}
      </div>

      <a
        onClick={() => handleReadingTime(reading_time, id)}
        className="cursor-pointer active:text-purple-400 btn"
      >
        Mark As Read
      </a>
    </div>
  );
};

export default Blog;
