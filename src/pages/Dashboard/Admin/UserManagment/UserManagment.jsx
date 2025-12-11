import React from "react";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../../shared/Loading/Loading";
import UserDataRow from "../../../../components/Dashboard/UserDataRow/UserDataRow";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UserManagment = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: allUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["all-user", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/all-users/${user.email}`);
      return res.data;
    },
  });
  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-purple-200">
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800   text-sm uppercase "
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800   text-sm uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800   text-sm uppercase "
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800   text-sm uppercase "
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800   text-sm uppercase "
                    >
                      Last Login
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b text-center font-semibold border-gray-200 text-gray-800   text-sm uppercase "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allUsers.map((users) => (
                    <UserDataRow
                      key={users._id}
                      users={users}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagment;
