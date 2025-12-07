import useAxiosSecure from "../../../hooks/useAxiosSecure";

const OrderTableRow = ({ order }) => {
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
            status === "pending"
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
          disabled={paymentStatus === "paid"}
          onClick={() => handlePayment(order)}
          className="bg-green-500 text-white py-1 px-4 rounded-sm cursor-pointer text-nowrap"
        >
          Pay
        </button>
        <button
          disabled={paymentStatus === "paid"}
          className="bg-red-500 text-white py-1 px-4 rounded-sm cursor-pointer ml-2"
        >
          Cancelled
        </button>
      </td>
    </tr>
  );
};

export default OrderTableRow;
