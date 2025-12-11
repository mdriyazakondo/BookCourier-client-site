import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import useRole from "../../hooks/useRole";

const Navbar = () => {
  const location = useLocation();
  const [role] = useRole();
  const navigate = useNavigate();
  const { user, logoutUserFunc, loading } = useAuth();


  const isActive = (path) =>
    location.pathname === path
      ? "bg-purple-500 text-white rounded-sm"
      : "text-purple-500 font-semibold hover:bg-purple-500 hover:text-white rounded-sm";

  const links = (
    <>
      <li className={isActive("/")}>
        <Link to="/">Home</Link>
      </li>

      <li className={`${isActive("/all-books")} ml-2`}>
        <Link to="/all-books">All Books</Link>
      </li>
      <li className={`${isActive("/contacts")} ml-2`}>
        <Link to="/contacts">Contact Us</Link>
      </li>
      {role === "customer" && (
        <li className={`${isActive("/dashboard/wish-list")} ml-2`}>
          <Link to="/dashboard/wish-list">My Wish List</Link>
        </li>
      )}

      <li className={`${isActive("/dashboard")} ml-2`}>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </>
  );

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
      Swal.fire({
        title: "Logout Failed",
        text: error.message || "Something went wrong",
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="bg-base-100 shadow-sm fixed top-0 left-0 right-0 z-9999">
      <div className="navbar max-w-[1500px] mx-auto">
        {/* Left - Logo + Mobile menu */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:block">
            <Logo />
          </div>
        </div>

        {/* Center - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end flex items-center gap-4">
          {loading ? (
            <div className="">
              <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              {user ? (
                <div className="flex items-center gap-2">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user?.photoURL || user?.proactiveRefresh?.user?.photoURL}
                      alt=""
                    />
                  </div>
                  <button
                    onClick={handleLogout}
                    className="py-2 px-4 bg-purple-500 text-white rounded-sm hover:bg-purple-600 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <Button title={"Login"} links={"login"} />
                  <Button title={"Register"} links={"register"} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
