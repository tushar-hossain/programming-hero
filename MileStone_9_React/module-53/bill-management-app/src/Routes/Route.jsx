import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Loading from "../Components/Loading/Loading";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import Profile from "../Pages/Profile/Profile";
import Bills from "../Pages/Bills/Bills";
import BillDetails from "../Pages/Bills/BillDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/billsData.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <PrivateRoute>
            <ContactUs />
          </PrivateRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "bills",
        element: (
          <PrivateRoute>
            <Bills />
          </PrivateRoute>
        ),
        loader: () => fetch("/billsData.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "bill-details/:id",
        element: (
          <PrivateRoute>
            <BillDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/billsData.json"),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

export default router;
