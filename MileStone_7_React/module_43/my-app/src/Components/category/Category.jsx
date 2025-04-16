import React, { useEffect, useState } from "react";

const Category = ({ category, handelCart }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${category}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.meals));
  }, [category]);

  return (
    <div className="w-11/12 mx-auto grid gap-5 grid-cols-4 ">
      {product === null ? (
        <h1 className="col-span-full text-center text-4xl font-semibold">
          Product Not Found
        </h1>
      ) : (
        product?.map((cat) => (
          <div className="bg-gray-200 p-4 rounded-lg" key={cat.idMeal}>
            <img
              className="w-[300px] rounded-lg"
              src={cat.strMealThumb}
              alt=""
            />
            <h1 className="mt-4 text-xl font-medium">{cat.strMeal}</h1>
            <button
              onClick={() => handelCart(cat)}
              className="btn btn-secondary mt-4 "
            >
              Order Now
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Category;
