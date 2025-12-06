import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLaoyt/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import AddBook from "../pages/Dashboard/AddBook/AddBook";
import MyBook from "../pages/Dashboard/MyBook/MyBook";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import AllBooks from "../pages/AllBooks/AllBooks";
import ErrorPage from "../shared/Error/ErrorPage";
import Profile from "../pages/Dashboard/Profile/Profile";
import PrivateRoute from "./PriviteRoute/PriviteRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "add-books",
        element: <AddBook />,
      },
      {
        path: "my-books",
        element: <MyBook />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
