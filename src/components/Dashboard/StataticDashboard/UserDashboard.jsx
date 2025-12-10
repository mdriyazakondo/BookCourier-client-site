import { FaBook, FaHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-purple-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-600">
        User Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* My Books */}
        <Link
          to={"/dashboard/my-orders"}
          className="p-6 bg-white rounded-xl shadow border border-purple-100"
        >
          <FaBook className="text-4xl text-indigo-600 mb-3" />
          <h2 className="text-xl font-bold mb-2">My Orders Books</h2>
          <p>You have active Orders books.</p>
        </Link>

        {/* Wishlist */}
        <Link
          to={"/dashboard/wish-list"}
          className="p-6 bg-white rounded-xl shadow border border-purple-100"
        >
          <FaHeart className="text-4xl text-pink-500 mb-3" />
          <h2 className="text-xl font-bold mb-2">My Wishlist</h2>
          <p> Books in your wishlist.</p>
        </Link>

        {/* Profile */}
        <Link
          to={"/dashboard/profile"}
          className="p-6 bg-white rounded-xl shadow border border-purple-100"
        >
          <FaUser className="text-4xl text-green-600 mb-3" />
          <h2 className="text-xl font-bold mb-2">Profile</h2>
          <p>Update your personal information.</p>
        </Link>
      </div>
    </div>
  );
};

export default UserDashboard;
