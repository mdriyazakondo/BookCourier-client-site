import React from "react";

const InvoicesTable = ({ order }) => {
  const {
    bookName,
    customer_email,
    transationId,
    customer_name,
    customerEmail,
    price,
    status,
    paymentStatus,
    payment_date,
    quantity,
    image,
    description,
  } = order;
  return (
    <tr className="bg-white border-b border-gray-400 text-gray-700">
      {/* Customer Name */}
      <td className="py-2 px-4  border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {bookName}
      </td>

      {/* Book / Product Name */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {customer_name}
      </td>

      {/* Author Name */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {customer_email}
      </td>

      {/* Customer Email */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {price}
      </td>

      {/* transationId */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {transationId}
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

      {/* Order Date */}
      <td className="py-2 px-4 border border-gray-400 text-gray-700 text-center text-sm text-nowrap">
        {new Date(payment_date).toDateString()}
      </td>
    </tr>
  );
};

export default InvoicesTable;
