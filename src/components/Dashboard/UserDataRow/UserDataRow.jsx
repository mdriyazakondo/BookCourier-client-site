import React from "react";
import { useState } from "react";
import UpdateRoleModal from "../Modal/UpdateRoleModal";

const UserDataRow = ({ users, refetch }) => {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  return (
    <tr className="bg-purple-50 border-b border-gray-300">
      <td className="px-5 py-5 text-nowrap text-center   text-sm">
        <img src={users?.image} alt="" className="w-10 h-10 rounded-full" />
      </td>
      <td className="px-5 py-5 text-nowrap text-center   text-sm">
        <p className="text-gray-900 ">{users?.name}</p>
      </td>
      <td className="px-5 py-5 text-nowrap text-center   text-sm">
        <p className="text-gray-900 ">{users?.email}</p>
      </td>
      <td className="px-5 py-5 text-nowrap text-center   text-sm">
        <p className="text-gray-900 ">{users?.role}</p>
      </td>
      <td className="px-5 py-5 text-nowrap text-center   text-sm">
        <p className="text-gray-900 ">
          {new Date(users?.last_loggedIn).toLocaleString()}
        </p>
      </td>

      <td className="px-5 py-5 text-nowrap text-center   text-sm">
        <span
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-purple-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-purple-200 opacity-50 rounded-full"
          ></span>
          <span className="relative">Update Role</span>
        </span>
        {/* Modal */}
        <UpdateRoleModal
          refetch={refetch}
          user={users}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </td>
    </tr>
  );
};

export default UserDataRow;
