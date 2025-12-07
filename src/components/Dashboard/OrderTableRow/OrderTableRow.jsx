import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";

const OrderTableRow = ({ order, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const {
    _id,
    name,
    authorName,
    customerName,
    customerEmail,
    price,
    status,
    paymentStatus,
    order_date,
    quantity,
    image,
    description,
  } = order;

  const handleCencelled = async (order) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No",
    });

    if (!confirm.isConfirmed) return;

    const cancelledStatus = { status: "cancelled" };

    try {
      const res = await axiosSecure.patch(
        `/order-cancelled/${order._id}`,
        cancelledStatus
      );

      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Cancelled!",
          text: "Order has been cancelled successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
      }

      return res.data;
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
      });
    }
  };

  const handlePayment = async (payment) => {
    const paymentInfo = {
      price: payment.price,
      customerEmail: payment.customerEmail,
      _id: payment._id,
      name: payment.name,
    };
    const res = await axiosSecure.post(`/create-checkout-session`, paymentInfo);
    console.log(res.data);
    return (window.location.href = res.data.url);
  };

  return (
    <tr className="bg-white border-b border-gray-400 text-gray-700">
      {/* Customer Name */}
      <td className="py-2 px-4  border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {customerName}
      </td>

      {/* Book / Product Name */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {name}
      </td>

      {/* Author Name */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {authorName}
      </td>

      {/* Customer Email */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {customerEmail}
      </td>

      {/* Quantity */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        <span
          className={`${
            paymentStatus === "unpaid"
              ? "text-red-500 bg-red-100 "
              : "text-green-500 bg-green-100  "
          } py-1 px-3 rounded-full`}
        >
          {" "}
          {paymentStatus}
        </span>
      </td>

      {/* Status */}
      <td
        className={`py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap `}
      >
        <span
          className={`${
            status === "pending" || status === "cancelled"
              ? "text-red-500 bg-red-100 "
              : "text-green-500 bg-green-100  "
          } py-1 px-3 rounded-full`}
        >
          {" "}
          {status}
        </span>
      </td>

      {/* Price */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        ${price}
      </td>
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {quantity}
      </td>

      {/* Order Date */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {new Date(order_date).toDateString()}
      </td>

      {/* Actions */}
      <td className="py-2 px-4  text-center text-sm text-nowrap">
        <button
          disabled={paymentStatus === "paid" || status === "cancelled"}
          onClick={() => handlePayment(order)}
          className="bg-green-500 text-white py-1 px-4 rounded-sm cursor-pointer text-nowrap"
        >
          Pay
        </button>
        <button
          onClick={() => handleCencelled(order)}
          disabled={paymentStatus === "paid" || status === "cancelled"}
          className="bg-red-500 text-white py-1 px-4 rounded-sm cursor-pointer ml-2"
        >
          Cancelled
        </button>
      </td>
    </tr>
  );
};

export default OrderTableRow;
