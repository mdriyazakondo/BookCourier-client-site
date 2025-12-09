import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";
import Loading from "../../shared/Loading/Loading";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const BookDetails = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: book = {}, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/${id}`);
      return res.data;
    },
  });

  const handleOrder = async (book) => {
    const { bookName, authorName, price, authorEmail, image } = book;

    if (!user) {
      return navigate("/login");
    }

    const bookOrderData = {
      image,
      name: bookName,
      authorName,
      authorEmail,
      price,
      customerName: user?.displayName,
      customerEmail: user?.email,
      quantity: 1,
    };

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to place this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Order it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.post(`/orders`, bookOrderData);

          if (res.data?.insertedId) {
            Swal.fire({
              title: "Order Placed!",
              text: "Your order has been saved successfully.",
              icon: "success",
            });
          }
          navigate("/dashboard/my-orders");
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to place the order.",
            icon: "error",
          });
        }
      }
    });
  };

  if (isLoading) return <Loading />;

  const {
    bookName,
    authorName,
    isbn,
    publisher,
    pageNumber,
    language,
    genre,
    price,
    stockQuantity,
    edition,
    format,
    category,
    status,
    description,
    image,
    create_date,
  } = book;

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl border border-purple-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side — Details */}
          <div className="flex justify-center items-center p-6 bg-white rounded-r-xl border-l border-purple-100">
            <img
              src={image}
              alt={bookName}
              className="w-full max-h-[550px] object-contain rounded-lg"
            />
          </div>
          {/* Right Side — Large Image */}
          <div className="p-8 space-y-4 bg-purple-50 rounded-l-xl">
            <h1 className="text-3xl font-bold text-purple-700">{bookName}</h1>
            <p className="text-lg text-purple-600 mb-2"><span className="font-semibold">By:</span> {authorName}</p>

            <div className="grid grid-cols-2 gap-3 text-purple-800 text-sm">
              <p>
                <strong>Genre:</strong> {genre}
              </p>
              <p>
                <strong>Language:</strong> {language}
              </p>
              <p>
                <strong>Pages:</strong> {pageNumber}
              </p>
              <p>
                <strong>Edition:</strong> {edition}
              </p>
              <p>
                <strong>Format:</strong> {format}
              </p>
              <p>
                <strong>Category:</strong> {category}
              </p>
              <p>
                <strong>Publisher:</strong> {publisher}
              </p>
              <p>
                <strong>Year:</strong> {new Date(create_date).getFullYear()}
              </p>
              <p>
                <strong>ISBN:</strong> {isbn}
              </p>
              <p>
                <strong>Stock Quantity:</strong> {stockQuantity}
              </p>
            </div>

            <p className="text-purple-700 mt-3">
              <strong>Description:</strong> {description}
            </p>

            <div className="flex items-center justify-between mt-6">
              <span className="text-3xl font-bold text-purple-700">
                ${price}
              </span>

              <span
                className={`px-4 py-2 rounded-lg text-white text-sm font-semibold ${
                  status === "Available" ? "bg-purple-600" : "bg-red-500"
                }`}
              >
                {status}
              </span>
            </div>

            <button
              onClick={() => handleOrder(book)}
              className="w-full mt-5 cursor-pointer bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
