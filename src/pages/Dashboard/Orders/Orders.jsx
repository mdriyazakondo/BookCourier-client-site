import React from "react";
import Loading from "../../../shared/Loading/Loading";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const Orders = () => {
  const { user } = useAuth();
  const {
    data: orderPayments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orderPayments"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/orders`);
      return res.data;
    },
  });
  // {
  //     _id: '6934c8543fb24273dda233e5',
  //     name: 'Sint eius itaque lab',
  //     authorName: 'Chastity Zimmerman',
  //     price: '583',
  //     customerName: 'MD RIYAZ AKONDA',
  //     customerEmail: 'mdriyazakonda@gmail.com',
  //     quantity: 0,
  //     status: 'pending',
  //     paymentStatus: 'paid',
  //     order_date: '2025-12-07T00:20:36.725Z'
  //   }
  if (isLoading) return <Loading />;
  return (
    <div>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-500">
        My All Books
      </h2>
      <div className=" px-4 sm:px-8">
        <div className="pb-8 pt-2">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Book Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Author Name
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      create date
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      language
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
