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
import UserManagment from "../pages/Dashboard/Admin/UserManagment/UserManagment";
import ManageBook from "../pages/Dashboard/Admin/ManegeBook/ManegeBook";
import Orders from "../pages/Dashboard/Orders/Orders";
import Invoices from "../pages/Dashboard/Invoices/Invoices";
import StataticDashboard from "../pages/Dashboard/Dashboard/StataticDashboard";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import AdminRoute from "./PriviteRoute/AdminRoute";
import LibrarianRoute from "./PriviteRoute/LibrarianRoute";
import CustomerRoute from "./PriviteRoute/CustomerRoute";
import Contact from "../pages/Contact/Contact";

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
        path: "/contacts",
        element: <Contact />,
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
        index: true,
        element: <StataticDashboard />,
      },
      {
        path: "my-orders",
        element: (
          <CustomerRoute>
            <MyOrders />
          </CustomerRoute>
        ),
      },
      {
        path: "payment-success",
        element: (
          <CustomerRoute>
            <PaymentSuccess />
          </CustomerRoute>
        ),
      },
      {
        path: "invoices",
        element: (
          <CustomerRoute>
            <Invoices />
          </CustomerRoute>
        ),
      },
      {
        path: "add-books",
        element: (
          <LibrarianRoute>
            <AddBook />
          </LibrarianRoute>
        ),
      },
      {
        path: "my-books",
        element: (
          <LibrarianRoute>
            <MyBook />
          </LibrarianRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <LibrarianRoute>
            <Orders />
          </LibrarianRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      //===== admin=====//
      {
        path: "all-user",
        element: (
          <AdminRoute>
            <UserManagment />
          </AdminRoute>
        ),
      },
      {
        path: "manage-book",
        element: (
          <AdminRoute>
            <ManageBook />
          </AdminRoute>
        ),
      },
    ],
  },
]);
