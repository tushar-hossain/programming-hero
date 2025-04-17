import React, { useEffect, useState } from "react";

import { getLocalStorageItem } from "../../components/Utilities/LocalStorage";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const BookList = () => {
  const data = useLoaderData();
  const [filterBook, setFilterBook] = useState([]);

  const readBookList = getLocalStorageItem();
  const readBook = readBookList.map((book) => parseInt(book));

  useEffect(() => {
    const filterData = data.filter((book) => readBook.includes(book.bookId));
    setFilterBook(filterData);
  }, []);

  const handleSort = (type) => {
    if (type === "pages") {
      const sortPage = [...filterBook].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setFilterBook(sortPage);
    }

    if (type === "ratings") {
      const sortPage = [...filterBook].sort((a, b) => a.rating - b.rating);
      setFilterBook(sortPage);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <details className="dropdown">
          <summary className="btn m-1">Sort by </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>

      <div>
        <Tabs>
          <TabList>
            <Tab>
              <h1>Book List</h1>
            </Tab>
            <Tab>
              <h1>Wishlist List</h1>
            </Tab>
          </TabList>

          <TabPanel>
            {filterBook.map((singleBook) => {
              const { bookId, bookName, image, publisher, totalPages } =
                singleBook;
              return (
                <div key={bookId} className="border mt-4">
                  <div className="flex gap-5 items-center">
                    <img className="w-30" src={image} alt="" />
                    <div className="w-full flex-1">
                      <h1>{bookName}</h1>
                      <h3>publisher : {publisher}</h3>
                      <p>totalPages : {totalPages}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default BookList;
