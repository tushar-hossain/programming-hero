import React from "react";
import { useLoaderData, useParams } from "react-router";
import { setLocalStorageItem } from "../../components/Utilities/LocalStorage";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();

  const newBook = data.find((book) => book.bookId === bookId);
  const { bookName, category, image, review } = newBook;

  const handleClicked = (id) => {
    setLocalStorageItem(id);
  };

  return (
    <div className="w-11/12 mx-auto flex gap-4 justify-between">
      <div>
        <img className="h-[500px]" src={image} alt="" />
      </div>
      <div className="w-full flex-1">
        <h1>{bookName}</h1>
        <h3>{category}</h3>
        <p>{review}</p>
        <button className="btn" onClick={() => handleClicked(id)}>
          Read
        </button>
        <button className="btn">Wishlist</button>
      </div>
    </div>
  );
};

export default BookDetails;
