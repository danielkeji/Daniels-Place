import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Gallery from "./Pages/Gallery.jsx";
import Booking from "./Pages/Booking.jsx";
import Schedule from "./Pages/Schedule.jsx";
import { ThemeProvider } from "./utils/ThemeContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/gallery", element: <Gallery /> },
  {
    path: "/booking",
    element: <Booking />,
  },
  { path: "/schedule", element: <Schedule /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
