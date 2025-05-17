import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import AddCoffee from "../Pages/AddCoffee";
import Loading from "../components/Loading";
import CoffeeDetails from "../components/CoffeeDetails";
import UpdateCoffee from "../Pages/UpdateCoffee";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ResetPassword from "../Pages/ResetPassword";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
        hydrateFallbackElement: <Loading />,
        loader: () =>
          fetch("https://coffee-store-server-nine-gules.vercel.app/coffees"),
      },
      {
        path: "add-coffee",
        element: (
          <PrivateRoute>
            <AddCoffee />
          </PrivateRoute>
        ),
      },
      {
        path: "coffee-details/:id",
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-nine-gules.vercel.app/coffees/${params.id}`
          ),
        Component: CoffeeDetails,
      },
      {
        path: "coffee-update/:id",
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-nine-gules.vercel.app/coffees/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateCoffee />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "reset-password",
    Component: ResetPassword,
  },
]);
