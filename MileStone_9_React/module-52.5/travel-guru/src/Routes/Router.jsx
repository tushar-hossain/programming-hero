import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import Loading from "../components/Loading";
import Booking from "../components/Booking";
import AuthLayouts from "../AuthContext/AuthLayouts";
import Login from "../Pages/Login";
import CreateAccount from "../Pages/CreateAccount";
import Blogs from "../Pages/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/travelData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/booking/:id",
        Component: Booking,
        loader: () => fetch("/travelData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "",
    Component: AuthLayouts,
    children: [
      {
        index: true,
        path: "/auth/login",
        Component: Login,
      },
      { path: "/auth/create-account", Component: CreateAccount },
      {
        path: "blog",
        Component: Blogs,
        loader: () => fetch("/blogsData.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
export default router;
