import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateEventPage from "../pages/CreateEventPage";
import HelpPage from "../pages/HelpPage";
import Login from "../pages/LoginPage";
import EditEventPage from "../pages/EditEventPage";
import ProtectedRoute from "./ProtectedRoute";

export default createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/createEvent",
      element: (
        <ProtectedRoute>
          <CreateEventPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/editEvent/:id",
      element: (
        <ProtectedRoute>
          <EditEventPage />
        </ProtectedRoute>
      ),
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