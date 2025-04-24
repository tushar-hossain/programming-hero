import React from "react";
import { useLoaderData } from "react-router";

const Blogs = () => {
  const data = useLoaderData();
  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h1 className="text-xl md:text-2xl font-bold mb-3">Blogs</h1>
        <p>
          Let's explore some basic concept that will make you a good developer
        </p>
      </div>

      <div>
        {data.map((ques) => {
          const { id, question, answer } = ques || {};
          return (
            <div key={id} className="bg-gray-100 mb-5 p-4 rounded-lg">
              <h2 className="text-xl font-medium mb-3">{question}</h2>
              <p className="bg-gray-200 p-2 font-semibold rounded-lg">
                Ans: {answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
