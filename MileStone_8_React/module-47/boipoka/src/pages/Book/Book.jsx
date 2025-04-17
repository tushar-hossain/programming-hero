import React from "react";
import { Link } from "react-router";

const Book = ({ books }) => {
  const { bookId, bookName, category, image, rating } = books;
  return (
    <Link to={`/books-details/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-4">
        <figure className="bg-gray-100 p-5 w-2/3 mx-auto">
          <img className=" w-40 h-40" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
