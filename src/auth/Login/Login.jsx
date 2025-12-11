// src/components/Login/Login.jsx
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const { loginUserFunc } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleLogin = async (data) => {
    try {
      const result = await loginUserFunc(data.email, data.password);
      const user = result.user;

      // Optional: save login info Riyaz111
      await axiosSecure.post(`/users`, {
        email: data.email,
      });

      Swal.fire({
        title: `Welcome ${user.displayName || user.email}!`,
        text: "Login successful",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
      navigate(from, { replace: true });
      reset();
    } catch (error) {
      Swal.fire({
        title: "Login Failed",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="bg-purple-50 min-h-[92vh] flex items-center justify-center">
      <div className="bg-purple-100 p-8 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-purple-700 font-semibold mb-1"
            >
              Email
            </label>
            <div className="flex items-center border border-purple-300 rounded p-2 focus-within:ring-2 focus-within:ring-purple-400">
              <FaEnvelope className="text-purple-500 mr-2" />
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                placeholder="Email"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-purple-700 font-semibold mb-1"
            >
              Password
            </label>
            <div className="flex items-center border border-purple-300 rounded p-2 focus-within:ring-2 focus-within:ring-purple-400">
              <FaLock className="text-purple-500 mr-2" />
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                placeholder="Password"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>
          <Link to={"/forget-password"}>
            <p className="font-semibold underline mb-3 text-purple-500">
              Forget Password
            </p>
          </Link>

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="text-purple-700 text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-900 font-semibold">
            Register
          </Link>
        </p>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Login;
