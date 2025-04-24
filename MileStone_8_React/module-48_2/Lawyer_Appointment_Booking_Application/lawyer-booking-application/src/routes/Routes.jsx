import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Bookings from "../pages/Bookings/Bookings";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LawyersDetails from "../components/LawyersDetails/LawyersDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("../public/lawyearData.json"),
        hydrateFallbackElement: (
          <p className="flex items-center justify-center text-center mt-5">
            <span className="loading loading-bars loading-lg"></span>
          </p>
        ),
        Component: Home,
      },
      {
        path: "bookings",
        Component: Bookings,
      },
      {
        path: "blogs",
        hydrateFallbackElement: (
          <p className="flex items-center justify-center text-center mt-5">
            <span className="loading loading-bars loading-lg"></span>
          </p>
        ),
        loader: () => fetch("../public/questionData.json"),
        Component: Blogs,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "lawyers-details/:license",
        loader: () => fetch("../public/lawyearData.json"),
        hydrateFallbackElement: (
          <p className="flex items-center justify-center text-center mt-5">
            <span className="loading loading-bars loading-lg"></span>
          </p>
        ),
        Component: LawyersDetails,
      },
    ],
  },
]);
