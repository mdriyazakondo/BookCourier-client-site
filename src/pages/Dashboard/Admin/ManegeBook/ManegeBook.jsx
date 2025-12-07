import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import ManageBookTable from "../../../../components/Dashboard/ManageBookTable/ManageBookTable";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Loading from "../../../../shared/Loading/Loading";

const ManageBook = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this book?",
      icon: "warning",
      showCancelButton: true,
    });

    if (!confirm.isConfirmed) return;

    try {
      const res = await axiosSecure.delete(`/books/${id}`);

      if (res.data.deletedCount > 0) {
        Swal.fire("Deleted!", "Book has been removed.", "success");
        refetch();
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  if (isLoading) return <Loading />;
  return (
    <div>
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-500">
        Manage All Books
      </h2>

      <div className="px-4 sm:px-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="table-head border py-2 border-gray-300">
                    Image
                  </th>
                  <th className="table-head border py-2 border-gray-300">
                    Book Name
                  </th>
                  <th className="table-head border py-2 border-gray-300">
                    Author Name
                  </th>
                  <th className="table-head border py-2 border-gray-300">
                    Create Date
                  </th>
                  <th className="table-head border py-2 border-gray-300">
                    Price
                  </th>
                  <th className="table-head border py-2 border-gray-300">
                    Language
                  </th>
                  <th className="table-head border py-2 border-gray-300">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {books?.map((book) => (
                  <ManageBookTable
                    key={book._id}
                    book={book}
                    refetch={refetch}
                    handleDelete={handleDelete}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBook;
