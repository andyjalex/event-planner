import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import HomePage from "./pages/HomePage";
import CreateEventPage from "./pages/CreateEventPage";
import HelpPage from "./pages/HelpPage";
import Login from "./pages/LoginPage";
import EditEventPage from "./pages/EditEventPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/createEvent",
    element: <CreateEventPage />,
  },
  {
    path: "/editEvent/:id",
    element: <EditEventPage />,
  },
  {
    path: "/help",
    element: <HelpPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
