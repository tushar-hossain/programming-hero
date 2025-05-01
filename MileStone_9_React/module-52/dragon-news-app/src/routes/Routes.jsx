import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../page/Home";
import CategoryNews from "../page/CategoryNews";
import About from "../page/About";
import Career from "../page/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: (
          <>
            <span className="loading loading-bars loading-lg"></span>
          </>
        ),
      },
      { path: "about", Component: About },
      { path: "career", Component: Career },
    ],
  },

  { path: "auth", element: <h2>Auth</h2> },
  { path: "news", element: <h2>news</h2> },
  { path: "*", element: <h2>Error</h2> },
]);

export default router;
