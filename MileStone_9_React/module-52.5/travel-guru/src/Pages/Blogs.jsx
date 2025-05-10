import React from "react";
import { useLoaderData } from "react-router";
import Blog from "../components/Blog";

const Blogs = () => {
  const data = useLoaderData();

  return (
    <div className="py-12 w-11/12 mx-auto">
      <h1>Blogs</h1>
      <div className="spy-5">
        {data.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
