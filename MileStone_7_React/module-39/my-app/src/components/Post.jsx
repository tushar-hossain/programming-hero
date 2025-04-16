import React, { use } from "react";

const Post = ({ post }) => {
  const newPost = use(post);
  console.log(newPost);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {newPost.map((user) => {
        const { title, body } = user;
        return (
          <div
            className="border p-2 bg-amber-200 md:bg-indigo-200 md:text-gray-500  rounded-md"
            key={user.id}
          >
            <h1 className="mb-4 font-semibold text-justify">{title}</h1>
            <p className="text-justify">{body}</p>
          </div>
        );
      })}

      {/* <div>
        <img src="" alt="users photo" />
        <h1>title</h1>
        <p>thumbnailUrl</p>
      </div> */}
    </div>
  );
};

export default Post;
