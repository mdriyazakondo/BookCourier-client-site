import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../shared/Loading/Loading";
import InvoicesTable from "../../../components/Dashboard/Invoices/InvoicesTable";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Invoices = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: payments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  if (isLoading) return <Loading />;

  return (
    <div>
      <div>
        <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-500">
          My All Orders
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
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                      >
                        Book Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                      >
                        Customer Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                      >
                        Customer Email
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                      >
                        TransationId
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3   border-b border-gray-200 text-gray-800  font-semibold text-sm uppercase  text-center"
                      >
                        Status
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
                        Payment Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments?.map((order) => (
                      <InvoicesTable key={order._id} order={order} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
