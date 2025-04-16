import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import Post from "./Post";

const Posts = () => {
  const posts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  };

  const post = posts();

  return (
    <div className="w-11/12 mx-auto py-5">
      <ErrorBoundary
        fallback={
          <h3 className="font-bold text-center">⚠️Something went wrong</h3>
        }
      >
        <Suspense
          fallback={<h3 className="text-center font-bold">Loading...</h3>}
        >
          <Post post={post} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Posts;
