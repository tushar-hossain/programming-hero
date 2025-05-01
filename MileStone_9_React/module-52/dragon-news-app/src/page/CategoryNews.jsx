import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (parseInt(id) === 0) {
      setCategoryNews(data);
    } else if (parseInt(id) === 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter(
        (news) => news.category_id === parseInt(id)
      );
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      {categoryNews.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default CategoryNews;
