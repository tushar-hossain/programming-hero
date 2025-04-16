import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const { title, body } = useLoaderData();
  const navigate = useNavigate();

  return (
    <div>
      <h2>This is Post details</h2>
      <h4>{title}</h4>
      <p>{body}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default PostDetails;
