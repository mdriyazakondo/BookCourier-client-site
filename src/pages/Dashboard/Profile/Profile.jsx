import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../shared/Loading/Loading";
import { useForm } from "react-hook-form";
import { imageUpload } from "../../../utils";
import { FaUser } from "react-icons/fa";
import { IoIosPhotos } from "react-icons/io";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [isProfile, setIsProfile] = useState(false);
  const {
    data: userInfo = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user-info", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user.email}`);
      return data;
    },
  });

  const { register, handleSubmit, reset } = useForm();

  const handleProfileUpdate = async (data) => {
    try {
      Swal.fire({
        title: "Updating...",
        text: "Please wait",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      let imageURL = image;

      if (data.photo && data.photo.length > 0) {
        imageURL = await imageUpload(data.photo[0]);
      }

      await updateProfile(user, {
        displayName: data.name,
        photoURL: imageURL,
      });

      const updateData = {
        name: data.name,
        image: imageURL,
      };

      const res = await axiosSecure.patch(`/users/${userInfo._id}`, updateData);

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Profile Updated!",
          text: "Your profile information has been updated successfully.",
          confirmButtonColor: "#16a34a",
        });

        refetch();
        reset();
        setIsProfile(false);
      } else {
        Swal.fire({
          icon: "info",
          title: "No Changes",
          text: "Nothing was updated!",
          confirmButtonColor: "#16a34a",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonColor: "#dc2626",
      });
    }
  };

  if (isLoading) return <Loading />;

  const { name, email, image, create_date, last_loggedIn, role } = userInfo;

  return (
    <>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-green-50 shadow-lg rounded-lg border border-green-400">
        <div className="flex flex-col items-center text-center">
          <img
            src={image}
            alt="Profile"
            className="w-28 h-28 rounded-full border-2 border-green-400 shadow"
          />

          <p className="border border-green-400 rounded-full py-1 px-3 bg-green-200 mt-1 text-gray-700 font-semibold">
            {role}
          </p>

          <h2 className="text-2xl font-semibold mt-3">{name}</h2>
          <p className="text-gray-600">{email}</p>

          <div className="mt-5 w-full text-left space-y-2">
            <p>
              <span className="font-semibold">Created:</span>{" "}
              {new Date(create_date).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Last Login:</span>{" "}
              {new Date(last_loggedIn).toLocaleString()}
            </p>
          </div>
          <button
            onClick={() => setIsProfile(true)}
            className={`py-2 px-4 w-full mt-3 bg-green-500 text-white font-semibold rounded-md cursor-pointer ${
              isProfile ? "hidden" : "block"
            }`}
          >
            Update Profile
          </button>
        </div>
      </div>

      {isProfile && (
        <div className="max-w-lg mx-auto mt-8 border border-green-400 p-3 rounded-md">
          <form onSubmit={handleSubmit(handleProfileUpdate)}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-green-700 font-semibold mb-1"
              >
                Full Name
              </label>
              <div className="flex items-center border border-green-300 rounded p-2 focus-within:ring-2 focus-within:ring-green-400">
                <FaUser className="text-green-500 mr-2" />
                <input
                  {...register("name")}
                  type="text"
                  defaultValue={userInfo?.name}
                  id="name"
                  placeholder="Full Name"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <label
                htmlFor="photo"
                className="text-green-700 font-semibold mb-1"
              >
                Your Photo
              </label>
              <div className="flex items-center border border-green-300 rounded p-2 focus-within:ring-2 focus-within:ring-green-400">
                <IoIosPhotos className="text-green-500 mr-2" />
                <input
                  {...register("photo")}
                  type="file"
                  id="photo"
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            <button className="py-2 px-4 w-full mt-3 bg-green-500 text-white font-semibold rounded-md">
              Update Profile
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Profile;
