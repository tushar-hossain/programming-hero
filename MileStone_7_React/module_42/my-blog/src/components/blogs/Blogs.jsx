import React from "react";
import Blog from "../blog/Blog";

const Blogs = ({ blogs, handleBookmarked, handleReadingTime }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmarked={handleBookmarked}
          handleReadingTime={handleReadingTime}
        />
      ))}
    </div>
  );
};

export default Blogs;
