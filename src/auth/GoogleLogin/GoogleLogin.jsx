import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const GoogleLogin = () => {
  const { googleUserFunc } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleUserFunc();
      const user = result.user;
      if (!user) return;
      const userData = {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      };
      await axios.post(`http://localhost:3000/users`, userData);
      Swal.fire({
        title: `Welcome ${user.displayName}!`,
        text: "Login successful",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
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
    <div>
      <button
        onClick={handleGoogleLogin}
        className="py-2 w-full bg-green-500 text-white mt-4 cursor-pointer rounded-sm flex items-center gap-2 justify-center hover:bg-green-600 transition"
      >
        <FaGoogle />
        Google Login
      </button>
    </div>
  );
};

export default GoogleLogin;
