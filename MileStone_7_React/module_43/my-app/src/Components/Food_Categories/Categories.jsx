import React, { useEffect, useState } from "react";

const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
        setIsLoading(false);
      });
  }, []);

  const loadingMessage = <p className="text-xl font-medium py-2">Loading...</p>;

  const errorMessage = (
    <p className="text-xl font-medium py-2">Data is not fetch</p>
  );

  const handelCategory = (value) => {
    setCategory(value);
  };

  return (
    <div className="w-11/12 mx-auto mt-5">
      <h1 className="text-2xl font-semibold">Item Categories</h1>
      {isLoading && loadingMessage}
      {error && errorMessage}
      <div className="flex flex-wrap gap-4 py-5">
        {categories.map((category) => (
          <button
            onClick={() => handelCategory(category.strCategory)}
            className="btn font-medium"
            key={category.idCategory}
          >
            {category.strCategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
