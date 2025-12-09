import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { FiHome, FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaHeartPulse, FaRegCircleUser } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FaBook, FaJediOrder } from "react-icons/fa";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { SiWikibooks } from "react-icons/si";
import { BsBorderStyle } from "react-icons/bs";
import { GrUserManager } from "react-icons/gr";
import useRole from "../../hooks/useRole";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const { user, logoutUserFunc, loading } = useAuth();
  const navigate = useNavigate();
  const [role] = useRole();

  const isActive = (path) =>
    pathname === path
      ? "bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-white font-semibold"
      : "hover:bg-purple-100 dark:hover:bg-gray-700";

  const handleLogout = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    });
    if (!confirm.isConfirmed) return;
    try {
      await logoutUserFunc();
      Swal.fire({
        title: "Logout Successful",
        text: "You have been logged out",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Logout Failed",
        text: error.message || "Something went wrong",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  if (loading) return null;

  return (
    <div className="min-h-screen bg-purple-50 dark:bg-gray-900 dark:text-white">
      <div className="drawer lg:drawer-open">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <nav className="navbar shadow-md px-4 flex justify-between items-center bg-white dark:bg-gray-800 dark:text-white ">
            <label htmlFor="drawer-toggle" className="btn btn-ghost lg:hidden">
              <FiMenu className="text-xl" />
            </label>

            <h2 className="text-2xl font-bold text-purple-500">
              <Link to="/">Book Courier</Link>
            </h2>
          </nav>

          <div className="p-6 ">
            <Outlet />
          </div>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="drawer-toggle" className="drawer-overlay"></label>

          <aside className="w-64 bg-white dark:bg-gray-800 shadow-md min-h-full p-4 flex flex-col">
            <ul className="menu text-base flex-1 dark:text-gray-200">
              <div className="min-h-[85vh] ">
                {/* Home */}

                <li>
                  <Link
                    to="/"
                    className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                      "/"
                    )}`}
                  >
                    <FiHome className="text-lg" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                      "/dashboard"
                    )}`}
                  >
                    <MdDashboard className="text-lg" />
                    <span>Dashboard</span>
                  </Link>
                </li>

                {role === "customer" && (
                  <>
                    <li>
                      <Link
                        to="/dashboard/my-orders"
                        className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                          "/dashboard/my-orders"
                        )}`}
                      >
                        <FaJediOrder className="text-lg" />
                        <span>My Orders</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/invoices"
                        className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                          "/dashboard/invoices"
                        )}`}
                      >
                        <LiaFileInvoiceSolid className="text-lg" />
                        <span>Invoices</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/wish-list"
                        className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                          "/dashboard/wish-list"
                        )}`}
                      >
                        <FaHeartPulse className="text-lg" />
                        <span>Wish List</span>
                      </Link>
                    </li>
                  </>
                )}

                {role === "Librarian" && (
                  <>
                    <li>
                      <Link
                        to="/dashboard/add-books"
                        className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                          "/dashboard/add-books"
                        )}`}
                      >
                        <FaBook className="text-lg" />
                        <span>Add Book</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/my-books"
                        className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                          "/dashboard/my-books"
                        )}`}
                      >
                        <SiWikibooks className="text-lg" />
                        <span>My Books</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/orders"
                        className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                          "/dashboard/orders"
                        )}`}
                      >
                        <BsBorderStyle className="text-lg" />
                        <span>Orders</span>
                      </Link>
                    </li>
                  </>
                )}

                {/* Admin */}
                {role === "admin" && (
                  <>
                    <li>
                      <Link
                        to="/dashboard/all-user"
                        className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                          "/dashboard/all-user"
                        )}`}
                      >
                        <GrUserManager className="text-lg" />
                        <span>All User</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard/manage-book"
                        className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                          "/dashboard/manage-book"
                        )}`}
                      >
                        <FaBook className="text-lg" />
                        <span>Manage Book</span>
                      </Link>
                    </li>
                  </>
                )}
              </div>

              {/* Profile */}
              <li>
                <Link
                  to="/dashboard/profile"
                  className={`flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                    "/dashboard/profile"
                  )}`}
                >
                  <FaRegCircleUser className="text-lg" />
                  <span>Profile</span>
                </Link>
              </li>

              {/* Logout */}
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-purple-500 gap-3 py-2 px-3 rounded-lg hover:bg-purple-200 dark:hover:bg-red-600 dark:text-white  transition"
                >
                  <MdLogout className="text-lg" />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
