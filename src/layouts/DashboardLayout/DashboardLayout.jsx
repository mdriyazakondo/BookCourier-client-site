import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { FiHome, FiMenu, FiSun, FiMoon } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const DashboardLayout = () => {
  const { pathname } = useLocation();
  const { user, logoutUserFunc, loading } = useAuth();
  const navigate = useNavigate();

  // Active Link Checker
  const isActive = (path) =>
    pathname === path
      ? "bg-green-200 dark:bg-green-700 text-green-700 dark:text-white font-semibold"
      : "hover:bg-green-100 dark:hover:bg-gray-700";

  // Theme State
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  // Apply Theme
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle Theme
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  //======== user logout =========
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

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900 dark:text-white">
      <div className="drawer lg:drawer-open">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

        {/* Main Content */}
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <nav className="navbar shadow-md px-4 flex justify-between items-center bg-white dark:bg-gray-800 dark:text-white ">
            <label htmlFor="drawer-toggle" className="btn btn-ghost lg:hidden">
              <FiMenu className="text-xl" />
            </label>

            <h2 className="text-xl font-semibold">
              <Link to="/">Dashboard</Link>
            </h2>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {theme === "light" ? (
                <FiMoon className="text-xl" />
              ) : (
                <FiSun className="text-xl" />
              )}
            </button>
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
                    to="/dashboard/my-orders"
                    className={`flex items-center gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                      "/dashboard/my-orders"
                    )}`}
                  >
                    <FiHome className="text-lg" />
                    <span>My Orders</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/add-books"
                    className={`flex items-center gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                      "/dashboard/add-books"
                    )}`}
                  >
                    <FiHome className="text-lg" />
                    <span>Add Book</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/my-books"
                    className={`flex items-center gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                      "/dashboard/my-books"
                    )}`}
                  >
                    <FiHome className="text-lg" />
                    <span>My Books</span>
                  </Link>
                </li>

                {/* Admin */}

                <li>
                  <Link
                    to="/dashboard/user-manage"
                    className={`flex items-center gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
                      "/dashboard/user-manage"
                    )}`}
                  >
                    <FiHome className="text-lg" />
                    <span>User Manage</span>
                  </Link>
                </li>
              </div>

              {/* Profile */}
              <li>
                <Link
                  to="/dashboard/profile"
                  className={`flex items-center gap-3 py-2 px-3 rounded-lg transition mt-2 ${isActive(
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
                  className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-green-200 dark:hover:bg-red-600 dark:text-white text-green-700 transition"
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
