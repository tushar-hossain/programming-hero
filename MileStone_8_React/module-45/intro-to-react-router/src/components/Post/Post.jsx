import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div style={{ border: "2px solid white", margin: "10px" }}>
      <p>{id}</p>
      <h3>{title}</h3>
      <Link to={`/posts/${id}`}>
        <button>Show Details...</button>
      </Link>
    </div>
  );
};

export default Post;
