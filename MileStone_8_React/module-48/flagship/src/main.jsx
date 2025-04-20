import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Routes.jsx";
import CartProviders from "./providers/CartProviders.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProviders>
      <RouterProvider router={router} />
      <Toaster position="bottom-0 right-0" />
    </CartProviders>
  </StrictMode>
);
