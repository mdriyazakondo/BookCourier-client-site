import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Loading from "../../../shared/Loading/Loading";
import Swal from "sweetalert2";
const WishList = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: wishLists = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["wishLists"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/wish-list`);
      return res.data;
    },
  });

  const handleWishListDelete = async (id) => {
    // Confirm delete
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosSecure.delete(`/wish-list/${id}`);

        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Book removed from your wishlist.",
            icon: "success",
            confirmButtonText: "OK",
          });

          refetch();
        }
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  if (isLoading) return <Loading />;
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-5 text-center text-purple-500">
        My Wishlist
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead className="bg-purple-200">
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Owner Email</th>
              <th>Added Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {wishLists.map((item, index) => (
              <tr key={item._id} className="hover:bg-purple-100 ">
                <td>{index + 1}</td>

                <td>
                  <img
                    src={item.image}
                    alt={item.bookName}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>

                <td className="font-medium text-nowrap">{item.bookName}</td>

                <td className=" text-nowrap">{item.authorName}</td>

                <td className=" text-nowrap">{item.authorEmail}</td>

                <td className=" text-nowrap">
                  {item.wishList_date
                    ? new Date(item.wishList_date).toLocaleDateString()
                    : "N/A"}
                </td>
                <td className=" text-nowrap">
                  <button
                    onClick={() => handleWishListDelete(item._id)}
                    className="py-1 px-2 rounded-sm bg-red-500 text-white cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WishList;
