import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import OrderTableRow from "../../../components/Dashboard/OrderTableRow/OrderTableRow";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyOrders = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/orders/${user?.email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-500">
        My All Books
      </h2>
      <div className=" px-4 sm:px-8">
        <div className="pb-8 pt-2">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-purple-200">
                    <th
                      scope="col"
                      className="px-5 py-3  text-nowrap  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Customar Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Book Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3  text-nowrap  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Author Name
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Customar Email
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 text-nowrap   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Payment Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 text-nowrap  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Delivery Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Price
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Quantity
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Order Date
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.map((order) => (
                    <OrderTableRow
                      order={order}
                      key={order._id}
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

export default MyOrders;
