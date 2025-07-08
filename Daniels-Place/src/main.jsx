import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { Gallery, Booking, Schedule, Error } from "./Pages";
import { ThemeProvider } from "./utils/ThemeContext.jsx";
import { BookingProvider } from "./utils/BookingContext.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/gallery", element: <Gallery />, errorElement: <Error /> },
  {
    path: "/booking",
    element: <Booking />,
    errorElement: <Error />,
  },
  { path: "/schedule", element: <Schedule />, errorElement: <Error /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BookingProvider>
        <RouterProvider router={router} />
      </BookingProvider>
    </ThemeProvider>
  </StrictMode>
);
