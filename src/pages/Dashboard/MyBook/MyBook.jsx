import { useQuery } from "@tanstack/react-query";
import MyBookTable from "../../../components/Dashboard/TableRow/MyBookTable";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../shared/Loading/Loading";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyBook = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: books = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-books", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-books/${user?.email}`);
      return res.data;
    },
  });
  if (isLoading) return <Loading />;

  const handleDelete = async (id, refetch) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this book?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
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
      console.error(error);
    }
  };

  // const bookData = {
  //   bookName,
  //   authorName,
  //   authorEmail: user.email,
  //   isbn,
  //   publisher,
  //   publishedYear,
  //   pageNumber,
  //   language,
  //   genre,
  //   price,
  //   stockQuantity,
  //   edition,
  //   format,
  //   category,
  //   status,
  //   description,
  //   image,
  // };
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
                <tbody>
                  {books?.map((book) => (
                    <MyBookTable
                      key={book._id}
                      book={book}
                      refetch={refetch}
                      handleDelete={(id) => handleDelete(id, refetch)}
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

export default MyBook;
