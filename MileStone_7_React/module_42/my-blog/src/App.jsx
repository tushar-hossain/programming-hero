import { useEffect, useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const [isLoadig, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/refs/heads/main/public/blogs.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setBlogs(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  const handleBookmarked = (blog) => {
    setBookMark([...bookMark, blog]);
  };

  const handleReadingTime = (time, id) => {
    setReadingTime((readingTime) => readingTime + time);
    const remainingTime = bookMark.filter((book) => book.id !== id);

    setBookMark(remainingTime);
  };

  return (
    <>
      {isLoadig && <p>Loading...</p>}
      {error && <p>Data is not fetch. Please try again...</p>}

      <Navbar />

      <main className="w-11/12 mx-auto p-4 flex gap-4">
        <div className="blogs-container w-[70%]">
          <h1 className="text-2xl font-bold mb-4">Blogs: {blogs.length}</h1>

          <Blogs
            blogs={blogs}
            handleBookmarked={handleBookmarked}
            handleReadingTime={handleReadingTime}
          />
        </div>

        <div className="bookMark-container w-[30%] bg-gray-200 rounded-l-lg p-3">
          <h2 className="text-xl font-medium">Reading Time: {readingTime} </h2>
          <h2 className="text-xl font-medium">
            Bookmarked Blogs: {bookMark.length}
          </h2>
          <hr className="mt-5 border-gray-300" />
          <div className="mt-5">
            {bookMark.map((book) => (
              <h3
                className="text-xl font-medium  bg-gray-300 p-3 rounded-lg m-3"
                key={book.id}
              >
                {book.title}
              </h3>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
