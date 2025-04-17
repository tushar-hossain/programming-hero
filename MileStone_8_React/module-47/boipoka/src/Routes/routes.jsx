import { createBrowserRouter } from "react-router";
import Error from "../pages/Error/Error";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import BookList from "../pages/BookList/BookList";
import PageRead from "../pages/PageRead/PageRead";
import BookDetails from "../pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: () => fetch("./public/booksData.json"),
        path: "/",
        Component: Home,
      },
      {
        path: "/book-list",
        loader: () => fetch("./public/booksData.json"),
        Component: BookList,
      },
      { path: "/page-read", Component: PageRead },
      {
        path: "/books-details/:id",
        loader: () => fetch("./public/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);
