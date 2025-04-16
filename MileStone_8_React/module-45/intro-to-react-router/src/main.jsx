import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";

import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Laptops from "./components/Laptops/Laptops.jsx";
import Mobiles from "./components/Mobiles/Mobiles.jsx";
import Users from "./components/Users/Users.jsx";
import User from "./components/User/User.jsx";
import UsersDetails from "./components/UsersDetails/UsersDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/PostsDetails/PostDetails.jsx";

const userPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "home", Component: Laptops },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      { path: "app", Component: App },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "user",
        element: (
          <Suspense>
            <User userPromise={userPromise} />
          </Suspense>
        ),
      },
      {
        path: "/user/:userId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UsersDetails,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "posts/:postId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Page not Found! 404</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
