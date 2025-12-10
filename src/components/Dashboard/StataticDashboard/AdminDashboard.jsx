import {
  FaTools,
  FaUserShield,
  FaChartPie,
  FaBook,
  FaUser,
  FaTruckMoving,
  FaStar,
  FaClipboardList,
} from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 to-purple-300 p-6">
      {/* HEADER */}
      <h1 className="text-4xl font-extrabold mb-8 text-center text-purple-700">
        📊 Admin Control Panel
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Manage the entire Book Courier platform from here
      </p>

      {/* ADMIN GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Manage All Users */}
        <DashboardCard
          icon={<FaUser className="text-5xl text-blue-600" />}
          title="Manage Users"
          desc="View, update or delete user accounts"
        />

        {/* Manage Librarians */}
        <DashboardCard
          icon={<FaUserShield className="text-5xl text-orange-500" />}
          title="Manage Librarians"
          desc="Approve, remove or update librarian accounts"
        />

        {/* Manage Books */}
        <DashboardCard
          icon={<FaBook className="text-5xl text-green-600" />}
          title="Manage Books"
          desc="Add, update or remove books from system"
        />

        {/* Parcels / Orders */}
        <DashboardCard
          icon={<FaTruckMoving className="text-5xl text-purple-600" />}
          title="Manage Parcels"
          desc="Track book deliveries & parcel status"
        />

        {/* Reviews */}
        <DashboardCard
          icon={<FaStar className="text-5xl text-yellow-500" />}
          title="Manage Reviews"
          desc="Monitor or delete abusive reviews"
        />

        {/* System Settings */}
        <DashboardCard
          icon={<FaTools className="text-5xl text-red-500" />}
          title="System Settings"
          desc="Platform configuration & global settings"
        />

        {/* Roles */}
        <DashboardCard
          icon={<FaUserShield className="text-5xl text-indigo-500" />}
          title="Role Management"
          desc="Assign User, Librarian, Admin roles"
        />

        {/* Reports & Analytics */}
        <DashboardCard
          icon={<FaChartPie className="text-5xl text-pink-600" />}
          title="Analytics"
          desc="View advanced system statistics"
        />

        {/* Activity Logs */}
        <DashboardCard
          icon={<FaClipboardList className="text-5xl text-gray-700" />}
          title="Activity Logs"
          desc="Monitor system actions & security logs"
        />
      </div>

      {/* FOOTER */}
      <p className="text-center mt-12 text-gray-600">
        Visit Live Website:{" "}
        <a
          className="text-purple-700 font-bold hover:underline"
          href="https://book-courier-client-site.vercel.app/"
          target="_blank"
        >
          Book Courier Website
        </a>
      </p>
    </div>
  );
};

export default AdminDashboard;

/* REUSABLE CARD COMPONENT */
const DashboardCard = ({ icon, title, desc }) => {
  return (
    <div className="p-6 bg-white/80 backdrop-blur-md shadow-xl hover:shadow-2xl cursor-pointer rounded-2xl border border-purple-100 hover:-translate-y-1 transition-all duration-300">
      <div className="mb-4 flex justify-center">{icon}</div>
      <h2 className="text-xl font-bold text-center mb-2">{title}</h2>
      <p className="text-gray-600 text-center">{desc}</p>
    </div>
  );
};
