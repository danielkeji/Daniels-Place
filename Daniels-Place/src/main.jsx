import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Booking from "./Pages/Booking.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/gallery", element: <Gallery /> },
  {path: "/booking", element: <Booking />},
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
