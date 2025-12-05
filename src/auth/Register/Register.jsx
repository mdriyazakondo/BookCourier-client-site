import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { IoIosPhotos } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import Swal from "sweetalert2";
import { imageUpload } from "../../utils";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const { createUserFunc } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleRegister = async (data) => {
    const imageFile = data.photo[0];
    const images = await imageUpload(imageFile);
    try {
      const userData = {
        name: data.name,
        email: data.email,
        image: images,
      };
      const result = await createUserFunc(data.email, data.password);
      const user = result.user;

      await updateProfile(user, {
        displayName: data.name,
        photoURL: images,
      });

      await axios.post("http://localhost:3000/users", userData);

      Swal.fire({
        title: `Welcome ${user.displayName}!`,
        text: "Registration successful",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
      navigate(from, { replace: true });
      reset();
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Registration Failed",
        text: error.message,
        icon: "error",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="bg-green-50 min-h-[92vh] flex items-center justify-center">
      <div className="bg-green-100 p-8 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Register
        </h2>
        <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-green-700 font-semibold mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-green-300 rounded p-2 focus-within:ring-2 focus-within:ring-green-400">
              <FaUser className="text-green-500 mr-2" />
              <input
                {...register("name", { required: true })}
                type="text"
                id="name"
                placeholder="Full Name"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Photo */}
          <div className="flex flex-col">
            <label
              htmlFor="photo"
              className="text-green-700 font-semibold mb-1"
            >
              Your Photo
            </label>
            <div className="flex items-center border border-green-300 rounded p-2 focus-within:ring-2 focus-within:ring-green-400">
              <IoIosPhotos className="text-green-500 mr-2" />
              <input
                {...register("photo", { required: true })}
                type="file"
                id="photo"
                placeholder="Your Photo URL"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-green-700 font-semibold mb-1"
            >
              Email
            </label>
            <div className="flex items-center border border-green-300 rounded p-2 focus-within:ring-2 focus-within:ring-green-400">
              <FaEnvelope className="text-green-500 mr-2" />
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
              className="text-green-700 font-semibold mb-1"
            >
              Password
            </label>
            <div className="flex items-center border border-green-300 rounded p-2 focus-within:ring-2 focus-within:ring-green-400">
              <FaLock className="text-green-500 mr-2" />
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                placeholder="Password"
                className="w-full outline-none bg-transparent"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-green-700 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-900 font-semibold">
            Login
          </Link>
        </p>
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Register;
