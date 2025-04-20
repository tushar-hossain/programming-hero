import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Carts from "../Pages/Cart/Carts";
import Favorites from "../Pages/Favorites/Favorites";
import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",

        loader: () => fetch("../phones.json"),
        HydrateFallback: () => <p className="text-xl">Loading...</p>,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "cart",
        Component: Carts,
      },
      {
        path: "favorites",
        Component: Favorites,
      },
      {
        path: "phone-details/:id",
        HydrateFallback: () => <p className="text-xl">Loading...</p>,
        loader: () => fetch("../phones.json"),
        Component: PhoneDetails,
      },
    ],
  },
]);

export default router;
